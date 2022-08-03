import React from 'react'
import "./Char.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
type Props = {

    title: String,
    data: any,
    datakey: any,
    grid: any
   
}

const Char = (props: Props) => {
  return (
    <div>
        <div className="chart">
      <h3 className="chartTitle">addd</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart >
          <XAxis  />
          <Line  />
          <Tooltip />
          {/* {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />} */}
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  )
}

export default Char