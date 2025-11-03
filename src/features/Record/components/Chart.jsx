import classNames from "classnames";
import { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis
} from "recharts";

const COLORS = {
  bg: "#262626",
  grid: "rgba(255,255,255,.18)",
  axisText: "rgba(255,255,255,.75)",
  seriesA: "#FFCC21",
  seriesB: "#8FE9D0",
};

const Chart = ({ data, className }) => {
  const [active, setActive] = useState("年");
  const filters = ["日", "週", "月", "年"];

  return (
    <div
      className={classNames(
        "w-full mx-auto bg-dark-600 text-white p-6",
        className
      )}
    >
      <div className="flex justify-start items-center mb-2">
        <h2 className="text-lg font-medium tracking-wide w-24">BODY RECORD</h2>
        <span className="text-lg">2021.05.21</span>
      </div>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 16, right: 16, bottom: 16, left: 0 }}
          >
            <CartesianGrid vertical stroke={COLORS.grid} horizontal={false} />

            <XAxis
              dataKey="m"
              tickMargin={10}
              tick={{ fill: COLORS.axisText, fontSize: 14 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{ stroke: COLORS.grid }}
              contentStyle={{
                background: "#2f2f2f",
                border: "1px solid rgba(255,255,255,.12)",
                color: "white",
                borderRadius: 8,
              }}
              labelStyle={{ color: "white", marginBottom: 4 }}
            />

            <Line
              type="monotone"
              dataKey="a"
              stroke={COLORS.seriesA}
              strokeWidth={3}
              dot={{ r: 5, stroke: COLORS.seriesA, fill: COLORS.seriesA }}
              activeDot={{ r: 6 }}
            />

            <Line
              type="monotone"
              dataKey="b"
              stroke={COLORS.seriesB}
              strokeWidth={3}
              dot={{ r: 5, stroke: COLORS.seriesB, fill: COLORS.seriesB }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-start gap-4 mt-4">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={classNames(
              "w-14 h-8 rounded-full font-medium transition",
              active === item
                ? "bg-primary-300 text-white"
                : "bg-white text-primary-300"
            )}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chart;
