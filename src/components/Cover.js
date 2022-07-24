import React from "react";
import PropTypes from "prop-types";
import BarCharts from "./Charts/BarCharts";
import LineCharts from "./Charts/LineCharts";

// components

export default function Cover({ user }) {
  console.log(user);
  return (
    <div className="pl-56">
      <h2 className="text-5xl mt-16">
        Bonjour <span className="text-sportsee-red">{user[0].name}</span>
      </h2>
      <p className="text-lg mt-10">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
      <div className="mt-17">
        <BarCharts />
      </div>
      <LineCharts />
    </div>
  );
}

Cover.propTypes = {
  user: PropTypes.shape({}).isRequired,
};
