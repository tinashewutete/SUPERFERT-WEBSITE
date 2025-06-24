// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar';
// import About from './components/AboutUs';
// import NewsEvents from './components/NewsAndEvents';
// import Home from './components/Home';
// import Footer from './components/Footer';
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';


// const App = () => {
//   return (
     
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about-us" element={<About />} />
//         <Route path="/news-events" element={<NewsEvents />} />
//       </Routes>
//       <Footer/>
//     </Router>
//   );
// };

// export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/AboutUs';
import NewsEvents from './components/NewsAndEvents';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* inline version */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/news-events" element={<NewsEvents />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

