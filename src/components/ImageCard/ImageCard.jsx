import { useState, useContext } from 'react';
import { HiOutlineHeart } from "react-icons/hi2";
import { HiMiniHeart } from "react-icons/hi2";
import ImageModal from '../ImageModal/ImageModal';
import { FavContext } from '../../context/FavContext';

const ImageCard = ({ image }) => {
  const [showModal, setShowModal] = useState(false);
  const { favorites, toggleFavorite } = useContext(FavContext);

  const isFavorited = favorites.some(fav => fav.id === image.id);

  return (
    <div className="image-card">
      <img
        src={image.download_url}
        alt={image.author}
        className="gallery-item"
        onClick={() => setShowModal(true)}
      />

    <button
  aria-label={isFavorited ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
  className="favorite-button"
  onClick={() => toggleFavorite(image)}
>
  {isFavorited ? (<> <HiMiniHeart /> Remover Favorito</>) 
  : (<> <HiOutlineHeart /> Favoritar </>)}
</button>


      {showModal && (
        <ImageModal image={image} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default ImageCard;

