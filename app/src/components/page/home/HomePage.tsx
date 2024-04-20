import useTitle from "../../../hooks/UseTitle.tsx";
import MangaCollection from "../../MangaCollection";
import "./HomePage.scss";

const HomePage = () => {
  useTitle("Home");

  return (
    <div className="home-page">
      <h1 className="home-page-title">Home page</h1>
      <MangaCollection />
    </div>
  );
};

export default HomePage;
