import React from 'react';

const Carosel = ({images}) => {
  const listItems =images.map(image =>
    <img key={image.id} src={image.path} alt={image.title} />   
  );
  return (
    <>
      {listItems}
    </>
  )
}

export default Carosel;