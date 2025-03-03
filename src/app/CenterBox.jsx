import React, { useEffect, useState } from 'react';
import './App.css';

const CenterBox = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set isClient to true on the client side
  }, []);

  const handleClose = async () => {
    if (isClient) {
      const { closeBox } = await import('./guestHelpers'); // Dynamically import closeBox
      closeBox();
    }
  };

  return (
    <div className="center-box" id="centerBox">
      <p>Thank you for subscribing!</p>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default CenterBox;