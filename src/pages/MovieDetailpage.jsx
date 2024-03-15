import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { searchDetail } from "../features/searchMovieDetailSlice";
import { imgPath } from "../features/api";
import "../style.css";

const MovieDetailpage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchDetail(id));
  }, [dispatch, id]);

  const { loading, error, movie } = useSelector(
    (state) => state.searchMovieDetail
  );

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
    <div className="mt-5 ml-5">
      <Link className="bg-blue-600 p-2 text-slate-200 rounded" to="/">
        Back Home
      </Link>
      <div className="flex flex-col md:flex-row mt-5 gap-2 max-w-5xl lg:mx-auto">
        <div className="sm:w-[80%] sm:mx-auto max-w-[500px] md:w-[100%]">
          <img
            className="w-[100%] object-contain rounded"
            src={`${imgPath}${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="w-[80%] mx-auto md:w-[100%]">
          <h3 className="text-xl font-bold lg:text-3xl">{movie.title}</h3>
          <p className="text-sm mt-2 lg:text-lg">{movie.overview}</p>
          <p className="flex mt-2 gap-1 lg:gap-2">
            <span className="font-bold text-slate-950">Release: </span>
            <span className="text-slate-50">{movie.release_date}</span>
          </p>
          <p className="flex flex-wrap gap-1 lg:gap-2">
            <span className="font-semibold text-slate-950">Genre: </span>
            {movie?.genres?.map((genre) => (
              <span className="text-slate-200" key={genre.id}>
                {genre.name},
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailpage;
