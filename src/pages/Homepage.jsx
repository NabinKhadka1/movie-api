import Slider from "../components/Slider";
import TopRatedMovies from "../components/TopRatedMovies";
import UpcomingMovies from "../components/UpcomingMovies";

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
