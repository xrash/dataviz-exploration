import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

export const D3 = () => {
  const ref = useRef(null)

  useEffect(() => {

    console.log(123)

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
    <div className="container" ref={ref}>

    </div>
  )
}
