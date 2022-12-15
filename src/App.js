import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Offer from './Components/Offer';
import Chakra from './Components/Chakra';
import Healing from './Components/Healing';
import Video from './Components/Video';
import Chakratotal from './Components/Chakratotal';
import Fengshui from './Components/Fengshui';
import Services from './Components/Services';
import Corporate from './Components/Corporate';
import ScrollToTop from "./Components/ScrollToTop";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
    <ScrollToTop />
   <Routes>
     <Route exact path="/" element={<Home />} />
     <Route exact path="/about" element={<About />} />
     <Route exact path="/offer" element={<Offer />} />
     <Route  exact path="/services" element={<Services/>} />
     <Route  exact path="/corporate" element={<Corporate />} />
     <Route exact path="/contact" element={<Contact/>} />
     <Route  exact path="/chakra" element={<Chakra />} />
     <Route  exact path="/healing" element={<Healing />} />
     <Route  exact path="/video" element={<Video />} />
     <Route  exact path="/chakratotal" element={<Chakratotal/>} />
     <Route  exact path="/feng" element={<Fengshui/>} />
     <Route exact path="/modal" element={<Contact />} />
   </Routes>

   </BrowserRouter>
    </div>
  );
}

export default App;
