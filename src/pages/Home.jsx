import { useEffect, useState } from 'react';
import ImageCard from '../components/ImageCard/ImageCard';

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=1&limit=10')
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div className='container'>
      {images.map(img => (
        <ImageCard key={img.id} image={img} />
      ))}
    </div>
  );
};

export default Home;
