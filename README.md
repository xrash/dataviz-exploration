# state of dataviz for js/react/react native

Research on current state of data visualization, particularly chart generation, for JavaScript, React and React Native.

## A brief overview of each library

### d3

- JS library
- Low level primitives
- Steep learning curve but still the most powerful library out there
- No react native support at all but some primitives are simple calculations that can be used to generate SVGs that work in react native

---

### visx

- React library
- Apparently well maintained
- Low level primitives but not as low as D3
- Actually based on D3, meaning we can resort to D3 if needed
- Even though it is a somewhat low level libraries, there are really good plug and play examples
- No react native support at all but some primitives are simple calculations that can be used to generate SVGs that work in react native 

---

### highcharts

- JS library
- Not free, must pay for license
- Has official react wrapper
- Decent docs but a bit  IMO
- Used to have official react native wrapper, but support was dropped (https://github.com/highcharts/highcharts-react-native)

---

### google charts

- JS library
- Quite complete, lots of charts
- Dense docs, difficult to follow but eventually works out
- Unintuitive to load, and load lots of unwanted stuff
- Untyped

---

### react-google-charts

- React library wrapping google charts JS library
- Typed and nicely wrapped for React
- I didn't find the docs to be that good, but since it's wrapping google charts, if anything we can reference the docs for google charts or even fall back to google charts in a situation of extreme necessity

---

### react-native-chart-kit

- Univerval react native library, so it is supposed to work well in every platform
- Works more or less well

---

### nivo

- React library
- Based on d3
- Looks cool, great docs
- nivo-api repo seems unmaintained - we don't want that feature but it is strange

---

### victory

- React library
- Not based on d3
- Charts don't look as cool
- API looks a bit overcomplicated

---

### vega, vega-lite, react-vega

- JS library with official support for React
- From the creators of D3
- Really interesting project that standardizes data visualization

---

### @observablehq/plot

- Cool API
- From the creators of D3
- Doesn't have TypeScript support
- Doesn't have official React support
- A bit complicated docs/examples/content on the web
- A bit too much integrated with Observable the web app

---

### deck.gl

- JS library difficult to use with React
- Extremely complicated and severely undocummented API
- Super complicated to use
- Powerful but specific to geospatial visualization
- No TS support

---

## Level of confidence on choosing each library

### Highly confident

 - vega, react-vega
 - d3
 - visx
 - google visualization or react-google-charts
 - @observable/plot
 - highcharts
 - echarts

### Moderately confident

 - nivo
 - react-native-chart-kit (this is specific to react native)

### Less confident

 - victory
 - deck.gl
