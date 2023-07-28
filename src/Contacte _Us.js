import React, { useRef } from 'react'
import "./App.css";
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Contacte_Us = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <div className="contact">
                <div className="container">
                    <div className="section-header">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-info">
                                <div className="contact-item">

                                    <i className="fa fa-map-marker-alt"></i> <Link to="https://goo.gl/maps/JoyJDkqoTW2yp1CH8" target='blank'>
                                        <div className="contact-text">
                                            {/* <h2>Location</h2> */}
                                            <p>

                                                248, 11 Main, 12th cross Malleshwaram, Bangalore 56003, Bengaluru, Karnataka 560003</p>
                                        </div></Link>
                                </div>
                                <div className="contact-item">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <Link to="https://goo.gl/maps/jzNfGVYDXBHxKWwF8" target='blank'>
                                        <div className="contact-text">
                                            {/* <h2>Location</h2> */}
                                            <p>

                                                Number FF5B, Sai Vihar Apartments, Old, Manipal Hospital Road, Bengaluru, Karnataka 560098</p>
                                        </div></Link>
                                </div>
                                <div className="contact-item">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <Link to="https://goo.gl/maps/ETP4oeC1XubL9Rwt8" target='blank'>
                                        <div className="contact-text">
                                            {/* <h2>Location</h2> */}
                                            <p>


                                                27, 1st Floor, 1st Cross, Sampige Rd, Malleswaram, Bengaluru, Karnataka 560003</p>
                                        </div></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-form">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Name" required="required" name="user_name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Your Email" required="required" name="user_email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Subject" required="required" name="subject" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Message" required="required" name="message"></textarea>
                                    </div>
                                    <div>
                                        <button className="btn" type="submit" value="Send">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1048503187!2d77.5114165!3d12.900979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f2141b4df2d%3A0x2daf266d1af781a6!2sShoolin%20Consultancy-%20Divorce%20and%20Cyber%20Crime%20Advocates%2F%20Lawyers%20in%20Bangalore!5e0!3m2!1sen!2sin!4v1690432904812!5m2!1sen!2sin" width="600" height="450" border="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Contacte_Us
