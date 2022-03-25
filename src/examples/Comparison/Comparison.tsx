import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'
import 'echarts-gl'

const data = [
  {
    name: 'echarts',
    difficulty: 0.61,
    coolness: 0.7,
    result: 0.8,
  },
  {
    name: 'visx',
    difficulty: 0.83,
    coolness: 0.78,
    result: 0.81,
  },
  {
    name: 'vega',
    difficulty: 0.3,
    coolness: 0.84,
    result: 0.7,
  },
  {
    name: 'd3',
    difficulty: 0.92,
    coolness: 0.89,
    result: 0.86,
  },
  {
    name: 'google charts',
    difficulty: 0.55,
    coolness: 0.6,
    result: 0.71,
  },
  {
    name: 'observable/plot',
    difficulty: 0.77,
    coolness: 0.68,
    result: 0.76,
  },
  {
    name: 'highcharts',
    difficulty: 0.24,
    coolness: 0.4,
    result: 0.5,
  },
  {
    name: 'nivo',
    difficulty: 0.3,
    coolness: 0.45,
    result: 0.49,
  },
  {
    name: 'victory',
    difficulty: 0.33,
    coolness: 0.25,
    result: 0.3,
  },
  {
    name: 'deck.gl',
    difficulty: 1,
    coolness: 0.8,
    result: 0.9,
  },
]

export const Comparison = () => {
  const myref = useRef(null)

  useEffect(() => {
    if (!myref.current) {
      return
    }

    var myChart = echarts.init(myref.current);

    const option = {
      tooltip: {},
      grid3D: {},
      xAxis3D: {
        name: 'difficulty',
        type: 'value'
      },
      yAxis3D: {
        name: 'coolness',
        type: 'value'
      },
      zAxis3D: {
        name: 'result',
        type: 'value'
      },
      dataset: {
        dimensions: [
          'name',
          'difficulty',
          'coolness',
          'result',
        ],
        source: data
      },
      series: [
        {
          type: 'scatter3D',
          symbolSize: 6,
          data: data.map(function(item, idx) {
            console.log(item, idx)
            return [item.difficulty, item.coolness, item.result, item.name]
          }),
        }
      ]
    };

    // @ts-ignore
    myChart.setOption(option);
  }, [])

  return (
    <div style={{ margin: 64, width: 640, height: 640 }} ref={myref}></div>
  )

}
