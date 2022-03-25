import { Chart } from 'react-google-charts'

export const ReactGoogleCharts = () => {
  return (
    <div>
      <div>
        <Chart
          chartType="ScatterChart"
          data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
          height="512px"
          legendToggle
        />
      </div>
      <div>
        <Chart
          chartType="LineChart"
          data={[
            ["Year", "Sales", "Expenses"],
            ["2004", 1000, 400],
            ["2005", 1170, 460],
            ["2006", 660, 1120],
            ["2007", 1030, 540],
          ]}
          height="512px"
          legendToggle
        />
      </div>
    </div>
  )
}
