import PropTypes from "prop-types";
import { Cell, Pie, PieChart } from "recharts";
import { useSportSeeApi } from "../../../services/hooks/sportSeeAPI";
import "./ScoreChart.scss";

export default function ScoreChart({ userId }) {
  const { data, isLoading, error } = useSportSeeApi("today-score", userId);

  let score = data;

  if (error || isLoading) {
    score = 0;
  }

  const pieData = [
    { name: "completed", value: score, fillColor: "#E60000" },
    { name: "not-completed", value: 1 - score, fillColor: "transparent" },
  ];

  return (
    <div className="score-chart-container">
      <h2>Score</h2>

      <PieChart width={258} height={263}>
        <Pie
          data={pieData}
          dataKey="value"
          innerRadius={70}
          outerRadius={80}
          startAngle={90}
          endAngle={450}
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.fillColor}
              cornerRadius="50%"
            />
          ))}
        </Pie>
      </PieChart>

      <p>
        <span>{`${100 * score}%`}</span>
        <br />
        de votre
        <br />
        objectif
      </p>
    </div>
  );
}

ScoreChart.propTypes = {
  userId: PropTypes.string.isRequired,
};
