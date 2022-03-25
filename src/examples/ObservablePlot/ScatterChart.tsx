// @ts-ignore
import * as Plot from '@observablehq/plot'
import { useEffect, useState } from 'react'

const data = [
  {
    id: 736041664,
    name: "A Jesus Garcia",
    nationality: "ESP",
    sex: "male",
    date_of_birth: '1969-10-17',
    height: 1.72,
    weight: 64,
    sport: "athletics",
    gold: 0,
    silver: 0,
    bronze: 0,
    info: null
  },
  {
    id: 532037425,
    name: "A Lam Shin",
    nationality: "KOR",
    sex: "female",
    date_of_birth: '1986-09-23',
    height: 1.68,
    weight: 56,
    sport: "fencing",
    gold: 0,
    silver: 0,
    bronze: 0,
    info: null
  },
  {
    id: 435962603,
    name: "Aaron Brown",
    nationality: "CAN",
    sex: "male",
    date_of_birth: '1992-05-27',
    height: 1.98,
    weight: 79,
    sport: "athletics",
    gold: 0,
    silver: 0,
    bronze: 1,
    info: null
  },
  {
    id: 521041435,
    name: "Aaron Cook",
    nationality: "MDA",
    sex: "male",
    date_of_birth: '1991-01-02',
    height: 1.83,
    weight: 80,
    sport: "taekwondo",
    gold: 0,
    silver: 0,
    bronze: 0,
    info: null
  },
]

export const ScatterChart = () => {
  const [x, setX] = useState<SVGSVGElement | null>(null)

  useEffect(() => {
    const dotplot = Plot.dot(data, { x: "weight", y: "height", stroke: "sex" }).plot()
    setX(dotplot as SVGSVGElement)
  }, [])

  console.log(x)

  return (
    <div>
      {x && (
        <svg
          viewBox="0 0 640 400"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="10"
          className="plot-ee20ee57d5f1b"
          width="640"
          height="400"
          dangerouslySetInnerHTML={{ __html: x.innerHTML }}
        />
      )}
    </div>
  )
}
