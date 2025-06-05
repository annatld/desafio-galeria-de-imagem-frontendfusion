import { useContext } from 'react';
import { FavContext } from '../context/FavContext';
import ImageCard from '../components/ImageCard/ImageCard';

export default function Fav() {
  const { favorites } = useContext(FavContext);

  return (
    <div className="container">
      {favorites.length === 0 ? (
        <h1 className="text-3xl font-bold text-center w-full">Nenhum favorito ainda.</h1>
      ) : (
        favorites.map(img => (
          <ImageCard key={img.id} image={img} />
        ))
      )}
    </div>
  );
}

