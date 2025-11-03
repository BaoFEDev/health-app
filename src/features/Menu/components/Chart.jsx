import classNames from "classnames";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const COLORS = {
  bg: "#262626",
  grid: "rgba(255,255,255,.18)",
  axisText: "rgba(255,255,255,.75)",
  seriesA: "#FFCC21",
  seriesB: "#8FE9D0"
};

const Chart = ({ data, labelA, labelB, className }) => {
  return (
    <div
      className={classNames({
        [className]: !!className,
        "w-full h-[420px] bg-dark-600": true,
      })}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 24, right: 24, bottom: 24, left: 24 }}
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
            name={labelA}
            type="monotone"
            dataKey="a"
            stroke={COLORS.seriesA}
            strokeWidth={3}
            dot={{ r: 5, stroke: COLORS.seriesA, fill: COLORS.seriesA }}
            activeDot={{ r: 6 }}
          />

          <Line
            name={labelB}
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
  );
};

export default Chart;
