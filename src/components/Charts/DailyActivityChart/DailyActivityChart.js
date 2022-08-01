import PropTypes from "prop-types";

import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import {
  getDefaultDailyActivity,
  useSportSeeApi,
} from "../../../services/hooks/sportSeeAPI";

import "../../../assets/utils/style/styleVariables.scss";

// scss
import "./DailyActivityChart.scss";
/**
 * @param  {string} {userId}
 */
export default function DailyActivityChart({ userId }) {
  const { data, isLoading, error } = useSportSeeApi("daily-activity", userId);

  let dailyActivity = data;

  if (error || isLoading) {
    dailyActivity = getDefaultDailyActivity();
  }

  return (
    <main className="activities-container">
      <h2>Activité quotidienne</h2>

      <section className="legend-container">
        <p className="flex items-center">
          <span className="bg-neutral800 black-dot"></span>
          Poids (kg)
        </p>
        <p className="ml-8 flex items-center">
          <span className="bg-primary500 red-dot"></span>
          Calories brûlées (kCal)
        </p>
      </section>
      <BarChart
        data={dailyActivity}
        margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
        barGap={8}
        barCategoryGap="35%"
        width={835}
        height={320}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="day"
          dy={16}
          padding={{ left: -48, right: -48 }}
          stroke="color-neutral400"
          tick={{ fontSize: 14, fontWeight: 500 }}
        />
        <YAxis
          yAxisId="kg"
          dataKey="kilogram"
          domain={["dataMin - 1", "dataMax + 2"]}
          allowDecimals={false}
          dx={48}
          orientation="right"
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
          fill="color-neutral500"
          radius={[50, 50, 0, 0]}
        />
        <Bar
          yAxisId="cal"
          dataKey="calories"
          maxBarSize={8}
          fill="#E60000"
          radius={[50, 50, 0, 0]}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{
            fill: "rgba(0, 0, 0, 0.1)",
          }}
        />
      </BarChart>
    </main>
  );
}

DailyActivityChart.propTypes = {
  userId: PropTypes.string.isRequired,
};

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <div className="bg-sportsee-red p-2">
        <p className="text-white">{`${payload[0].value} kg`}</p>
        <p className="text-white">{`${payload[1].value} kCal`}</p>
      </div>
    );
  }

  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
