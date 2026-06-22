import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { DailyEnergyMix } from "../types/energy";
import { formatDate } from "../utils/dateFormat";

type EnergyPieChartProps = {
  day: DailyEnergyMix;
};

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#f97316",
  "#dc2626",
  "#9333ea",
  "#0891b2",
  "#ca8a04",
  "#4b5563",
];

function EnergyPieChart({ day }: EnergyPieChartProps) {
  const chartData = day.sources.map((source) => ({
    name: source.fuel,
    value: source.percentage,
  }));

  return (
    <article className="energy-card">
      <h3>{formatDate(day.date)}</h3>

      <p className="clean-energy">
        Czysta energia: <strong>{day.cleanEnergyPercentage.toFixed(2)}%</strong>
      </p>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              outerRadius={85}
            >
              {chartData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip formatter={(value) => `${Number(value).toFixed(2)}%`} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="custom-legend">
        {chartData.map((item, index) => (
          <div key={item.name} className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />

            <span className="legend-name">{item.name}</span>

            <strong>{item.value.toFixed(1)}%</strong>
          </div>
        ))}
      </div>
    </article>
  );
}

export default EnergyPieChart;