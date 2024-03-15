import Movie from "../components/Movie";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchMovies } from "../features/searchMovieSlice";

const Searchpage = () => {
  const { searchText } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchMovies(searchText));
  }, [dispatch, searchText]);

  const { loading, error, movies } = useSelector((state) => state.searchMovies);

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
    <div className="p-3">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 2xl:max-w-screen-2xl 2xl:mx-auto">
        {movies?.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Searchpage;
