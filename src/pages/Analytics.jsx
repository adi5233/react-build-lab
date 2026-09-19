import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  { month: "Jan", revenue: 18000 },
  { month: "Feb", revenue: 22000 },
  { month: "Mar", revenue: 20500 },
  { month: "Apr", revenue: 28000 },
  { month: "May", revenue: 31500 },
  { month: "Jun", revenue: 36000 }
];

function Analytics() {
  return (
    <section>
      <p className="eyebrow">
        Experiment: large dependency
      </p>

      <h1>Analytics</h1>

      <div className="panel chart">
        <LineChart
          width={700}
          height={350}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
          />
        </LineChart>
      </div>
    </section>
  );
}

export default Analytics;