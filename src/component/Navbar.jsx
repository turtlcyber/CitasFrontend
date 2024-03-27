import React, { useEffect } from 'react';
import '../component/Nav.css';
import Logo from '../images/logo.png';
import Image from 'react-bootstrap/Image';

import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    // Remove 'active' class from all links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Find the link that matches the current route and add 'active' class to it
    navLinks.forEach(link => {
      if (link.getAttribute('href') === location.pathname) {
        link.classList.add('active');
      }
    });
  }, [location.pathname]);
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='row navmobile'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid navbar2">
              <a href="/"><Image src={Logo} width={80} height={60} className='logocls' /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/About">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Features">Features</a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="/showdata">Showdata</a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="/Contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar