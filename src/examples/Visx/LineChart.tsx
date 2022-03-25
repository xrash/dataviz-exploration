import { extent, max } from 'd3-array'
import * as allCurves from '@visx/curve'
import { Group } from '@visx/group'
import { LinePath } from '@visx/shape'
import { scaleTime, scaleLinear } from '@visx/scale'

type DataPoint = {
  time: number
  value: number
}

const data: DataPoint[] = [
  {
    time: 0,
    value: 2,
  },
  {
    time: 1,
    value: 3,
  },
  {
    time: 2,
    value: 5,
  },
  {
    time: 3,
    value: 4,
  },
  {
    time: 4,
    value: 2,
  },
  {
    time: 5,
    value: 3,
  },
  {
    time: 6,
    value: 6,
  },
  {
    time: 7,
    value: 9,
  },
]

// data accessors
// @ts-ignore
const getX = d => d.time
// @ts-ignore
const getY = d => d.value

// scales
const xScale = scaleTime<number>({
  domain: extent(data, getX) as [Date, Date],
})

const yScale = scaleLinear<number>({
  domain: [0, max(data, getY) as number],
})

export const LineChart = () => {
  const width = 512
  const height = 256
  const margin = 32
  const lineHeight = height / 2

  // update scale output ranges
  xScale.range([0, width - (margin * 2)])
  yScale.range([lineHeight, 0])

  return (
    <div className="visx-curves-demo">
      <svg width={width} height={height}>
        <rect width={width} height={height} fill="#eeeeee" />
        <Group top={(height / 2) - (lineHeight / 2)} left={margin}>
          <LinePath<DataPoint>
            curve={allCurves['curveNatural']}
            data={data}
            x={(d) => xScale(getX(d)) ?? 0}
            y={(d) => yScale(getY(d)) ?? 0}
            stroke="#333"
            shapeRendering="geometricPrecision"
            markerMid="url(#marker-circle)"
          />
          {data.map((d, i) => (
            <circle
              key={i}
              r={4}
              cx={xScale(getX(d))}
              cy={yScale(getY(d))}
              stroke="rgba(33,33,33,0.5)"
              fill="#000"
            />
          ))}
        </Group>
      </svg>
    </div>
  )
}
