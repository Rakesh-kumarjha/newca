import React from "react";
import "../App.css";
import Img1 from "../img/About1.webp";
import Img2 from "../img/yours.webp";
import Img5 from "../img/team-1.jpg";
import Img6 from "../img/team-2.jpg";
import Img7 from "../img/team-3.jpg";
import { IoMdFlash } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from "react-router-dom"

const About = () => {
  AOS.init();
  return (
    <div className="">
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>About Us</h2>
            </div>
            {/* <div className="col-12">
              <a href="/">Home</a>
              <a href="">About Us</a>
            </div> */}
          </div>
        </div>
      </div>
      <div >
      <div className="about">
        <div  className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="about-img" data-aos="zoom-out-right"  data-aos-duration="3000">
                <img src={Img1} alt="Image" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="section-header"  data-aos="zoom-out-left" data-aos-duration="3000">
                <h2>Get to Know Us</h2>
              </div>
              <div className="about-text"  data-aos="zoom-out">
                <h5>Get to Know Us Experienced Legal Counsel</h5>
                <p>
                  We are an Advocate law firm located at Malleshwaram,
                  Bengaluru. We are a team of experienced lawyers practicing
                  before the High Court, City Court, Magistrate Court, and
                  Family Court. We are specialized in the field of Criminal Law,
                  Cheque bounce cases, Matrimonial / Divorce cases, etc. We are
                  known for giving reliable and quick solutions to our clients
                  in accordance with the Law. We, at Shoolin, hold the record of
                  giving the best possible results to our clients and are known
                  for being responsive and reliable. Our main goal is to serve
                  our clients and secure their interests.
                </p>
                <br></br>
                {/* <a className="btn" href="">
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-top">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-4 col-sm-6">
                <div className="feature-item"  data-aos="zoom-out" data-aos-duration="3000">
                <IoMdFlash/>
                  <h3>
Extraordinary Rapid Consultancy</h3>
                  {/* <p  className="center" >Govt Approved</p> */}
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="feature-item"   data-aos="zoom-out" data-aos-duration="3000">
                  <i className="fa fa-user-tie"></i>
                  <h3>Best Corporate Technology</h3>
                  {/* <p  className="center">Expert Attorneys</p> */}
                </div>
              </div>
           
              <div className="col-md-4 col-sm-6">
                <div className="feature-item"   data-aos="zoom-out" data-aos-duration="3000">
                  <i className="far fa-handshake"></i>
                  <h3>Support</h3>
                  {/* <p  className="center">Quick Support</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      
      <div className="about">
        <div className="container">
          <div className="right">
            <div className="row align-items ">
              <div className="col-lg-5 col-md-6">
                <div className="about-img"   data-aos="zoom-in-left" data-aos-duration="3000">
                  <img src={Img2} alt="Image" />
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="section-header" data-aos="fade-down-right" data-aos-duration="3000">
                  <h2>OUR MISSION</h2>
                </div>
                <div className="about-text" data-aos="fade-up-right" data-aos-duration="3000">
                  <h5></h5>
                  <p>
                    Our goal is to give legal relaxation to our clients by
                    serving them with a complete solution, setting high
                    standards of professional excellence combined with rich
                    experience. We aspire to be the first choice, one-stop firm,
                    consistently focusing on long-term client needs by offering
                    the most effective, trusted, and first-generation solutions,
                    while adhering to the highest standards of ethics and
                    integrity.
                  </p>
                  <p></p>
                  {/* <a className="btn" href="">
                    Learn More
                  </a> */}
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="about-img" data-aos="fade-right" data-aos-duration="3000">
                <img src={Img1} alt="Image" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="section-header" data-aos="fade-down" data-aos-duration="3000">
                <h2>OUR VISION</h2>
              </div>
              <div className="about-text" data-aos="fade-up" data-aos-duration="3000">
                {/* <h5>Get to Know Us Experienced Legal Counsel</h5> */}
               <li>To act as a catalyst in the growth story of the corporate</li>
                <li>To deliver the best solution in the most ethical, rational and cost-effective manner</li>
                <li>Help in solving the most complex problems through our rich experience and detailed research-oriented approach</li>
                <br></br> <br></br>
                {/* <a className="btn" href="">
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="timeline">
        <div className="container">
          <div className="section-header">
            <h2>OUR GOALS</h2>
          </div>
          <div className="timeline-start">
            <div className="timeline-container left" data-aos="fade-right" data-aos-duration="3000">
              <div className="timeline-content">
                <h2>Client Interest above all</h2>
                <p>
                  We hold ourselves accountable to our clients by taking
                  responsibilty of our actions & how it can affect people we
                  serve.
                </p>
              </div>
            </div>
            <div className="timeline-container  right" data-aos="fade-left" data-aos-duration="3000">
              <div className="timeline-content">
                <h2>Integrity & Honesty</h2>
                <p>
                  Conducting ourselves with integrity & doing the right thing
                  for our clients under all circumstances
                </p>
              </div>
            </div>
            <div className="timeline-container left" data-aos="fade-right" data-aos-duration="3000">
              <div className="timeline-content">
                <h2>Respect & Reverence</h2>
                <p>
                  Committed to a philosophy of mutual respect in all our
                  dealings with clients, and all our stakeholders
                </p>
              </div>
            </div>
            <div className="timeline-container right"  data-aos="fade-left" data-aos-duration="3000">
              <div className="timeline-content">
                <h2>Loyalty</h2>
                <p>
                  Committed to exhibit loyalty to those we serve and work with.
                  It is a key to maintain a culture of mutual support.
                </p>
              </div>
            </div>
            <div className="timeline-container left" data-aos="fade-right" data-aos-duration="3000">
              <div className="timeline-content">
                <h2>Professionalism</h2>
                <p>
                  Committed to providing innovative, creative, consistent and
                  high-quality value added services
                </p>
              </div>
            </div>
            {/* <div className="timeline-container right">
              <div className="timeline-content">
                <h2>
                  <span>2018</span> Registration Guru?
                </h2>
                <p></p>
              </div>
            </div> */}
             {/* <div className="timeline-container left">
              <div className="timeline-content">
                <h2>
                  <span>2017</span> Registration Guru?
                </h2>
                <p></p>
              </div>
            </div>
            <div className="timeline-container right">
              <div className="timeline-content">
                <h2>
                  <span>2016</span> Registration Guru?
                </h2>
                <p></p>
              </div>
            </div>  */}
          </div>
        </div>
      </div>
      ;{" "}
      <div className="team">
        <div className="container">
          <div className="section-header" >
            <h2>Meet Our Expert Attorneys</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6" >
              <div className="team-item">
                <div className="team-img">
                  <img src={Img5} alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Beeranna Gaonkar</h2>
                  <p>Associate</p>
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
            <div className="col-lg-3 col-md-6" >
              <div className="team-item">
                <div className="team-img">
                  <img src={Img6} alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Akash B. Shetty</h2>
                  <p>Standing Counsel for Indirect Taxes (High Court Karnataka)</p>
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
            <div className="col-lg-3 col-md-6" >
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
            <div className="col-lg-3 col-md-6" >
              <div className="team-item">
                <div className="team-img">
                  <img src={Img7} alt="Team Image" />
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
      </div></div>
    </div>
  );
};

export default About;
