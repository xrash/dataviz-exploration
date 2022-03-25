import { letterFrequency } from '@visx/mock-data'
import { Group } from '@visx/group'
import { Bar } from '@visx/shape'
import { AxisBottom } from '@visx/axis'
import { scaleLinear, scaleBand } from '@visx/scale'
import { LetterFrequency } from '@visx/mock-data/lib/mocks/letterFrequency'

// We'll use some mock data from `@visx/mock-data` for this.
const data = letterFrequency
console.log('data', data)

// Define the graph dimensions and margins
const width = 500
const height = 500
const margin = { top: 20, bottom: 20, left: 20, right: 20 }

// Then we'll create some bounds
const xMax = width - margin.left - margin.right
const yMax = height - margin.top - margin.bottom

// We'll make some helpers to get at the data we want
const x = (d: LetterFrequency) => d.letter
const y = (d: LetterFrequency) => +d.frequency * 100

// And then scale the graph by our data
const xScale = scaleBand({
  range: [0, xMax],
  round: true,
  domain: data.map(x),
  padding: 0.4,
})

const yScale = scaleLinear({
  range: [yMax, 0],
  round: true,
  domain: [0, Math.max(...data.map(y))],
})

// Compose together the scale and accessor functions to get point functions
// @ts-ignore
const compose = (scale, accessor) => data => scale(accessor(data))
const xPoint = compose(xScale, x)
const yPoint = compose(yScale, y)

export const BarChart = () => {
  return (
    <svg width={width} height={height}>
      {data.map((d, i) => {
        const barHeight = yMax - yPoint(d)
        return (
          <Group key={`bar-${i}`}>
            <Bar
              x={xPoint(d)}
              y={yMax - barHeight}
              height={barHeight}
              width={xScale.bandwidth()}
              fill="#fc2e1c"
            />
          </Group>
        )
      })}
      <AxisBottom
        scale={xScale}
        label={'frequency of letters of the alphabet in English'}
        tickValues={data.map(v => v.letter)}
        top={height - 40}
      />
    </svg>
  )
}
