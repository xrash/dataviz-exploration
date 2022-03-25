import Highcharts from 'highcharts'
// import 'highcharts/modules/treemap'
import HighchartsReact from 'highcharts-react-official'
import highchartsTreemap from 'highcharts/modules/treemap';

highchartsTreemap(Highcharts)

export const TreeChart = () => {

  const data = [
    {
      name: 'three',
      value: 3,
    },
    {
      name: 'two',
      value: 2
    },
    {
      name: 'one',
      value: 1
    },
  ]

  const options = {
    series: [
      {
        type: 'treemap',
        // layoutAlgorithm: 'squarified',
        animationLimit: 1000,
        dataLabels: {
          enabled: true
        },
        data,
      }
    ],
    subtitle: {
      text: 'this is the subtitle'
    },
    title: {
      text: 'this is the title'
    }
  }

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  )
}
