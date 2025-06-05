import { useEffect } from 'react';
import { HiXMark } from "react-icons/hi2";

const ImageModal = ({ image, onClose }) => {

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content">
        <button
          className="inline-flex items-center justify-end gap-[6px] w-full"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          Fechar  <HiXMark />
        </button>

        <img
          src={image.download_url}
          alt={`Imagem de ${image.author}`}
          className="gallery-thumbnail"/>

        <p id="modal-title" className="image-info">Autor: {image.author}</p>
        <p className="image-info">
          Dimensões: {image.width} x {image.height}
        </p>

        <a
          href={image.url}
          target="_blank"
          rel="noopener noreferrer"
          className="original-link">
          Ver imagem original
        </a>
      </div>
    </div>
  );
};

export default ImageModal;
