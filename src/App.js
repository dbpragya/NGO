import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import WhatWeDo from './pages/WhatWeDo';
import Gallery from './pages/Gallery';
import Campaign from './pages/Campaign';
import Connect from './pages/Connect';
import Donate from './pages/Donate';
import Story from './pages/Story';
import Testimonial from './pages/Testimonial';
import $ from 'jquery';
window.$ = window.jQuery = $;

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/whatwedo' element={ <WhatWeDo/>} />
        <Route path='/gallery' element={ <Gallery/>} />
        <Route path='/campaign' element={ <Campaign/>} />
        <Route path='/connect' element={ <Connect/>} />
        <Route path='/donate' element={ <Donate/>} />
        <Route path='/stories' element={ <Story/>} />
        <Route path='/testimonial' element={<Testimonial/>} />
      </Routes>
    </Router>
  );
}

export default App;
