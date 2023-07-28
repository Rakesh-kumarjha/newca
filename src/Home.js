import React from "react";
import "./App.css";
import Img from "./img/carousel-1.jpg";
import Img1 from "./img/carousel-2.jpg";
import Img2 from "./img/carousel-3.jpg";
import Img3 from "./img/about.jpg";
import Img4 from "./img/feature.jpg";
import Img5 from "./img/team-1.jpg";
import Img6 from "./img/team-2.jpg";
import Img7 from "./img/team-3.jpg";
import {Link} from "react-router-dom"




import AOS from 'aos';
import 'aos/dist/aos.css';
import Blog from "./Component/Blog";

const Home = () => {
  AOS.init();
  return (

    <div>
      {/* <CalendlyComponent/> */}
      <div className="wrapper">
        <div id="carousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carousel" data-slide-to="0" class="active"></li>
            <li data-target="#carousel" data-slide-to="1"></li>
            <li data-target="#carousel" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Img} alt="Carousel Image" />
            </div>

            <div class="carousel-item">
              <img src={Img1} alt="Carousel Image" />
            </div>

            <div class="carousel-item">
              <img src={Img2} alt="Carousel Image" />
            </div>
          </div>

          <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        {/* <!-- Carousel End -->
            
            
            <!-- Top Feature Start--> */}
        <div className="feature-top">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-3 col-sm-6">
                <div className="feature-item">
                  <i className="far fa-check-circle"></i>
                  <h3>Legal</h3>
                  <p className="center" >Govt Approved</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="feature-item">
                  <i className="fa fa-user-tie"></i>
                  <h3>Attorneys</h3>
                  <p className="center">Expert Attorneys</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="feature-item">
                  <i className="far fa-thumbs-up"></i>
                  <h3>Success</h3>
                  <p className="center">99.99% Case Won</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="feature-item">
                  <i className="far fa-handshake"></i>
                  <h3>Support</h3>
                  <p className="center">Quick Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Top Feature End-->
            
            
            <!-- About Start --> */}
        <div className="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <div className="about-img" data-aos="fade-right" data-aos-duration="1000">
                  <img src={Img3} alt="Image" />
                </div>
              </div>
              <div className="col-lg-7 col-md-6" >
                <div className="section-header" data-aos="fade-left" data-aos-duration="1000">
                  <h2>Learn About Us</h2>
                </div>
                <div className="about-text" data-aos="fade-up" data-aos-duration="1000">
                  <p>
                  We are an Advocate law firm located at Malleshwaram, Bengaluru. We are a team of experienced lawyers practicing before the High Court, City Court, Magistrate Court, and Family Court. We are specialized in the field of Criminal Law, Cheque bounce cases, Matrimonial / Divorce cases, etc. We are known for giving reliable and quick solutions to our clients in accordance with the Law. We, at Shoolin, hold the record of giving the best possible results to our clients and are known for being responsive and reliable. Our main goal is to serve our clients and secure their interests.
                  </p>
                  <p></p>
                  <Link  className="btn" to="/about" data-aos="zoom-out-down" data-aos-delay="30" data-aos-duration="1000">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About End -->

 
            <!-- Service Start --> */}
        <div className="service">
          <div className="container">
            <div className="section-header" data-aos="fade-right" data-aos-duration="1000">
              <h2>Our Practices Areas</h2>
              <hr></hr>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration="1000">
                <div className="service-item">
                  <div className="service-icon">
                    <i className="fa fa-landmark"></i>
                  </div>
                  <h3>Civil Law</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                    Curabitur facilisis ornare velit non
                  </p>
                  <Link className="btn" to="">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                <div className="service-item">
                  <div className="service-icon">
                    <i className="fa fa-users"></i>
                  </div>
                  <h3>Family Law</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                    Curabitur facilisis ornare velit non
                  </p>
                  <Link className="btn" to="">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-left" data-aos-duration="1000">
                <div className="service-item">
                  <div className="service-icon">
                    <i className="fa fa-hand-holding-usd"></i>
                  </div>
                  <h3>Business Law</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                    Curabitur facilisis ornare velit non
                  </p>
                  <Link className="btn" to="">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration="1000">
                <div className="service-item">
                  <div className="service-icon">
                    <i className="fa fa-graduation-cap"></i>
                  </div>
                  <h3>Education Law</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                    Curabitur facilisis ornare velit non
                  </p>
                  <Link className="btn" to="">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                <div className="service-item">
                  <div className="service-icon">
                    <i className="fa fa-gavel"></i>
                  </div>
                  <h3>Criminal Law</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                    Curabitur facilisis ornare velit non
                  </p>
                  <Link className="btn" to="">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-left" data-aos-duration="1000">
                <div className="service-item">
                  <div className="service-icon">
                    <i className="fa fa-globe"></i>
                  </div>
                  <h3>Cyber Law</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                    Curabitur facilisis ornare velit non
                  </p>
                  <Link className="btn" to="">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Service End -->
            
            
            <!-- Feature Start --> */}
        <div className="feature">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="section-header" data-aos="flip-up" data-aos-duration="1000">
                  <h2>Why Choose Us</h2>
                </div>
                <div className="row align-items-center feature-item" data-aos="fade-right" data-aos-duration="1000">
                  <div className="col-5" >
                    <div className="feature-icon">
                      <i className="fa fa-gavel"></i>
                    </div>
                  </div>
                  <div className="col-7">
                    <h3>Best law practices</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                      Curabitur facilisis ornare velit non vulputate.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center feature-item" data-aos="fade-right" data-aos-duration="1000" >
                  <div className="col-5">
                    <div className="feature-icon">
                      <i className="fa fa-balance-scale"></i>
                    </div>
                  </div>
                  <div className="col-7">
                    <h3>Efficiency & Trust</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                      Curabitur facilisis ornare velit non vulputate.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center feature-item" data-aos="fade-right" data-aos-duration="1000">
                  <div className="col-5">
                    <div className="feature-icon">
                      <i className="far fa-smile"></i>
                    </div>
                  </div>
                  <div className="col-7">
                    <h3>Results you deserve</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                      Curabitur facilisis ornare velit non vulputate.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="feature-img" data-aos="fade-left" data-aos-duration="1000">
                  <img src={Img4} alt="Feature" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Feature End -->
            
            
            <!-- Team Start --> */}
        <div className="team">
          <div className="container">
            <div className="section-header" data-aos="zoom-in" data-aos-duration="1000">
              <h2>Meet Our Expert Attorneys</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6" data-aos="fade-right" data-aos-duration="1000">
                <div className="team-item">
                  <div className="team-img">
                    <img src={Img5} alt="Team Image" />
                  </div>
                  <div className="team-text">
                    <h2>Adam Phillips</h2>
                    <p>Business Consultant</p>
                    <div className="team-social">
                      <Link className="social-tw" to="">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link className="social-fb" to="">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link className="social-li" to="">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link className="social-in" to="">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                <div className="team-item">
                  <div className="team-img">
                    <img src={Img6} alt="Team Image" />
                  </div>
                  <div className="team-text">
                    <h2>Dylan Adams</h2>
                    <p>Criminal Consultant</p>
                    <div className="team-social">
                    <Link className="social-tw" to="">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link className="social-fb" to="">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link className="social-li" to="">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link className="social-in" to="">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                <div className="team-item">
                  <div className="team-img">
                    <img src={Img7} alt="Team Image" />
                  </div>
                  <div className="team-text">
                    <h2>Gloria Edwards</h2>
                    <p>Divorce Consultant</p>
                    <div className="team-social">
                    <Link className="social-tw" to="">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link className="social-fb" to="">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link className="social-li" to="">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link className="social-in" to="">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6" data-aos="fade-left" data-aos-duration="1000">
                <div className="team-item">
                  <div className="team-img">
                    <img src={Img6} alt="Team Image" />
                  </div>
                  <div className="team-text">
                    <h2>Josh Dunn</h2>
                    <p>Immigration Consultant</p>
                    <div className="team-social">
                    <Link className="social-tw" to="">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link className="social-fb" to="">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link className="social-li" to="">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link className="social-in" to="">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Team End -->


            <!-- FAQs Start --> */}
        {/* <div className="faqs">
          <div className="container">
            <div className="row">
              <div className="col-md-5" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
                <div className="faqs-img">
                  <img src={Img8} alt="Image" />
                </div>
              </div>
              <div className="col-md-7" >
                <div className="section-header" data-aos="zoom-out-up" data-aos-duration="1000">
                  <h2>Have A Questions?</h2>
                </div>
                <div id="accordion">
                  <div className="card" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000">
                    <div className="card-header">
                      <a
                        className="card-link collapsed"
                        data-toggle="collapse"
                        href="#collapseOne"
                        aria-expanded="true"
                      >
                        <span>1</span>
                        Registration Guru?
                      </a>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        a distinguished group of registration experts with a
                        collective experience of over 30 years. As a trusted
                        partner, we bring together our vast expertise and
                        industry knowledge to provide seamless registration
                        services.
                      </div>
                    </div>
                  </div>
                  <div className="card" data-aos="fade-left" data-aos-duration="1000">
                    <div className="card-header">
                      <a
                        className="card-link"
                        data-toggle="collapse"
                        href="#collapseTwo"
                      >
                        <span>2</span> Registration Guru?
                      </a>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        a distinguished group of registration experts with a
                        collective experience of over 30 years. As a trusted
                        partner, we bring together our vast expertise and
                        industry knowledge to provide seamless registration
                        services.
                      </div>
                    </div>
                  </div>
                  <div className="card" data-aos="fade-left" data-aos-duration="1000">
                    <div className="card-header">
                      <a
                        className="card-link"
                        data-toggle="collapse"
                        href="#collapseThree"
                      >
                        <span>3</span> Registration Guru?
                      </a>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        a distinguished group of registration experts with a
                        collective experience of over 30 years. As a trusted
                        partner, we bring together our vast expertise and
                        industry knowledge to provide seamless registration
                        services.
                      </div>
                    </div>
                  </div>
                  <div className="card" data-aos="fade-left" data-aos-duration="1000">
                    <div className="card-header">
                      <a
                        className="card-link"
                        data-toggle="collapse"
                        href="#collapseFour"
                      >
                        <span>4</span> Registration Guru?
                      </a>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        a distinguished group of registration experts with a
                        collective experience of over 30 years. As a trusted
                        partner, we bring together our vast expertise and
                        industry knowledge to provide seamless registration
                        services.
                      </div>
                    </div>
                  </div>
                  <div className="card" data-aos="fade-left" data-aos-duration="1000">
                    <div className="card-header">
                      <a
                        className="card-link"
                        data-toggle="collapse"
                        href="#collapseFive"
                      >
                        <span>5</span> Registration Guru?
                      </a>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        a distinguished group of registration experts with a
                        collective experience of over 30 years. As a trusted
                        partner, we bring together our vast expertise and
                        industry knowledge to provide seamless registration
                        services.
                      </div>
                    </div>
                  </div>
                </div>
                <a className="btn" href="" data-aos="zoom-out-down" data-aos-delay="20" data-aos-duration="1000">
                  Ask more
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- FAQs End -->


            <!-- Testimonial Start --> */}
        {/* <div className="testimonial">
          <div className="container">
            <div className="section-header">
              <h2>Review From Client</h2>
            </div>
            <div className="owl-carousel testimonials-carousel">
              <div className="testimonial-item">
                <i className="fa fa-quote-right"></i>
                <div className="row align-items-center">
                  <div className="col-3">
                    <img src="img/testimonial-1.jpg" alt="" />
                  </div>
                  <div className="col-9">
                    <h2>Client Name</h2>
                    <p>Profession</p>
                  </div>
                  <div className="col-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam accumsan lacus eget velit
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <i className="fa fa-quote-right"></i>
                <div className="row align-items-center">
                  <div className="col-3">
                    <img src="img/testimonial-2.jpg" alt="" />
                  </div>
                  <div className="col-9">
                    <h2>Client Name</h2>
                    <p>Profession</p>
                  </div>
                  <div className="col-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam accumsan lacus eget velit
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <i className="fa fa-quote-right"></i>
                <div className="row align-items-center">
                  <div className="col-3">
                    <img src="img/testimonial-3.jpg" alt="" />
                  </div>
                  <div className="col-9">
                    <h2>Client Name</h2>
                    <p>Profession</p>
                  </div>
                  <div className="col-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam accumsan lacus eget velit
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <i className="fa fa-quote-right"></i>
                <div className="row align-items-center">
                  <div className="col-3">
                    <img src="img/testimonial-4.jpg" alt="" />
                  </div>
                  <div className="col-9">
                    <h2>Client Name</h2>
                    <p>Profession</p>
                  </div>
                  <div className="col-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam accumsan lacus eget velit
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <i className="fa fa-quote-right"></i>
                <div className="row align-items-center">
                  <div className="col-3">
                    <img src="img/testimonial-1.jpg" alt="" />
                  </div>
                  <div className="col-9">
                    <h2>Client Name</h2>
                    <p>Profession</p>
                  </div>
                  <div className="col-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam accumsan lacus eget velit
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <i className="fa fa-quote-right"></i>
                <div className="row align-items-center">
                  <div className="col-3">
                    <img src="img/testimonial-2.jpg" alt="" />
                  </div>
                  <div className="col-9">
                    <h2>Client Name</h2>
                    <p>Profession</p>
                  </div>
                  <div className="col-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam accumsan lacus eget velit
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <i className="fa fa-quote-right"></i>
                <div className="row align-items-center">
                  <div className="col-3">
                    <img src="img/testimonial-3.jpg" alt="" />
                  </div>
                  <div className="col-9">
                    <h2>Client Name</h2>
                    <p>Profession</p>
                  </div>
                  <div className="col-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam accumsan lacus eget velit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- Testimonial End -->


            <!-- Blog Start --> */}
        <div className="blog">
          <div className="container">
            <div className="section-header">
              <h2>Latest From Blog</h2>
            </div>
           
            {/* <div className="owl-carousel blog-carousel">
              <div className="blog-item">
                <img src={Img10} alt="Blog" />
                <h3>Lorem ipsum dolor</h3>
                <div className="meta">
                  <i className="fa fa-list-alt"></i>
                  <a href="">Civil Law</a>
                  <i className="fa fa-calendar-alt"></i>
                  <p>01-Jan-2045</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non vulputate. Aliquam metus
                  tortor
                </p>
                <a className="btn" href="">
                  Read More <i className="fa fa-angle-right"></i>
                </a>
              </div>
              <div className="blog-item">
                <img src="img/blog-2.jpg" alt="Blog" />
                <h3>Lorem ipsum dolor</h3>
                <div className="meta">
                  <i className="fa fa-list-alt"></i>
                  <a href="">Family Law</a>
                  <i className="fa fa-calendar-alt"></i>
                  <p>01-Jan-2045</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non vulputate. Aliquam metus
                  tortor
                </p>
                <a className="btn" href="">
                  Read More <i className="fa fa-angle-right"></i>
                </a>
              </div>
              <div className="blog-item">
                <img src="img/blog-3.jpg" alt="Blog" />
                <h3>Lorem ipsum dolor</h3>
                <div className="meta">
                  <i className="fa fa-list-alt"></i>
                  <a href="">Business Law</a>
                  <i className="fa fa-calendar-alt"></i>
                  <p>01-Jan-2045</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non vulputate. Aliquam metus
                  tortor
                </p>
                <a className="btn" href="">
                  Read More <i className="fa fa-angle-right"></i>
                </a>
              </div>
              <div className="blog-item">
                <img src="img/blog-1.jpg" alt="Blog" />
                <h3>Lorem ipsum dolor</h3>
                <div className="meta">
                  <i className="fa fa-list-alt"></i>
                  <a href="">Education Law</a>
                  <i className="fa fa-calendar-alt"></i>
                  <p>01-Jan-2045</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non vulputate. Aliquam metus
                  tortor
                </p>
                <a className="btn" href="">
                  Read More <i className="fa fa-angle-right"></i>
                </a>
              </div>
              <div className="blog-item">
                <img src="img/blog-2.jpg" alt="Blog" />
                <h3>Lorem ipsum dolor</h3>
                <div className="meta">
                  <i className="fa fa-list-alt"></i>
                  <a href="">Criminal Law</a>
                  <i className="fa fa-calendar-alt"></i>
                  <p>01-Jan-2045</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non vulputate. Aliquam metus
                  tortor
                </p>
                <a className="btn" href="">
                  Read More <i className="fa fa-angle-right"></i>
                </a>
              </div>
              <div className="blog-item">
                <img src="img/blog-3.jpg" alt="Blog" />
                <h3>Lorem ipsum dolor</h3>
                <div className="meta">
                  <i className="fa fa-list-alt"></i>
                  <a href="">Cyber Law</a>
                  <i className="fa fa-calendar-alt"></i>
                  <p>01-Jan-2045</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non vulputate. Aliquam metus
                  tortor
                </p>
                <a className="btn" href="">
                  Read More <i className="fa fa-angle-right"></i>
                </a>
              </div>
              <div className="blog-item">
                <img src="img/blog-1.jpg" alt="Blog" />
                <h3>Lorem ipsum dolor</h3>
                <div className="meta">
                  <i className="fa fa-list-alt"></i>
                  <a href="">Business Law</a>
                  <i className="fa fa-calendar-alt"></i>
                  <p>01-Jan-2045</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non vulputate. Aliquam metus
                  tortor
                </p>
                <a className="btn" href="">
                  Read More <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div> */}
          </div>
        </div>
         <Blog/>
        {/* <!-- Blog End -->
            
            
            <!-- Newsletter Start --> */}
        {/* <div className="newsletter">
          <div className="container">
            <div className="section-header">
              <h2>Subscribe Our Newsletter</h2>
            </div>
            <div className="form">
              <input className="form-control" placeholder="Email here" />
              <button className="btn">Submit</button>
            </div>
          </div>
        </div> */}
        {/* <!-- Newsletter End -->


            <!-- Footer Start --> */}


        <a href="#" className="back-to-top">
          <i className="fa fa-chevron-up">v svws</i>
        </a>
      </div>
    </div>
  );
};

export default Home;
