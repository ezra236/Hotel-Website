// MessageBox.jsx
import React from 'react';
import './App.css';
import { hideMessageBox } from './guestHelpers';

const MessageBox = () => {
  return (
    <div id="messageBox" className="messag" style={{ display: 'none' }}>
      <p className="c" onClick={hideMessageBox}>
        &#10006;
      </p>
      <h2>PRIME GUEST NEWS, OFFERS AND ANNOUNCEMENTS</h2>
      <p>
        <strong>NEWSLETTER SIGNUP</strong>
        <br />
        We love sharing our news and announcements with you on a regular basis so that you know what is happening in the world of Prime. To receive information about our ongoing specials and promotions, please complete the form below, and we will make sure to stay in touch.
      </p>
      <p>
        Your privacy is important to us, and we will never share or sell any information you provide to us. The notices you receive will be from Prime Lodge with hopes of enhancing your next experience with us.
      </p>
    </div>
  );
};

export default MessageBox;
