import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import NoPage from "./components/pages/NoPage";
import FavoritesPage from "./components/pages/FavoritesPage";
import "./styles/HomePage.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="weather-app" element={<HomePage />} />
        <Route path="weather" element={<HomePage />} />
        <Route path="weather/:key/:city/:country" element={<HomePage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
