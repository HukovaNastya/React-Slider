import React from 'react';
import './Carousel.css';

const CarouselPopUp = ({setShowModal, showModal, currentImg}) => {
  const closePopUp = () => {
    setShowModal(false);
  };
  return (
    <>
      {
        showModal? (
         <div className='carousel-pop-up-container'>
           <div className='pop-up-wrapper'>
             <img className='pop-up-img' src={currentImg.path}/>
             <button className='pop-up-btn' onClick={closePopUp}>X</button>
           </div>
         </div>
        ):null
      }


    </>

  )
}

export default CarouselPopUp ;