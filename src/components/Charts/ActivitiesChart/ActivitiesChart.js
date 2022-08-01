import PropTypes from "prop-types";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import "./ActivitiesChart.scss";
import {
  getDefaultActivities,
  useSportSeeApi,
} from "../../../services/hooks/sportSeeAPI";

const ACTIVITIES_ORDER_IN_CHART = [
  "Intensité",
  "Vitesse",
  "Force",
  "Endurance",
  "Energie",
  "Cardio",
];
/**
 * @param  {string} {userId}
 */
export default function ActivitiesChart({ userId }) {
  const { data, isLoading, error } = useSportSeeApi("activities", userId);

  let activities = data;

  if (error || isLoading) {
    activities = getDefaultActivities();
  }

  const orderedActivities = [];

  for (let activity of ACTIVITIES_ORDER_IN_CHART) {
    for (let item of activities) {
      if (item.activity === activity) {
        orderedActivities.push({
          activity: activity,
          value: item.value,
        });
      }
    }
  }

  return (
    <section className="radar-chart-container ml-7.5">
      <RadarChart
        data={orderedActivities}
        outerRadius={window.innerWidth > 1340 ? "70%" : "60%"}
        width={258}
        height={263}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="activity"
          stroke="white"
          dy={4}
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 500,
          }}
        />
        <Radar
          dataKey="value"
          fill="#FF0101B2"
          fillOpacity={0.7}
          stroke="transparent"
        />
      </RadarChart>
    </section>
  );
}

ActivitiesChart.propTypes = {
  userId: PropTypes.string.isRequired,
};
