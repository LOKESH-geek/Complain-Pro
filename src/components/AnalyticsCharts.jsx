import { useSelector } from "react-redux";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = ["#facc15", "#22c55e"];

export default function AnalyticsCharts() {
  const complaints = useSelector(
    (s) => s.complaints.complaints
  );

  const pieData = [
    {
      name: "Pending",
      value: complaints.filter(
        (c) => c.status === "Pending"
      ).length,
    },

    {
      name: "Resolved",
      value: complaints.filter(
        (c) => c.status === "Resolved"
      ).length,
    },
  ];

  const barData = ["Technical", "Billing", "Service"].map(
    (cat) => ({
      category: cat,
      total: complaints.filter(
        (c) => c.category === cat
      ).length,
    })
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 mt-10 pb-20">

      <div className="bg-white/10 rounded-3xl p-8 h-[400px]">

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} dataKey="value">

              {pieData.map((_, i) => (
                <Cell
                  key={i}
                  fill={COLORS[i]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white/10 rounded-3xl p-8 h-[400px]">

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />

            <Bar
              dataKey="total"
              fill="#06b6d4"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}