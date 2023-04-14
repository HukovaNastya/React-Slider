import React, {useState} from 'react';
import Carousel from './components/Carousel';
import images from './services/images';
import './components/Carousel.css';
import './App.css'

function App() {
  const [currentImg, setCurrentImg] = useState(images[0]);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='main-container'>
      <Carousel images={images} currentImg={currentImg} setCurrentImg={setCurrentImg} setShowModal={setShowModal} showModal={showModal}/>
    </div>
  );
}

export default App;
