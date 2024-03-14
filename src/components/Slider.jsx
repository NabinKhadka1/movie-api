import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../App.css';
const Slider = ({ movies }) => {
  const imgPath = import.meta.env.VITE_IMG_PATH;
  return (
    <Carousel>
      {movies.map((movie) => (
        <div key={movie.id}   className="carousel-item">
          <img className="w-full h-full object-cover" src={`${imgPath}${movie.poster_path}`} alt={movie.title}/>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
