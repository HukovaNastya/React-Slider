import React from 'react';
import './Carosel.css';

const Carosel = ({images}) => {
  const listItems =images.map(image =>
    <img key={image.id} src={image.path} alt="Logo" className='carosel-img'/>   
  );
  return (
    <>
      {listItems}
    </>
  )
}

export default Carosel;