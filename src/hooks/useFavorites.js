import { useContext } from "react";
import { FavoritesContext } from "../context/FavoriteContext";

function useFavorites() {
  return useContext(FavoritesContext);
}

export default useFavorites;
