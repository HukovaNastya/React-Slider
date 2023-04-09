import React, {useState} from 'react';
const Carosel = ({images}) => {
   const [currentIndex, setCurrentIndex] = useState(0);

   const sliderContainer = {
    position: 'relative',
    height: '100%',
    top: '400px'
   }
   const sliderStyles = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
   }

   const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '20px',
    fontSize: '60px',
    color: 'white',
    zIndex: 1,
    cursor: 'pointer',
   }

   const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '20px',
    fontSize: '60px',
    color: 'white',
    zIndex: 1,
    cursor: 'pointer',
   }

   const handlePrevImage = () => {
    const isFirstSlide = currentIndex === 0;
    if(!isFirstSlide) {
      setCurrentIndex(currentIndex - 1)
    }
    else {
       setCurrentIndex(images.length - 1);
    }
   }

   const handleNextImage = () => {
    const isLastSlide = currentIndex === images.length-1;
    if(!isLastSlide) {
      return setCurrentIndex(currentIndex + 1)
    }
    else {
       return setCurrentIndex(0);
    }
   }
  return (
    <div style={sliderContainer}>
     <div style={leftArrowStyles} onClick={handlePrevImage}>{'<'}</div>
       <div style={rightArrowStyles} onClick={handleNextImage}>{'>'}</div>
         <div >
          <img style={sliderStyles} src={images[currentIndex].path}></img>
         </div>
       </div>
  )
}

export default Carosel;