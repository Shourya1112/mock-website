import Nav from './components/Nav';
import Carousel from './components/Carousel';
import Body from './components/Body';
import './styles/app.css';
import background from './assets/AiCanSell-background.png';

function App() {
  return (
    <div className="App">
      <img src={background} alt='background' className='background' /> 
      <Nav />
      <Carousel />
      <Body />
    </div>
  );
}

export default App;
