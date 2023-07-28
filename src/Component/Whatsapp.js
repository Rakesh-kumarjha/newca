import React from 'react'
import ReactWhatsapp from 'react-whatsapp';
import { FaWhatsapp } from "react-icons/fa";
import "../Style/Whatsapp.css"

const Whatsapp = () => {
  return (
    <div className='Whatsapp-container'>
      <ReactWhatsapp number="+91 7090721111" message="Hello" className='Whatsapp'><FaWhatsapp /></ReactWhatsapp>
    </div>
  )
}

export default Whatsapp
