import React, { useEffect, useState } from 'react';
import { CarouselButton } from './CarouselButton';
import './Carousel.css';

const Carousel = ({images, initialSlide = '0', onSlideChange, onSlideClick}) => {
  const [slideIndex, setSlideIndex] = useState(Number(initialSlide))

  const handlePrevImage = () => {
    const newIndex = slideIndex === 0 ? images.length - 1 : slideIndex - 1
    setSlideIndex(newIndex)
    // onSlideChange(newIndex)
  }

  const handleNextImage = () => {
      const newIndex = slideIndex === images.length - 1 ? 0 : slideIndex + 1
      setSlideIndex(newIndex)
      // onSlideChange(newIndex)
  }

  useEffect(() => {
      onSlideChange(slideIndex)
  }, [slideIndex])

  return (
    <div className='carousel-wrapper'>
      <div>
        <CarouselButton style={{left: '550px'}} onClick={handlePrevImage}>{'<'}</CarouselButton>
      </div>
      <div>
        <img className='carousel-img' src={images[slideIndex].path} onClick={onSlideClick}/>
      </div>
      <div>
        <CarouselButton style={{right: '550px'}} onClick={handleNextImage}>{'>'}</CarouselButton>
      </div>
    </div>
  )
}

export default Carousel;