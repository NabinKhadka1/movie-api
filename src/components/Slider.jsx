import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css";
import { imgPath } from "../features/api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { moviesSlider } from "../features/sliderSlice";
const Slider = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(moviesSlider());
  }, [dispatch]);
  const { loading, error, movies } = useSelector((state) => state.movies);
  if (error) {
    return (
      <div className="flex justify-center text-white mt-5">
        Sorry! Encountered an error
      </div>
    );
  }
  if (loading) {
    return (
      <div className="flex justify-center text-white mt-5">Loading...</div>
    );
  }

  return (
    <Carousel className="pt-2">
      {movies?.map((movie) => (
        <div key={movie.id} className="h-[600px]">
          <img
            className="w-full h-full object-contain"
            src={`${imgPath}${movie.backdrop_path}`}
            alt={movie.title}
          />
          <div className="legend sm:legendsm md:legendmd lg:legendlg">
            <span className="text-4xl font-semibold text-white">
              {movie.title}
            </span>
            <p className="mt-2">{movie.overview}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
