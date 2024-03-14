import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../App.css';
const Slider = ({ movies }) => {
  const imgPath = import.meta.env.VITE_IMG_PATH;
  return (
    <Carousel className="pt-2">
      {movies.map((movie) => (
        <div key={movie.id} className="h-[500px]">
          <img className="w-full h-full object-cover" src={`${imgPath}${movie.poster_path}`} alt={movie.title}/>
          <div className="legend">
            <span className="text-4xl font-semibold text-white">{movie.title}</span>
            <p className="mt-2">{movie.overview}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
