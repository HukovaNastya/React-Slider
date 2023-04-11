import React from 'react';
import {CarouselButton} from './CarouselButton ';
import './Carousel.css';
import CarouselPopUp from './CarouselPopUp';

const Carousel = ({images, currentImg, setCurrentImg, setShowModal, showModal, imageRef}) => {
   let currentIndex = images.findIndex((image) => image.id === currentImg.id);

   const handlePrevImage = () => {
    if(currentIndex === 0){
      setCurrentImg(images[images.length - 1])
      } else {
      setCurrentImg(images[currentIndex - 1])
    }
   }

   const handleNextImage = () => {
    if(currentIndex === images.length - 1){
      setCurrentImg(images[0])
    } else {
      setCurrentImg(images[currentIndex + 1])
    }
   }

   const showPopUp = (e) => {
     setShowModal(!showModal)
   }

  return (
    <div  className='carousel-container'>
      <CarouselButton style={{left: '550px'}} onClick={handlePrevImage}>{'<'}</CarouselButton>
      <CarouselButton style={{right: '550px'}} onClick={handleNextImage}>{'>'}</CarouselButton>
      <div className='carousel-container-img'>
        <img className='carousel-img' src={currentImg.path} onClick={showPopUp}/>
        <CarouselPopUp setShowModal={setShowModal} showModal={showModal} currentImg={currentImg}/>
      </div>
    </div>
  )
}

export default Carousel;