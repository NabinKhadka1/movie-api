import Slider from "react-slick";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { topRatedMoviesSlider } from "../features/topRatedMovieSlice";
import { imgPath } from "../features/api";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
const TopRatedMovies = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(topRatedMoviesSlider());
  }, [dispatch]);

  const { loading, error, movies } = useSelector(
    (state) => state.topRatedMovies
  );

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(5);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  if (error) {
    return (
      <div className="flex justify-center text-white mt-5">
        Sorry! Encountered an error
      </div>
    );
  }

  if (loading || !movies.length || slidesToShow === null) {
    return (
      <div className="flex justify-center text-white mt-5">Loading...</div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <div className="my-8">
      <div className="px-5 mb-3 flex justify-between items-center">
        <h2 className="text-white font-bold text-3xl">Top Rated Movies</h2>
        <Link className="text-slate-200 underline" to="/filter/movie">
          View More &gt;&gt;
        </Link>
      </div>
      <Slider {...settings} className="px-5">
        {movies?.map((movie) => (
          <div key={movie.id}>
            <img src={`${imgPath}${movie.backdrop_path}`} alt={movie.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopRatedMovies;
