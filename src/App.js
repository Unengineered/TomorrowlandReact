import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero/Hero';
import InfoSection from './components/InfoSection/InfoSection';
import Slider from './components/InfoSection/Slider';
import { SliderData } from './Data/SliderData';
// import { InfoDataOne, InfoDataTwo } from './Data/InfoData';
import { InfoData } from './Data/InfoData';
// import NavBar from './components/Navbar/NavBar.js';
function App() {
  return (
    <Router>
      <Hero />
      <InfoSection infoData={InfoData}/>
      {/* <InfoSection infoData={InfoDataTwo}/> */}
      {/* <Slider slides={SliderData} /> */}
    </Router>
  );
}

export default App;
