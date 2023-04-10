import React from 'react';
const Carousel = ({images, currentImg, setCurrentImg}) => {
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
    <div style={sliderContainer}>
     <div style={leftArrowStyles} onClick={handlePrevImage}>{'<'}</div>
       <div style={rightArrowStyles} onClick={handleNextImage}>{'>'}</div>
         <div>
           <img style={sliderStyles} src={currentImg.path}/>
          {/* <img style={sliderStyles} src={currentImg.path} onClick={}></img> */}
         </div>
       </div>
  )
}

export default Carousel;