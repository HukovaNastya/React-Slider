import React, {useState} from 'react';
import Carousel from './components/Carousel';
import images from './services/images';
import './components/Carousel.css';
import './App.css'
import CarouselPopUp from "./components/CarouselPopUp";

function App() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='main-container'>
      <Carousel
          images={images}
          onSlideChange={(index) => setCurrentImgIndex(index)}
          onSlideClick={() => setShowModal(true)}
      />
      <CarouselPopUp setShowModal={setShowModal} showModal={showModal} currentImg={images[currentImgIndex]}/>
    </div>
  );
}

export default App;
