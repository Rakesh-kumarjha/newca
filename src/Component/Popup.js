import React from 'react';
import "../Style/Popup.css"

const Popup = ({ onAccept, onDecline }) => {
  return (
    <div className="popup-container">
    <div className="popup-content"> 
    <h2>Disclaimer</h2>
        <p >The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, www.shoolinconsultancy.in, you acknowledge and confirm that you are seeking information relating to Shoolin Consultancy of your own accord and that there has been no form of solicitation, advertisement, or inducement by Shoolin Consultancy or its members. The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice. Shoolin Consultancy shall not be liable for the consequences of any action taken by relying on the material/information provided on this website. The contents of this website are the intellectual property of Shoolin Consultancy.</p>
        <button onClick={onAccept} className='Popup-left'>Accept</button>
        <button onClick={onDecline} className='Popup-right'>Decline</button>
      </div>
    </div>
  );
};

export default Popup;