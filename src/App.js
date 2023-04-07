import Carosel from './components/Carosel';
import {images} from './services/images';

function App() {
  return (
    <div className="App">
      <Carosel images={images}/>
    </div>
  );
}

export default App;
