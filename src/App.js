import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import { Routes, Route, Router } from 'react-router-dom';
import Contacte_Us from './Contacte _Us';
import About from './Component/About';
import Top_bar from './Component/Top_bar';
import Navbar from './Component/Navbar';
import Testimonials from "./Component/Testimonials";
import Our_Services from './Component/Our_Services';
import ContactForm from './Component/ContactForm';
import Navbar2 from "./Component/Navbar2";
import Cheque_Bounce from './Pages/Cheque_Bounce';
import Criminal_Cases from './Pages/Criminal_Cases';
import Cyber_Crime from './Pages/Cyber_Crime';
import Divvorce_Matter from './Pages/Divvorce_Matter';
import Economic_offens from "./Pages/Economic_Offens";
import Ndps from './Pages/Ndps';
import Footer from './Component/Footer';
import Whatsapp from './Component/Whatsapp';
import Blog from './Component/Blog';
import MainComponent from './Component/MainComponent';
import MainPage from './Component/MainPage';


function App() {
  return (
    // <div className="App">
    //  <Home/>
    // </div>
    <>      <Top_bar/>
   
      <Navbar/>
      <MainComponent/>
     
      <Whatsapp/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contacte' element={<Contacte_Us/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Testimonials" element={<Testimonials/>}/>
      <Route path="/OurServices" element={<Our_Services/>}/>
      <Route path="/Chequebounce" element={<Cheque_Bounce/>}/>
      <Route path="/Criminalcases" element={<Criminal_Cases/>}/>
      <Route path="/Cybercrime" element={<Cyber_Crime/>}/>
      <Route path="/Divore" element={<Divvorce_Matter/>}/>
      <Route path="/Property" element={<Economic_offens/>}/>
      <Route path='/NDPS' element={<Ndps/>}/>
      <Route path="/Property" element={<Economic_offens/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/MainComponent" element={<MainComponent/>}/>
    </Routes>
    <Footer/>
    </>

   
  );
}

export default App;
