import React, { useState } from 'react';
import Modal from 'react-modal';
import "../Style/ContactFrom.css";

const ContactForm = () => {
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
    setIsOpen(false); // Close the modal after form submission
  };

  return (
    <div >
      <button onClick={openModal}>Open Contact Form</button>
      <Modal isOpen={isOpen} onRequestClose={closeModal} className='Contactfrom'>
        
        <form onSubmit={handleSubmit} className='ContactFrom'>
       
            <div className="contact">
                <div className="container">
                    <div className="section-header">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-info">
                                <div className="contact-item">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <div className="contact-text">
                                        <h2>Location</h2>
                                        <p>248, 11 Main, 12th cross Malleshwaram, Bangalore 56003, Bengaluru, Karnataka 560003</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <div className="contact-text">
                                        <h2>Location</h2>
                                        <p>248, 11 Main, 12th cross Malleshwaram, Bangalore 56003, Bengaluru, Karnataka 560003</p>
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
    </div>
  );
};

export default ContactForm;
