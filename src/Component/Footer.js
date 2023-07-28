import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Footer = () => {
  const handleTopBtnClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-2">
              <div className="footer-about">
                <h2>About Us</h2>
                <p>
                  Shoolin Consultancy takes into account all business sections be it a start-up, SMEs or Corporate, through its exceptionally experienced group of expert partners.
                </p>
                <div className="footer-social">
                  <Link onClick={handleTopBtnClick} to="">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link onClick={handleTopBtnClick} to="https://www.facebook.com/shoolinconsultancy5?mibextid=ZbWKwL" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link onClick={handleTopBtnClick} to="">
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link onClick={handleTopBtnClick} to="https://instagram.com/shoolinconsultancyofficial?igshid=MzRlODBiNWFlZA==" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link onClick={handleTopBtnClick} to="">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-10">
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="footer-link">
                    <h2>Services Areas</h2>
                    <Link onClick={handleTopBtnClick} to="/Divore">
                      Divorce Matter</Link>

                    <Link onClick={handleTopBtnClick} to="/Criminalcases">
                      Criminal Cases</Link>
                    <Link onClick={handleTopBtnClick} to="/NDPS">
                      NDPS</Link>
                    <Link onClick={handleTopBtnClick} to="/Cybercrime">
                      Cyber Crime
                    </Link>
                    <Link onClick={handleTopBtnClick} to="/Property">
                      Property Verification </Link>
                    <Link onClick={handleTopBtnClick} to="/Chequebounce">
                      Cheque Bounce</Link>

                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="footer-link">
                    <h2>Useful Pages</h2>
                    <Link onClick={handleTopBtnClick} to="/about">About Us</Link>
                    <Link onClick={handleTopBtnClick} to="/OurServices" >Our Services</Link>
                    <a href="">Attorneys</a>
                    <a href="">Case Studies</a>
                    <a href="">FAQs</a>
                  </div>
                </div>
                 

                <div className="col-md-6 col-lg-3">
                  <div className="footer-contact">
                    <h2>Get In Touch</h2>
                    <Link to="https://goo.gl/maps/ETP4oeC1XubL9Rwt8" target='blank'>
                      <div className="contact-text">
                        {/* <h2>Location</h2> */}
                        <p><i className="fa fa-map-marker-alt"></i>27, 1st Floor, 1st Cross, Sampige Rd, Malleswaram, Bengaluru, Karnataka 560003</p>
                      </div></Link>
                     <div></div>
                     

                    <Link to="https://goo.gl/maps/jzNfGVYDXBHxKWwF8" target='blank'>
                      <div className="contact-text">
                        {/* <h2>Location</h2> */}
                        <p><i className="fa fa-map-marker-alt"></i>Number FF5B, Sai Vihar Apartments, Old, Manipal Hospital Road, Bengaluru, Karnataka 560098</p>
                      </div></Link>

                  </div>
                </div>





                <div className="col-md-6 col-lg-3">
                  <div className="footer-contact">
                    <h2>Get In Touch</h2>
                    <Link onClick={handleTopBtnClick} to="https://goo.gl/maps/xnTmgmy4Hsgj9jyC8" target="_blank">
                      <p className='colors'>
                        <i className="fa fa-map-marker-alt"></i>248, 11 Main, 12th cross Malleshwaram, Bangalore 56003, Bengaluru, Karnataka 560003
                      </p>
                    </Link>

                    <p className='colors'>
                      <Link onClick={handleTopBtnClick} to="tel:7090721111">
                        <p><i className="fa fa-phone-alt"></i> 7090721111</p>
                      </Link>
                    </p>
                    <p className='colors'>
                      <Link onClick={handleTopBtnClick} to="mailto: info@shoolinconsultancy.in">
                        <i className="fa fa-envelope"></i>info@shoolinconsultancy.in</Link>
                    </p>

                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container footer-menu">
            <div className="f-menu">
              <a href="">Terms of use</a>
              <a href="">Privacy policy</a>
              <a href="">Cookies</a>
              <a href="">Help</a>
              <a href="">FQAs</a>
            </div>
          </div> */}

      </div>
    </div>
  )
}

export default Footer
