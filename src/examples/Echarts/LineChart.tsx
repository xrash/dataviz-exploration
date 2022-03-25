import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

export const LineChart = () => {
  const myref = useRef(null)

  useEffect(() => {
    if (!myref.current) {
      return
    }

    var myChart = echarts.init(myref.current);

    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };

    // @ts-ignore
    myChart.setOption(option);
  }, [])

  return (
    <div style={{ width: 512, height: 512 }} ref={myref}></div>
  )

}
