import { Link } from "react-router-dom";
const Movie = ({ movie }) => {
  const { release_date } = movie;
  const release_year = release_date.split("-")[0];
  const imgPath = import.meta.env.VITE_IMG_PATH;
  return (
    <Link
      key={movie.id}
      className="max-w-52 hover:scale-101"
      to={`/movies/${movie.id}`}
    >
      <div className="w-200 h-150">
        <img
          className="rounded w-[100%]"
          src={`${imgPath}${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="flex justify-between items-center py-1 w-200">
        <span className="text-sm text-slate-200">{release_year}</span>
        <span className="text-sm text-slate-200 border rounded-md p-0.5">
          MOVIE
        </span>
      </div>
      <div className="text-slate-200">{movie.original_title}</div>
    </Link>
  );
};

export default Movie;
