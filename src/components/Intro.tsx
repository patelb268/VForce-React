import "../styles/Intro.css";
import SearchBar from "./SearchBar";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__content">
        <p className="intro__title">Fusion Food</p>
        <p className="intro__text">Discover Restaurants</p>
        <p className="intro__text">that deliver near you.</p>
      </div>
      <SearchBar />
    </div>
  );
};

export default Intro;
