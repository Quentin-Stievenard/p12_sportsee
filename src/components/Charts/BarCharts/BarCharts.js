import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  getDefaultDailyActivity,
  useSportSeeApi,
} from "../../services/hooks/useSportSeeAPI";

import { styleVar } from "../../utils/style/styleVariables";

export function DailyActivityChart({ userId }) {
  const { data, isLoading, error } = useSportSeeApi("daily-activity", userId);

  let dailyActivity = data;

  if (error || isLoading) {
    dailyActivity = getDefaultDailyActivity();
  }

  return (
    <main className="activities-container">
      <h2>Activité quotidienne</h2>

      <section className="legend-container">
        <p>
          <span className="bg-neutral800"></span>
          Poids (kg)
        </p>
        <p>
          <span className="bg-primary500"></span>
          Calories brûlées (kCal)
        </p>
      </section>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dailyActivity}
          margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
          barGap={8}
          barCategoryGap="35%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={`${styleVar.neutral200}`}
          />
          <XAxis
            dataKey="day"
            dy={16}
            padding={{ left: -48, right: -48 }}
            stroke={`${styleVar.neutral400}`}
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
          />
          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
            domain={["dataMin - 1", "dataMax + 2"]}
            allowDecimals={false}
            dx={48}
            orientation="right"
            stroke={`${styleVar.neutral400}`}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="cal"
            dataKey="calories"
            domain={[0, "dataMax + 50"]}
            hide={true}
          />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            maxBarSize={8}
            fill={`${styleVar.neutral800}`}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            maxBarSize={8}
            fill={`${styleVar.primary500}`}
            radius={[50, 50, 0, 0]}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              fill: "rgba(0, 0, 0, 0.1)",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </main>
  );
}

DailyActivityChart.propTypes = {
  userId: PropTypes.string.isRequired,
};

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <div className="tooltip-container">
        <TooltipLine background={`${styleVar.neutral800}`}>
          {`${payload[0].value} kg`}
        </TooltipLine>
        <TooltipLine background={`${styleVar.primary500}`}>
          {`${payload[1].value} kCal`}
        </TooltipLine>
      </div>
    );
  }

  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

const TooltipContainer = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const TooltipLine = styled.p`
  padding: 0.75rem;
  margin: 0;

  color: white;
  font-size: 0.7rem;
  font-weight: 500;

  background: ${(props) => props.background};
`;
