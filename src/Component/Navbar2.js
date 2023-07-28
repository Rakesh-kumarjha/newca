import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Img from "../img/Log.webp";
import Modal from 'react-modal';
import React, { useState } from 'react';

function BasicExample() {
    const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
    setIsOpen(false); }
    
  return (
    <Navbar  >
      {/* className="bg-body-tertiary" */}
      <Container>
        <Navbar.Brand href=""> <div className="logo">
                <h1>
                  <img src={Img} alt="Logo" />
                </h1>
              </div></Navbar.Brand>
      
        <Navbar.Collapse className="justify-content-end">
         
        </Navbar.Collapse>
       
        <Navbar.Collapse className="justify-content-center">
        <Nav className="me-auto">
        <a href="/" className="nav-item nav-link ">
                 Home
                </a>
                <a href="/about" className="nav-item nav-link">
                  About Us
                </a>
                <NavDropdown title="Our Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/OurServices">
                    Our Services
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Company">
                    Company Registration
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Food">Food</NavDropdown.Item>
                  <NavDropdown.Item href="/Shop">Shop</NavDropdown.Item>
                  <NavDropdown.Item href="/GST">G S T</NavDropdown.Item>
                  <NavDropdown.Item href="/AllServices">
                    All Services
                  </NavDropdown.Item>
                </NavDropdown>

                <a href="/Testimonials" className="nav-item nav-link">
                  Testimonials
                </a>
                <a href="/Contacte" className="nav-item nav-link">
                  Contact Us
                </a>     
          </Nav>
          <a className="btn" href="#">
                <button onClick={openModal} className='btns'> Get Appointment</button>
                <Modal isOpen={isOpen} onRequestClose={closeModal} className='Contactfrom'>
        
        <form onSubmit={handleSubmit} className='ContactFrom'>
       
            <div className="contact">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-info">
                                <div className="contact-item">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <div className="contact-text">
                                        <h2>Location</h2>
                                        <p>WG26+9HG, Channasandra, Srinivaspura, Bengaluru, Karnataka 560098</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <i className="fa fa-phone-alt"></i>
                                    <div className="contact-text">
                                        <h2>Phone</h2>
                                        <a href="tel:+05890000111">
                                        <p> 7892929155</p>
                      </a>
                                        
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <i className="fa fa-envelope"></i>
                                    <div className="contact-text">
                                        <h2>Email</h2>
                                        <p>info@registrationguru.org</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-form">
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Name" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Your Email" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Subject" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Message" required="required" ></textarea>
                                    </div>
                                    <div>
                                    <button className="btn" type="submit">Submit</button>
                                       
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </form>
      </Modal>
                </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;