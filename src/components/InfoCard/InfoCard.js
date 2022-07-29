import PropTypes from "prop-types";

import calorieIcon from "../../assets/images/icon-calorie.svg";
import glucideIcon from "../../assets/images/icon-glucide.svg";
import lipidIcon from "../../assets/images/icon-lipid.svg";
import proteinIcon from "../../assets/images/icon-protein.svg";
import { toFrenchIntegerFormat } from "../../assets/utils/str/format";
import "./InfoCard.scss";

const ICON_BY_TYPE = {
  Calories: calorieIcon,
  Glucides: glucideIcon,
  Protéines: proteinIcon,
  Lipides: lipidIcon,
};

const UNIT_BY_TYPE = {
  Calories: "kCal",
  Glucides: "g",
  Protéines: "g",
  Lipides: "g",
};

export default function InfoCard({ type, value }) {
  return (
    <div className="info-card-container">
      <img src={ICON_BY_TYPE[type]} alt={type} width="60" height="60" />

      <div className="info-card-data">
        <div className="info-card-measure" data-testid="card-measure">
          {value !== 0
            ? `${toFrenchIntegerFormat(value)}${UNIT_BY_TYPE[type]}`
            : "-"}
        </div>

        <div className="info-card-type" data-testid="card-type">
          {type}
        </div>
      </div>
    </div>
  );
}

InfoCard.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
