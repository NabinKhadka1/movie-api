import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx/Layout";
import Homepage from "./pages/Homepage";
import Searchpage from "./pages/Searchpage";
import MovieDetailpage from "./pages/MovieDetailpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/filter/:searchText" element={<Searchpage />} />
          <Route path="/movies/:id" element={<MovieDetailpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
