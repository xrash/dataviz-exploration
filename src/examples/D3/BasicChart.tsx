import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

export const BasicChart = () => {
  const ref = useRef(null)

  useEffect(() => {
    d3.select(ref.current)
      .selectAll("p")
      .data([4, 8, 15, 16, 23, 42])
      .enter()
      .append("p")
      .text(function(d) {
        return "I’m number " + d + "!"
      })
  }, [])

  return (
    <div className="container" ref={ref}></div>
  )
}
