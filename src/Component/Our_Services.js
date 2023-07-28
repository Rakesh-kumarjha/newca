import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Style/Our_Services.css";
import Img3 from "../img/Ourserves.webp";
import Img4 from "../img/food.webp";
import Img5 from "../img/Agent.jpg";
import Img6 from "../img/gst.jpg";
import Img7 from "../img/divorce1.jpg";
import Img8 from "../img/Criminal.webp";
import Img9 from "../img/NDPS.webp";
import Img10 from "../img/Economic.webp";
import Img11 from "../img/Cyber.webp";
import Img12 from "../img/Cheque.webp";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import AOS from 'aos';
import 'aos/dist/aos.css';


function ResponsiveExample() {
  AOS.init();
  return (
    <div>
      <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="about-img">
                <img src={Img3} alt="Image" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div>
                <h2>OUR SERVICES</h2>
              </div>
              <div className="about-text">
                <p>
                  No matter what type of legal support you’re looking for, we
                  have the resources and expertise to help. See our services
                  below, and contact us if you have any questions or special
                  requests.
                </p>

                <p></p>
                <Link to="/Contacte">
                <a className="btn" href="">
                  contact us
                </a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <div>
          <Row>
            <Col>
              <div className="headers" data-aos="zoom-in" data-aos-duration="1000">
                <h2>Our Services</h2>
              </div>
            </Col>
          </Row>
        </div>
        <hr></hr>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        {/* <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
            <img src={Img4} alt="image" className="Ourimages" />
            </div>
            <div className="col-lg-7 col-md-6">
             
              <div className="about-text">
              
              <h2>
                {" "}
                
                <a href="/">Food License</a>
              </h2>
              Get Your FSSAI Certificate Now FSSAI launched Food Safety
              Compliance System (FoSCoS) with effect from 1st June 2020
              replacing existing Food Licensing and Registration System. FSSAI
              License (Food License Registration certificate online) is now
              mandatory for every food product business. You have to register
              your business under FSSAI to retail, wholesale, manufacture,
              ecommerce, distribute and transport food products. FSSAI is
              established under the Ministry of Health & Family Welfare,
              Government of India. The FSSAI has been established under the Food
              Safety and Standards Act, 2006. You need to register for FSSAI
              Registration Certificate online through the portal.
              <br></br>
              <Link to="/https://www.foodlicensebangalore.in/">
              <a href=""> <button class="button">
                <span>Read More</span>
              </button></a></Link>
             
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
            <img src={Img5} alt="image" className="Ourimages" />
            </div>
            <div className="col-lg-7 col-md-6">
             
              <div className="about-text">
              <h2>
              {" "}
              <a href="/">Rental Agreement</a>
            </h2>
            Bangalore known as Bengaluru, is the capital of the Indian state of
            Karnataka. This is a fast-developing city in many sectors,
            especially the IT sector. There are amazing employment opportunities
            created in Bangalore at a fast pace. This is one of the amazing
            reasons why people all over the world had attracted more to
            Bangalore. So, the need for rental homes has increased. All you must
            know is the proper procedure for renting in this city and How to
            Create a Rent Agreement in Bangalore but before knowing the process
            let’s first discuss What is Rent Agreement?
            <p>
              A rent agreement is an agreement in which two parties Owner and
              Tenant mutually agree on the rental of property under the given
              rules and regulations prescribed by the Government of India. It
              plays a vital role for both the Tenant and the Owner of the
              Property. The tenant gets the Legal Assurance for the Rented
              Property after Drafting the Rental Agreement. The owner also gets
              the benefit of the Rental Agreement as it secures his/her property
              from any kind of illegal activity.
            </p>
            <br></br>
           
            <Link to="/Rental"> 
                   <button class="button" href="/"><span>Read More</span></button>
                   </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
      
      
        <hr></hr>
        <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
            <img src={Img6} alt="image" className="Ourimages" />
            </div>
            <div className="col-lg-7 col-md-6">
             
              <div className="about-text">
              <h2>
              {" "}
              <a href="/"> GST Registration</a>
            </h2>
            Streamline your business with seamless GST registration, unlocking
            growth and compliance with ease. More details coming soon...
            <br></br>
           
              <Link to="/GST">
            <button class="button"><span>Read More</span></button>
            </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <hr></hr>
        <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
            <img src={Img7} alt="image" className="Ourimages" />
            </div>
            <div className="col-lg-7 col-md-6">
             
              <div className="about-text">
              <a href="/">
              <h2>Divorce Matter</h2>{" "}
            </a>
            Drafting divorce petitions Petition for divorce and contentious
            divorce cases By carefully crafting the divorce petition, you have
            already won half the battle. We draught the Petition utilising all
            of our divorce knowledge and build a solid base for the entire
            disputed divorce process.
            <br></br>
          
              <Link to="/Divore">
            <button class="button" href="/Divore"><span>Read More</span></button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
       
        <hr></hr>
        <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
            <img src={Img8} alt="image" className="Ourimages" />
            </div>
            <div className="col-lg-7 col-md-6">
             
              <div className="about-text">
              <a href="/">
              <h2> Criminal Cases</h2>
            </a>
            Drafting divorce petitions Petition for divorce and contentious
            divorce cases By carefully crafting the divorce petition, you have
            already won half the battle. We draught the Petition utilising all
            of our divorce knowledge and build a solid base for the entire
            disputed divorce process.
            <br></br>
              <Link to="/Criminalcases">
            <button class="button" href="/"><span>Read More</span></button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        <hr></hr>
        <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
            <img src={Img9} alt="image" className="Ourimages" />
            </div>
            <div className="col-lg-7 col-md-6">
             
              <div className="about-text">
              <a href="/">
              <h2>NDPS</h2>{" "}
            </a>
            Drafting divorce petitions Petition for divorce and contentious
            divorce cases By carefully crafting the divorce petition, you have
            already won half the battle. We draught the Petition utilising all
            of our divorce knowledge and build a solid base for the entire
            disputed divorce process.
            <br></br><a href="">
              <Link to="/NDPS">
              <button class="button" ><span>Read More</span></button></Link></a>
            
              </div>
            </div>
          </div>
        </div>
      </div>
       
        <hr></hr>
        <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
            <img src={Img10} alt="image" className="Ourimages" />
            </div>
            <div className="col-lg-7 col-md-6">
             
              <div className="about-text">
              <a href="/">
              <h2> Economic Offense</h2>
            </a>
            Drafting divorce petitions Petition for divorce and contentious
            divorce cases By carefully crafting the divorce petition, you have
            already won half the battle. We draught the Petition utilising all
            of our divorce knowledge and build a solid base for the entire
            disputed divorce process.
            <br></br>
           
              <Link to="/Economic">
              <button class="button" href="/"><span>Read More</span></button> </Link>
                         </div>
            </div>
          </div>
        </div>
      </div>
        
        <hr></hr>
        <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
            <img src={Img11} alt="image" className="Ourimages" />
            </div>
            <div className="col-lg-7 col-md-6">
             
              <div className="about-text">
              <a href="/">
              <h2> Cyber Crime</h2>
            </a>
            Drafting divorce petitions Petition for divorce and contentious
            divorce cases By carefully crafting the divorce petition, you have
            already won half the battle. We draught the Petition utilising all
            of our divorce knowledge and build a solid base for the entire
            disputed divorce process.
            <br></br>
           
              <Link to="/Cybercrime">  
               <button class="button" href="/"><span>Read More</span></button>
              </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
      
        <hr></hr>
        <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
            <img src={Img12} alt="image" className="Ourimages" />
            </div>
            <div className="col-lg-7 col-md-6">
             
              <div className="about-text">
              <a href="/">
              <h2> Cheque Bounce</h2>
            </a>
            Drafting divorce petitions Petition for divorce and contentious
            divorce cases By carefully crafting the divorce petition, you have
            already won half the battle. We draught the Petition utilising all
            of our divorce knowledge and build a solid base for the entire
            disputed divorce process.
            <br></br>
         
              <Link to="/Chequebounce">
            <button class="button" href="/"><span>Read More</span></button></Link> 
                         </div>
            </div>
          </div>
        </div>
      </div> */}
      
      {/* <CardGroup className="CardGroups">
      <Card className="cards" data-aos="fade-right" data-aos-duration="1000">
        <Card.Img variant="top"src={Img7} />
        <Card.Body>
          <Card.Title>Divorce Matter</Card.Title>
          <Card.Text>
          Drafting divorce petitions Petition for divorce and contentious
            divorce cases By carefully crafting the divorce petition, you have
            already won half the battle. We draught the Petition utilising all
            of our divorce knowledge and build a solid base for the entire
            disputed divorce process.
          </Card.Text>
          <Link to="/Divore">
            <button class="button" href="/Divore"><span>Read More</span></button></Link>
        </Card.Body>
       
      </Card>
      <Card className="cards" data-aos="fade-up" data-aos-duration="1000">
        <Card.Img variant="top" src={Img8} />
        <Card.Body>
          <Card.Title>Criminal Cases</Card.Title>
          <Card.Text>
          Drafting divorce petitions Petition for divorce and contentious
            divorce cases By carefully crafting the divorce petition, you have
            already won half the battle. We draught the Petition utilising all
            of our divorce knowledge and build a solid base for the entire
            disputed divorce process.
          </Card.Text>
          <Link to="/Criminalcases">
            <button class="button" href="/"><span>Read More</span></button></Link>
        </Card.Body>
     
      </Card>
      <Card className="cards" data-aos="fade-left" data-aos-duration="1000">
        <Card.Img variant="top" src={Img9} />
        <Card.Body>
          <Card.Title>NDPS</Card.Title>
          <Card.Text>
          Drafting divorce petitions Petition for divorce and contentious
            divorce cases By carefully crafting the divorce petition, you have
            already won half the battle. We draught the Petition utilising all
            of our divorce knowledge and build a solid base for the entire
            disputed divorce process.
          </Card.Text>
          <Link to="/NDPS">
              <button class="button" ><span>Read More</span></button></Link>
        </Card.Body>
       
      </Card>
    </CardGroup>

    <CardGroup   className="CardGroups">
      <Card className="cards" data-aos="fade-right" data-aos-duration="1000">
        <Card.Img variant="top" src={Img10} />
        <Card.Body>
          <Card.Title><h2>Cyber Crime</h2></Card.Title>
          <Card.Text>
          Drafting divorce petitions Petition for divorce and contentious
            divorce cases By carefully crafting the divorce petition, you have
            already won half the battle. We draught the Petition utilising all
            of our divorce knowledge and build a solid base for the entire
            disputed divorce process.
          </Card.Text>
          <Link to="/Cybercrime">  
               <button class="button" href="/"><span>Read More</span></button>
              </Link>
        </Card.Body>
       
      </Card>
      <Card className="cards" data-aos="fade-up" data-aos-duration="1000">
        <Card.Img variant="top" src={Img11} />
        <Card.Body>
          <Card.Title><h2>Property Verification</h2></Card.Title>
          <Card.Text>
          Drafting divorce petitions Petition for divorce and contentious
            divorce cases By carefully crafting the divorce petition, you have
            already won half the battle. We draught the Petition utilising all
            of our divorce knowledge and build a solid base for the entire
            disputed divorce process.
          </Card.Text>
          <Link to="/Property">
              <button class="button" href="/"><span>Read More</span></button> </Link>
        </Card.Body>
       
      </Card>
      <Card className="cards" data-aos="fade-left" data-aos-duration="1000">
        <Card.Img variant="top" src={Img12} />
        <Card.Body>
          <Card.Title><h2>Cheque Bounce</h2></Card.Title>
          <Card.Text>
          Drafting divorce petitions Petition for divorce and contentious
            divorce cases By carefully crafting the divorce petition, you have
            already won half the battle. We draught the Petition utilising all
            of our divorce knowledge and build a solid base for the entire
            disputed divorce process.
          </Card.Text>
          <Link to="/Chequebounce">
            <button class="button" href="/"><span>Read More</span></button></Link>
        </Card.Body>
    
      </Card>
    </CardGroup>
     */}
<div className="cardesgroup">
<div class="cards" >
    <img src={Img7} alt="Card Image"/>
    <div class="card-content">
      <h3>Divorce Matter</h3>
      <p> Drafting divorce petitions Petition for divorce and contentious
            divorce cases By carefully crafting the divorce petition, you have
            already won half the battle. We draught the Petition utilising all
            of our divorce knowledge and build a solid base for the entire
            disputed divorce process.</p>
    </div>
    <Link to="/Divore">
            <button class="button" href="/Divore"><span>Read More</span></button></Link>
  </div>
  <div class="cards" >
    <img src={Img8} alt="Card Image"/>
    <div class="card-content">
      <h3>Criminal Cases</h3>
      <p> Drafting divorce petitions Petition for divorce and contentious
            divorce cases By carefully crafting the divorce petition, you have
            already won half the battle. We draught the Petition utilising all
            of our divorce knowledge and build a solid base for the entire
            disputed divorce process.</p>
    </div>
    <Link to="/Criminalcases">
            <button class="button" href="/"><span>Read More</span></button></Link>
  </div>
  <div class="cards">
    <img src={Img11} alt="Card Image"/>
    <div class="card-content">
      <h3>NDPS</h3>
      <p> Drafting divorce petitions Petition for divorce and contentious
            divorce cases By carefully crafting the divorce petition, you have
            already won half the battle. We draught the Petition utilising all
            of our divorce knowledge and build a solid base for the entire
            disputed divorce process.</p>
      
    </div>
    <Link to="/NDPS">
              <button class="button" ><span>Read More</span></button></Link>
  </div>
  
</div>
<div className="cardesgroup">
<div class="cards"  >
    <img src={Img10} alt="Card Image"/>
    <div class="card-content">
      <h3>Cyber Crime</h3>
      <p>   Drafting divorce petitions Petition for divorce and contentious
            divorce cases By carefully crafting the divorce petition, you have
            already won half the battle. We draught the Petition utilising all
            of our divorce knowledge and build a solid base for the entire
            disputed divorce process..</p>
    </div>
    <Link to="/Cybercrime">  
               <button class="button" href="/"><span>Read More</span></button>
              </Link>
  </div>
  <div class="cards" >
    <img src={Img11} alt="Card Image"/>
    <div class="card-content">
      <h3>Property Verification</h3>
      <p>   Drafting divorce petitions Petition for divorce and contentious
            divorce cases By carefully crafting the divorce petition, you have
            already won half the battle. We draught the Petition utilising all
            of our divorce knowledge and build a solid base for the entire
            disputed divorce process..</p>
    </div>
    <Link to="/Property">
              <button class="button" href="/"><span>Read More</span></button> </Link>
  </div>
  <div class="cards" >
    <img src={Img11} alt="Card Image"/>
    <div class="card-content">
      <h3>Cheque Bounce</h3>
      <p>   Drafting divorce petitions Petition for divorce and contentious
            divorce cases By carefully crafting the divorce petition, you have
            already won half the battle. We draught the Petition utilising all
            of our divorce knowledge and build a solid base for the entire
            disputed divorce process..</p>
    </div>
    <Link to="/Chequebounce">
            <button class="button" href="/"><span>Read More</span></button></Link>
  </div>
  
</div>
       
      </Container>
    </div>
  );
}

export default ResponsiveExample;
