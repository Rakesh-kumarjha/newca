import React from 'react'
import { InlineWidget } from "react-calendly";
import { PopupWidget } from "react-calendly";

const CalendlyComponent = () => {
   
  return (
    <div>
        <div>
      <h2>Schedule a meeting</h2>
      <InlineWidget url="https://calendly.com/velveldce" />
    </div>
    


    </div>
  )
}

export default CalendlyComponent
