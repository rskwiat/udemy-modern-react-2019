import '../css/ImageList.css';

import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const imageArray = images.map((image) => {
    return (
      <ImageCard key={image.id} image={image} />
    );
  });

  return <div className="image-list">{imageArray}</div>
}

export default ImageList;
