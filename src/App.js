import Carosel from './components/Carosel';
import images from './services/images';

const containerStyles = {
  width: "500px",
  height: "280px",
  margin: "0 auto",
};

function App() {
  return (
    <div>
      <div style={containerStyles}>
        <Carosel images={images}/>
      </div>
    </div>
 
  );
}

export default App;
