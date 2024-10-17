import React, { useEffect } from "react";
import GoogleReviews from "./reviewCarousell";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import "./socials.css";

function Socials() {
  useEffect(() => {
    // Load Facebook Page Posts script
    const facebookScript = document.createElement('script');
    facebookScript.src = 'https://widgets.sociablekit.com/facebook-page-posts/widget.js';
    facebookScript.async = true;
    facebookScript.defer = true;
    document.body.appendChild(facebookScript);

    // Load Medium Publication Feed script
    const mediumScript = document.createElement('script');
    mediumScript.src = 'https://widgets.sociablekit.com/medium-publication-feed/widget.js';
    mediumScript.async = true;
    mediumScript.defer = true;
    document.body.appendChild(mediumScript);

    // Cleanup scripts on unmount
    return () => {
      document.body.removeChild(facebookScript);
      document.body.removeChild(mediumScript);
    };
  }, []);

  return (
    <div className="flex-container">
      <div className="review-widget widgetControl">
        <GoogleReviews />
      </div>
      <h1>Socials</h1>
      <div className='sk-ww-facebook-page-posts' data-embed-id='25466004'></div>
      <div class='sk-ww-medium-publication-feed' data-embed-id='25466021'></div>
      <div className="whatsapp-widget widgetControl">
        <WhatsAppWidget
          phoneNumber="90967798"
          companyName="Journey Beauty"
          message="Hello! How can we help you?"
        />
      </div>
    </div>
  );
}

export default Socials;
