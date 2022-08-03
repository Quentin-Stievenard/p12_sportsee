import PropTypes from "prop-types";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import {
  getDefaultAverageSessions,
  useSportSeeApi,
} from "../../../services/hooks/sportSeeAPI";

import "../../../assets/utils/style/styleVariables.scss";
import "./AverageSessionChart.scss";
/**
 * @param  {string} {userId}
 */
export function AverageSessionsChart({ userId }) {
  const { data, isLoading, error } = useSportSeeApi("average-sessions", userId);

  let averageSessions = data;

  if (error || isLoading) {
    averageSessions = getDefaultAverageSessions();
  }

  return (
    <section className="line-chart-container">
      <h2 className="title-line-chart">
        Durée moyenne des
        <br />
        sessions
      </h2>

      <LineChart
        data={averageSessions}
        outerRadius="75%"
        margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
        width={200}
        height={200}
      >
        <XAxis
          dataKey="day"
          stroke="rgba(255, 255, 255, 0.6)"
          axisLine={false}
          dy={10}
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 500,
          }}
        />
        <YAxis
          dataKey="sessionLength"
          domain={[0, "dataMax + 60"]}
          hide={true}
        />

        <Line
          dataKey="sessionLength"
          type={`${userId === "18" ? "step" : "monotone"}`}
          stroke="#FFFFFF "
          strokeWidth={2}
          dot={false}
          activeDot={{
            stroke: "rgba(255,255,255, 0.6)",
            strokeWidth: 10,
            r: 5,
          }}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{
            stroke: "rgba(0, 0, 0, 0.1)",
            strokeWidth: 32,
          }}
        />
      </LineChart>
    </section>
  );
}

AverageSessionsChart.propTypes = {
  userId: PropTypes.string.isRequired,
};

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return <p className="p-2 text-xs bg-white">{`${payload[0].value} min`}</p>;
  }

  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
