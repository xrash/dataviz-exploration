import './App.css'
import { Route } from 'wouter'
import { ReactVega } from './examples/ReactVega'
import { Summary } from './examples/Summary'
import { Highcharts } from './examples/Highcharts'
import { Victory } from './examples/Victory'
import { Nivo } from './examples/Nivo'
import { ReactGoogleCharts } from './examples/ReactGoogleCharts'
import { GoogleVisualization } from './examples/GoogleVisualization'
import { Visx } from './examples/Visx'
import { D3 } from './examples/D3'
import { ObservablePlot } from './examples/ObservablePlot'
import { DeckGL } from './examples/DeckGL'
import { Echarts } from './examples/Echarts'
import { Comparison } from './examples/Comparison'

function App() {
  return (
    <div className="app">
      <Route path="/">
        {() => <Summary />}
      </Route>
      <Route path="/react-vega">
        {() => <ReactVega />}
      </Route>
      <Route path="/highcharts">
        {() => <Highcharts />}
      </Route>
      <Route path="/victory">
        {() => <Victory />}
      </Route>
      <Route path="/nivo">
        {() => <Nivo />}
      </Route>
      <Route path="/react-google-charts">
        {() => <ReactGoogleCharts />}
      </Route>
      <Route path="/google-visualization">
        {() => <GoogleVisualization />}
      </Route>
      <Route path="/visx">
        {() => <Visx />}
      </Route>
      <Route path="/d3">
        {() => <D3 />}
      </Route>
      <Route path="/observable-plot">
        {() => <ObservablePlot />}
      </Route>
      <Route path="/echarts">
        {() => <Echarts />}
      </Route>
      <Route path="/deck-gl">
        {() => <DeckGL />}
      </Route>
      <Route path="/comparison">
        {() => <Comparison />}
      </Route>
    </div>
  )
}

export default App
