import React from 'react';
import {CarouselButton} from './CarouselButton ';
import './Carousel.css';

const Carousel = ({images, currentImg, setCurrentImg}) => {
  //  const leftArrowStyles = {
  //   position: 'absolute',
  //   top: '50%',
  //   transform: 'translate(0, -50%)',
  //   left: '20px',
  //   fontSize: '60px',
  //   color: 'white',
  //   zIndex: 1,
  //   cursor: 'pointer',
  //  }

  //  const rightArrowStyles = {
  //   position: 'absolute',
  //   top: '50%',
  //   transform: 'translate(0, -50%)',
  //   right: '20px',
  //   fontSize: '60px',
  //   color: 'white',
  //   zIndex: 1,
  //   cursor: 'pointer',
  //  }
   
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

  return (
    <div  className='carousel-container'>
      <CarouselButton style={{left: '550px'}} onClick={handlePrevImage}>{'<'}</CarouselButton>
      <CarouselButton style={{right: '550px'}} onClick={handleNextImage}>{'>'}</CarouselButton>
      <div className='carousel-container-img'>
        <img className='carousel-img' src={currentImg.path}/>
        {/* <img style={sliderStyles} src={currentImg.path} onClick={}></img> */}
      </div>
    </div>
  )
}

export default Carousel;