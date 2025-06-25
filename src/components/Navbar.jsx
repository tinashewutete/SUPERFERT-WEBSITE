// import "./Navbar.css";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <header className="navbar">
//       <nav>
//         <ul className="nav-links">
//           <li><NavLink to="/">Home</NavLink></li>
//           <li><NavLink to="/about-us">About Us</NavLink></li>
//           <li><a href="#">Crops & Fertilizer</a></li>
//           <li><a href="#">Services</a></li>
//           <li><NavLink to="/news-events">News & Events</NavLink></li>
//           <li><a href="#">Contact Us</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }




// import React, { useState } from "react";
// import "./Navbar.css";
// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeSidebar = () => {
//     setIsOpen(false);
//   };

//   return (
//     <header className="navbar">
//       {/* Hamburger Icon */}
//       <div className="hamburger" onClick={toggleSidebar}>
//         &#9776;
//       </div>

//       {/* Desktop Navigation */}
//       <nav className="nav-desktop">
//         <ul className="nav-links">
//           <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
//           <li><NavLink to="/about-us" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink></li>
//           <li><a href="#">Crops & Fertilizer</a></li>
//           <li><a href="#">Services</a></li>
//           <li><NavLink to="/news-events" className={({ isActive }) => isActive ? "active" : ""}>News & Events</NavLink></li>
//           <li><a href="#">Contact Us</a></li>
//         </ul>
//       </nav>

//       {/* Sidebar Navigation (Mobile) */}
//       <div className={`sidebar ${isOpen ? "open" : ""}`}>
//         <ul className="nav-links-mobile">
//           <li><NavLink to="/" onClick={closeSidebar}>Home</NavLink></li>
//           <li><NavLink to="/about-us" onClick={closeSidebar}>About Us</NavLink></li>
//           <li><a href="#" onClick={closeSidebar}>Crops & Fertilizer</a></li>
//           <li><a href="#" onClick={closeSidebar}>Services</a></li>
//           <li><NavLink to="/news-events" onClick={closeSidebar}>News & Events</NavLink></li>
//           <li><a href="#" onClick={closeSidebar}>Contact Us</a></li>
//         </ul>
//       </div>
//     </header>
//   );
// }

import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      {/* Hamburger Icon */}

      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        {!isOpen ? "☰" : ""}
      </div>


      {/* Desktop Navigation */}
      <nav className="nav-desktop">
        <ul className="nav-links">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/about-us" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink></li>
          <li><a href="#">Crops & Fertilizer</a></li>
          <li><a href="#">Services</a></li>
          <li><NavLink to="/news-events" className={({ isActive }) => isActive ? "active" : ""}>News & Events</NavLink></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>

      {/* Sidebar Navigation (Mobile) */}
      {isOpen && (
        <div className="sidebar open">
          <ul className="nav-links-mobile">
            <li><NavLink to="/" onClick={closeSidebar} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/about-us" onClick={closeSidebar} className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink></li>
            <li><a href="#" onClick={closeSidebar}>Crops & Fertilizer</a></li>
            <li><a href="#" onClick={closeSidebar}>Services</a></li>
            <li><NavLink to="/news-events" onClick={closeSidebar} className={({ isActive }) => isActive ? "active" : ""}>News & Events</NavLink></li>
            <li><a href="#" onClick={closeSidebar}>Contact Us</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

