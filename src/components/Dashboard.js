//components
import Header from "./Header";
import Cover from "./Cover";
import PropTypes from "prop-types";
export default function Dashboard() {
  const userId = window.location.pathname.split("/")[2];
  return (
    <main className="h-screen">
      <Header />
      <Cover userId={userId} />
    </main>
  );
}

Dashboard.propTypes = {
  userId: PropTypes.string,
};
