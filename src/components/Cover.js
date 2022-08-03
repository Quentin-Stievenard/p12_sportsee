import React from "react";

// API
import { useSportSeeApi } from "../services/hooks/sportSeeAPI";

// packages
import PropTypes from "prop-types";

// components
import NavBar from "./NavBar/NavBar";
import DailyActivityChart from "./Charts/DailyActivityChart/DailyActivityChart";
import ScoreChart from "./Charts/ScoreChart/ScoreChart";
import { AverageSessionsChart } from "./Charts/AverageSessionChart/AverageSessionChart";
import ActivitiesChart from "./Charts/ActivitiesChart/ActivitiesChart";
import InfoCardsGroup from "./InfoCardGroup/InfoCardGroup";
import NotFound from "./NotFound";
/**
 * @param  {string} {userId}
 */
export default function Cover({ userId }) {
  const { data, isLoading } = useSportSeeApi("firstName", userId);

  const userFirstName = data;

  return (
    <div className="flex">
      <NavBar />
      {data.length > 0 ? (
        <div>
          <main className="mt-[30px] ml-[30px]">
            <h1 className="m-0 text-5xl md:text-4xl flex">
              Bonjour{" "}
              <p className="ml-1 text-sportsee-red">
                {!isLoading && userFirstName}
              </p>
            </h1>
            <p className="mb-8 mt-[24px] text-base md:mt-2 md:mb-6">
              {isLoading || userFirstName === "unknown user" ? (
                ""
              ) : (
                <span>
                  Félicitations ! Vous avez explosé vos objectifs hier !&nbsp;👏
                </span>
              )}
            </p>

            <section className="flex">
              <div className="rounded overflow-hidden md:gap-4">
                <DailyActivityChart userId={userId} />

                <div className="flex items-center">
                  <AverageSessionsChart userId={userId} />
                  <ActivitiesChart userId={userId} />
                  <ScoreChart userId={userId} />
                </div>
              </div>

              <InfoCardsGroup userId={userId} />
            </section>
          </main>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

Cover.propTypes = {
  userId: PropTypes.string.isRequired,
};
