import { Vega } from 'react-vega'

const padding = 16

const spec = {
  $schema: 'https://vega.github.io/schema/vega/v5.json',
  width: 400,
  height: 200,
  padding: {
    left: padding,
    right: padding,
    top: padding,
    bottom: padding,
  },

  data: [
    {
      name: 'table',
      values: [
        { category: 'A', amount: 28 },
        { category: 'B', amount: 55 },
        { category: 'C', amount: 43 },
        { category: 'D', amount: 91 },
        { category: 'E', amount: 81 },
        { category: 'F', amount: 53 },
        { category: 'G', amount: 19 },
        { category: 'H', amount: 87 },
      ],
    },
  ],

  signals: [
    {
      name: 'coolsignal',
      value: {},
      on: [
        { events: 'rect:mouseover', update: 'datum' },
        { events: 'rect:mouseout', update: '{}' },
      ],
    },
  ],

  scales: [
    {
      name: 'xscale',
      type: 'band',
      domain: { data: 'table', field: 'category' },
      range: 'width',
    },
    {
      name: 'yscale',
      domain: { data: 'table', field: 'amount' },
      nice: true,
      range: 'height',
    },
  ],

  axes: [
    { orient: 'bottom', scale: 'xscale' },
    { orient: 'left', scale: 'yscale' },
  ],

  marks: [
    {
      type: 'rect',
      from: { data: 'table' },
      encode: {
        enter: {
          x: { scale: 'xscale', field: 'category', offset: 16 },
          width: { scale: 'xscale', band: 1, offset: -32 },
          y: { scale: 'yscale', field: 'amount' },
          y2: { scale: 'yscale', value: 0 },
        },
        update: {
          fill: { value: 'steelblue' },
        },
        hover: {
          fill: { value: 'red' },
        },
      },
    },
    {
      type: 'text',
      encode: {
        enter: {
          align: { value: 'center' },
          baseline: { value: 'bottom' },
          fill: { value: '#333' },
        },
        update: {
          x: { scale: 'xscale', signal: 'coolsignal.category', band: 0.5 },
          y: { scale: 'yscale', signal: 'coolsignal.amount', offset: -2 },
          text: { signal: 'coolsignal.amount' },
          fillOpacity: [{ test: 'datum === coolsignal', value: 0 }, { value: 1 }],
        },
      },
    },
  ],

}

// @ts-ignore
function handleCoolsignal(name, e) {
  console.log('coolsignal', name, e)
}

const signalListeners = {
  coolsignal: handleCoolsignal,
}

export const BarChart = () => {
  return (
    <>
      {/* @ts-ignore */}
      <Vega spec={spec} signalListeners={signalListeners} />
    </>
  )
}
