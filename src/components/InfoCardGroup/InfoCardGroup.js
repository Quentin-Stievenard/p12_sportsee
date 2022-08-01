import PropTypes from "prop-types";
import {
  getDefaultKeyData,
  useSportSeeApi,
} from "../../services/hooks/sportSeeAPI";
import InfoCard from "../InfoCard/InfoCard";
import "./InfoCardGroup.scss";
/**
 * @param  {string} {userId}
 */
export default function InfoCardsGroup({ userId }) {
  const { data, isLoading, error } = useSportSeeApi("key-data", userId);

  let keyData = data;

  if (error || isLoading) {
    keyData = getDefaultKeyData();
  }

  return (
    <div className="card-group-container">
      <InfoCard type="Calories" value={keyData.calorieCount} />

      <InfoCard type="Protéines" value={keyData.proteinCount} />

      <InfoCard type="Glucides" value={keyData.carbohydrateCount} />

      <InfoCard type="Lipides" value={keyData.lipidCount} />
    </div>
  );
}

InfoCardsGroup.propTypes = {
  userId: PropTypes.string.isRequired,
};
