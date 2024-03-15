import Slider from "../components/Slider";
import TopRatedMovies from "../components/TopRatedMovies";
import UpcomingMovies from "../components/UpcomingMovies";
import "../style.css";

const Homepage = () => {
  return (
    <>
      <Slider />
      <UpcomingMovies />
      <TopRatedMovies />
    </>
  );
};

export default Homepage;
