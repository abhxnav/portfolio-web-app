import React from 'react';
import Gallery from 'react-image-gallery';

import './imageGallery.scss';

const ImageGallery = (props) => {
  const imageList = props?.images?.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });

  return (
    <div>
      <Gallery items={imageList} showBullets showThumbnails={true} />
    </div>
  )
}

export default ImageGallery;
