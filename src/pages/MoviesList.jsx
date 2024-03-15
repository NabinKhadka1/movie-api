import Movie from "../components/Movie";

const MovieList = () => {
  return (
    <div className="p-3">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 2xl:max-w-screen-2xl 2xl:mx-auto">
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
