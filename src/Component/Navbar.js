import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import "../Style/ContactFrom.css";
import Img from "../img/Logo.webp";
import "../App.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';
import { PopupWidget } from "react-calendly";
import { InlineWidget } from "react-calendly";
import Button from 'react-bootstrap/Button';
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can use an API or send the form data to a server
    // Reset form fields after submission if needed
    setName('');
    setEmail('');
    setMessage('');
    setIsOpen(false); // Close the modal after form submission
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleTopBtnClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <div className='color'>
      <nav >
        <div className={`nav-bar ${isSticky ? 'sticky' : ''}`}>
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a href="#" className="navbar-brand">
                <div className="logo">
                  <h1>
                    <Link to="/">
                      <img src={Img} alt="Logo" />
                    </Link>
                  </h1>
                </div>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto">
                  <div className="logos">
                    <h1>
                      <Link to="/">
                        <img src={Img} alt="Logo" />
                      </Link>
                    </h1>
                  </div>
                </div>
                <div className='Nav_center'>
                  <Link to="/" onClick={handleTopBtnClick}
               
                      className="nav-item nav-link active"
                      data-toggle="collapse"
                      data-target="#navbarCollapse"
                    >
                      Home
                
                  </Link>
                  <Link to="/about"
                      className="nav-item nav-link"
                      data-toggle="collapse"
                      data-target="#navbarCollapse"
                      onClick={handleTopBtnClick}
                    >
                      About Us
                   
                  </Link>
                  <NavDropdown title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <Link
                        to="/OurServices"
                        className='colo'
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        onClick={handleTopBtnClick}
                      >
                        Our Services
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        to="/Divore"
                        className='colo'
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        onClick={handleTopBtnClick}
                      >
                        Divorce Matter
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        to="/Criminalcases"
                        className='colo'
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        onClick={handleTopBtnClick}
                      >
                        Criminal Cases
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        to="/NDPS"
                        className='colo'
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        onClick={handleTopBtnClick}
                      >
                        NDPS
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        to="/Cybercrime"
                        className='colo'
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        onClick={handleTopBtnClick}
                      >
                        Cyber Crime
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        to="/Property"
                        className='colo'
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        onClick={handleTopBtnClick}
                      >
                        Property Verification
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Link to="/blog" onClick={handleTopBtnClick}
                      href=""
                      className="nav-item nav-link"
                      data-toggle="collapse"
                      data-target="#navbarCollapse"
                    >
                      Blog
                   
                  </Link>
                  <Link to="/Testimonials" onClick={handleTopBtnClick}
                      href=""
                      className="nav-item nav-link"
                      data-toggle="collapse"
                      data-target="#navbarCollapse"
                    >
                      Testimonials
                  </Link>
                  <Link to="/Contacte" onClick={handleTopBtnClick}
                      href=""
                      className="nav-item nav-link"
                      data-toggle="collapse"
                      data-target="#navbarCollapse"
                    >
                      Contact Us
                  
                  </Link>
                </div>
                <div className="ml-auto">
                  <button onClick={openModal} className='button'>
                    <span>Get Appointment</span>
                  </button>
                  <Modal isOpen={isOpen} onRequestClose={closeModal} className='Contactfrom'>
                    <form onSubmit={handleSubmit} className='ContactFrom'>
                      <div>
                        <div className='get-appointment align-items-center' >
                          <h2 className='center'>Schedule a meeting</h2>
                          <button onClick={handleClose} className='close-btn'><GrClose /></button>
                        </div>
                        <div className='calendly'>
                          <InlineWidget url="https://calendly.com/velveldce" />
                        </div>
                      </div>
                    </form>
                  </Modal>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;