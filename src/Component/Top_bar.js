// import React from 'react'
// import Img from "../img/Log.webp";

// const Top_bar = () => {
//   return (
//     <div>
//        <div className="top-bar">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-lg-3">
//                 <div className="logo">
//                   <a href="index.html">
//                     <h1>
//                        <img src={Img} alt="Logo" /> 
//                       <h2>Mon - Fri: 8am - 9pm</h2>
//                     </h1>
//                   </a>
//                 </div>
//                    <div className="text">
//                    <h2>Mon - Fri: 8am - 9pm</h2>
                  
//                   </div>
                
//               </div>
//               <div className="col-lg-3">
//                 <div className="top-bar-right">
//                   <div className="text">
                
//                     <h2>Saturday: 8am - 9pm </h2>
                  
//                   </div>
                
                  
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="top-bar-right">
//                   <div className="text">
                   
//                     <h2>​Sunday: 8am - 6pm</h2>
//                   </div>
                
//                   <div className="text">
                    
//                     <a href="tel:+05890000111">
//                       <h2> 7892929155</h2>
//                     </a>

//                     <p>Call Us For Free Consultation</p>
//                   </div>
//                   <div className="social">
//                     <a href="">
//                       <i className="fab fa-twitter"></i>
//                     </a>
//                     <a href="">
//                       <i className="fab fa-facebook-f"></i>
//                     </a>
//                     <a href="">
//                       <i className="fab fa-linkedin-in"></i>
//                     </a>
//                     <a href="">
//                       <i className="fab fa-instagram"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Top_bar
import Nav from 'react-bootstrap/Nav';

function AlignmentExample() {
  return (
    <>
    <div className="top-bar">
           <div >
      
      {/* <marquee behavior="scroll" direction="left"><Nav className="justify-content-center" >
        <Nav.Item>
          <Nav.Link > </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link ></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2"></Nav.Link>
        </Nav.Item>
        <Nav.Item>
        
          <div className="text center">
                    
                                       <a href="tel:+05890000111" >
                                           <h2  >Call Us - 7892929155</h2>
                                         </a>
                    
                                        {/* <p>Call Us For Free Consultation</p> 
                                     </div>
         
        
        </Nav.Item>
      
    
     
        <Nav.Item >
          <Nav.Link href="/home"><div className="social">
                    <a href="">
                       <i className="fab fa-twitter"></i>
                     </a>
                     <a href="">
                       <i className="fab fa-facebook-f"></i>
                     </a>
                     <a href="">
                       <i className="fab fa-linkedin-in"></i>
                     </a>
                     <a href="">
                       <i className="fab fa-instagram"></i>
                     </a>
                   </div></Nav.Link> 
        </Nav.Item>
        
      </Nav></marquee> */}
      <div className='display'>
      <div className="text"><h2>Mon - Fri: 09:00 AM - 9:00 PM</h2></div>
      <div className="text"><h2>Saturday: 09:00am - 9:00 PM </h2></div>
      <div className="text"><h2>​Sunday: 09:00 AM- 6:00 PM</h2></div>
      <div className="text center">
                    
                    <a href="tel:7892929155" >
                        <h2  >Call Us - 7892929155</h2>
                      </a>
 
                     {/* <p>Call Us For Free Consultation</p> */}
                  </div></div>
      </div>
      </div>
    </>
  );
}

export default AlignmentExample;