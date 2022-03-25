import { useEffect, useRef } from 'react'

export const GoogleVisualization = () => {

  const myref = useRef(null)

  useEffect(() => {
    // @ts-ignore
    google.charts.load('current', { 'packages': ['corechart'] });
    // @ts-ignore
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // @ts-ignore
      var data = google.visualization.arrayToDataTable([
        ['Age', 'Weight'],
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7]
      ]);

      var options = {
        title: 'Age vs. Weight comparison',
        hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
        vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
        legend: 'none'
      };

      // @ts-ignore
      var chart = new google.visualization.ScatterChart(myref.current);

      chart.draw(data, options);
    }
  }, [myref])

  return (
    <div>
      <script src="https://www.gstatic.com/charts/loader.js"></script>
      <div ref={myref}></div>
    </div>
  )
}
