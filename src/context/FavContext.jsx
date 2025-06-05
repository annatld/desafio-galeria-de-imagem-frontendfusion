import { createContext, useState } from 'react';

export const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (image) => {
    setFavorites((prev) => {
      const isFav = prev.some((fav) => fav.id === image.id);
      if (isFav) {
        return prev.filter((fav) => fav.id !== image.id);
      } else {
        return [...prev, image];
      }
    });
  };

  return (
    <FavContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavContext.Provider>
  );
};
