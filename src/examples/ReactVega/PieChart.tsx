import { Vega } from 'react-vega'

const spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A simple pie chart with embedded data.",
  "data": {
    "values": [
      { "category": 1, "value": 4 },
      { "category": 2, "value": 6 },
      { "category": 3, "value": 10 },
      { "category": 4, "value": 3 },
      { "category": 5, "value": 7 },
      { "category": 6, "value": 8 }
    ]
  },
  "mark": "arc",
  "encoding": {
    "theta": { "field": "value", "type": "quantitative" },
    "color": { "field": "category", "type": "nominal" }
  }
}

export const PieChart = () => {
  return (
    <>
      {/* @ts-ignore */}
      <Vega actions={false} spec={spec} />
    </>
  )
}
