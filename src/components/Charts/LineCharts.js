import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    day: "L",
    sessionLength: 30,
  },
  {
    day: "M",
    sessionLength: 23,
  },
  {
    day: "M",
    sessionLength: 45,
  },
  {
    day: "J",
    sessionLength: 50,
  },
  {
    day: "V",
    sessionLength: 0,
  },
  {
    day: "S",
    sessionLength: 0,
  },
  {
    day: "D",
    sessionLength: 60,
  },
];

export default function LineCharts() {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <Tooltip />
      <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" />
    </LineChart>
  );
}
