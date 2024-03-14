import Slider from "./components/Slider";
import { useState,useEffect } from "react";
import axios from "axios";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const response = await axios.get(url);
    const data = await response.data.results;
    setMovies(data);
  }
  useEffect(() => {
    getMovies();
  }, [movies]);
  return (
    <>
      <Slider movies={movies} />
    </>
  );
}

export default App;
