// MainComponent.js
import React, { useState, useEffect } from 'react';
import Popup from './Popup';

const MainComponent = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
    return () => {
      setShowPopup(false);
    };
  }, []);

  const handleAccept = () => {
    // console.log('User accepted');
    setShowPopup(false);
  };

  const handleDecline = () => {
    // console.log('User declined');
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && <Popup onAccept={handleAccept} onDecline={handleDecline} />}
    
    </div>
  );
};

export default MainComponent;
