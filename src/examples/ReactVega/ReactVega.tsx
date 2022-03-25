import { BarChart } from './BarChart'
import { LineChart } from './LineChart'
import { PieChart } from './PieChart'

export const ReactVega = () => {
  return (
    <div>
      <div>
        <BarChart />
      </div>
      <div className="spacer"></div>
      <div>
        <LineChart />
      </div>
      <div className="spacer"></div>
      <div>
        <PieChart />
      </div>
    </div>
  )
}
