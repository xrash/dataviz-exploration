import { VictoryPie, VictoryLine, VictoryChart, VictoryTheme } from 'victory'

const x: number[] = []

for (let i = 0; i < 8; i++) {
  x.push(i + 1)
}

export const Victory = () => {
  const data = x.map(v => {
    return {
      x: v,
      y: Math.pow(2, v),
      label: v.toString(),
    }
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ height: '512px' }}>
        <VictoryPie />
      </div>
      <div style={{ height: '512px' }}>
        <VictoryChart
          theme={VictoryTheme.material}
        >
          <VictoryLine
            data={data}
            events={[
              {
                target: "parent",
                eventHandlers: {
                  onClick: (e, f) => {
                    console.log('parent onClick', f)
                    return [
                      {
                        target: "data",
                        eventKey: "all",
                        mutation: ({ style }) => {
                          return style.stroke === "black"
                            ? null
                            : { style: { stroke: "black", strokeWidth: 5 } };
                        }
                      }
                    ];
                  }
                }
              },
              {
                target: 'data',
                eventHandlers: {
                  onClick: (e, f) => {
                    console.log('data onClick', f)
                  }
                }
              },
              {
                target: 'labels',
                eventHandlers: {
                  onClick: (e, f) => {
                    console.log('labels onClick', f)
                  },
                }
              }
            ]}
          />
        </VictoryChart>
      </div>
    </div >
  )
}
