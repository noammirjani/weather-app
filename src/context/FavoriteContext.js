import { useEffect, createContext, useState } from "react";

export const FavoritesContext = createContext(null);

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedInMemory = localStorage.getItem("favorites");
    return savedInMemory ? JSON.parse(savedInMemory) : {};
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const updateFavorites = (locationData, display) => {
    if (!locationData || !locationData.key) {
      return;
    }
    setFavorites((prev) => ({
      ...prev,
      [locationData.key]: {
        data: locationData,
        display,
      },
    }));
  };

  const isFave = (locationID) => {
    return favorites?.[locationID]?.display || false;
  };

  return (
    <FavoritesContext.Provider value={{ favorites, updateFavorites, isFave }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;
