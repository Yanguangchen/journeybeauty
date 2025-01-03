import React, { useEffect } from "react";
import GoogleReviews from "./reviewCarousell";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import "./socials.css";

function Socials() {
  useEffect(() => {
    // Load Medium Publication Feed script
    const mediumScript = document.createElement("script");
    mediumScript.src =
      "https://widgets.sociablekit.com/medium-publication-feed/widget.js";
    mediumScript.async = true;
    mediumScript.defer = true;
    document.body.appendChild(mediumScript);

    // Cleanup scripts on unmount
    return () => {
      document.body.removeChild(mediumScript);
    };
  }, []);

  return (
    <main>
      <div className="flex-container">
        <div className="review-widget widgetControl">
          <GoogleReviews />
        </div>
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>

        <div
          class="elfsight-app-0f52973c-323c-4f86-8941-1de51263eb5c"
          data-elfsight-app-lazy
        ></div>
        <div
          class="sk-ww-medium-publication-feed"
          data-embed-id="25466021"
        ></div>
        <div
          className="whatsapp-widget widgetControl"
          style={{
            position: "fixed",
            right: "1px", // Keep it on the right side
            bottom: "15%", // Position it halfway up the page
            transform: "translateY(50%)", // Center it vertically
            zIndex: 1, // Use a very high z-index
          }}
        >
          <WhatsAppWidget
            phoneNumber="90967798"
            companyName="Journey Beauty & Brow Work"
            message="Ready to change your whole look? Contact us now!"
          />
        </div>
      </div>
    </main>
  );
}

export default Socials;
