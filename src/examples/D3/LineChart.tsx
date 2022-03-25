import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

export const LineChart = () => {
  const ref = useRef(null)

  useEffect(() => {

    // set the dimensions and margins of the graph
    const margin = { top: 10, right: 30, bottom: 30, left: 60 },
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom

    // append the svg object to the body of the page
    const svg = d3.select(ref.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")")

    d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv")
      .then((data) => {

        // Add X axis --> it is a date format
        const x = d3.scaleTime()
          // @ts-ignore
          .domain(d3.extent(data, function(d) { return new Date(d.date) }))
          .range([0, width])
        svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x))

        // Add Y axis
        const y = d3.scaleLinear()
          // @ts-ignore
          .domain([0, d3.max(data, function(d) { return +d.value })])
          .range([height, 0])
        svg.append("g")
          .call(d3.axisLeft(y))

        // Add the line
        svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 1.5)
          // @ts-ignore
          .attr("d", d3.line()
            // @ts-ignore
            .x(function(d) { return x(new Date(d.date)) })
            // @ts-ignore
            .y(function(d) { return y(d.value) })
          )


      })
  }, [])

  return (
    <div ref={ref}></div>
  )
}
