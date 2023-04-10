import React, {useState} from 'react';
import Carousel from './components/Carousel';
import images from './services/images';

const containerStyles = {
  width: "500px",
  height: "280px",
  margin: "0 auto",
};

function App() {
  const [currentImg, setCurrentImg] = useState(images[0]);
  return (
    <div>
      <div style={containerStyles}>
        <Carousel images={images} currentImg={currentImg} setCurrentImg={setCurrentImg}/>
      </div>
    </div>
 
  );
}

export default App;
