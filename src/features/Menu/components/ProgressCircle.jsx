import { PieChart, Pie, Cell } from "recharts";

const COLORS = {
  track: "rgba(255,255,255,0.2)",
  fill: "#FFCC21",
};
const ProgressCircle = ({
  date = "05/21",
  rate = 75,
  size = 200,
  strokeWidth = 8,
}) => {
  const data = [
    { name: "completed", value: rate },
    { name: "remaining", value: 100 - rate },
  ];
  return (
    <div className="relative inline-flex items-center justify-center">
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <PieChart width={size} height={size}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={-270}
            innerRadius={size / 2 - strokeWidth * 2}
            outerRadius={size / 2 - strokeWidth}
            dataKey="value"
            stroke="none"
          >
            <Cell fill={COLORS.fill} />
            <Cell fill={COLORS.track} />
          </Pie>
        </PieChart>

        <div className="absolute text-center flex items-baseline gap-1">
          <span className="text-white text-sub leading-[22px] font-normal">{date}</span>
          <span className="text-white text-[25px] leading-[30px] font-normal">{rate}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressCircle;
