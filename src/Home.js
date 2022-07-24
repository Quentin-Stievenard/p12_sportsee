// css
import "./Home.css";

//components
import Header from "./components/Header";
// import NavBar from "./components/NavBar";
import Cover from "./components/Cover";

// data
import data from "./data.json";

export default function Home() {
  return (
    <main>
      <Header />
      {/* <NavBar /> */}
      <Cover user={data} />
    </main>
  );
}
