import React from "react";
import "./horizontalbanner.css"; // Import the CSS file

function HorizontalBanner() {
  return (
    <div className="totalContainerClass">
      <div className="flexWrapper">
        <div className="gridContainer">
          <div className="container1">
            <video
              className="videoStyle HorizontalVideo"
              loading="lazy"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src="Assets/HorizontalVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="container2">
            <p className="textAlightLeft2 TextContent">
              <b>Facials:</b> <br></br>
              Indulge in a moment of relaxation and renewal with our bespoke
              facial treatments, meticulously crafted to nurture and revitalize
              your skin. Our highly skilled estheticians assess your individual
              skin needs, customizing each session to address specific concerns
              such as dryness, dullness, or signs of aging. Using premium,
              skin-loving products and advanced techniques, we focus on
              restoring your skin’s natural balance, leaving you with a healthy,
              glowing complexion. Let the stresses of the day melt away as we
              work to reveal your skin's full radiance, giving you a refreshed,
              more youthful appearance after every treatment.
            </p>
          </div>
        </div>
      </div>
      <div className="flexWrapper">
        <div className="gridContainer2">
          <div className="container2">
            <p className="textAlightLeft3 TextContent">
              <b>Eyebrow Embroidery</b> <br></br>
              Elevate your beauty routine with our professional eyebrow
              embroidery services, designed to give you flawlessly sculpted
              brows that enhance your features. Our highly skilled
              technicians use advanced techniques to meticulously craft each
              stroke, ensuring your brows look full, defined, and perfectly
              shaped.  We use high-quality pigments and tools, we create long-lasting,
              natural-looking results that effortlessly complement your unique
              facial structure, leaving you with stunning, confidence-boosting
              brows.
            </p>
          </div>

          <div className="container1">
            <video
              className="videoStyle HorizontalVideo"
              autoPlay
              muted
              loading="lazy"
              playsInline
              loop
            >
              <source src="Assets/HorizontalVideo2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="flexWrapper">
        <div className="gridContainer">
          <div className="container1">
            <video
              className="videoStyle HorizontalVideo"
              loading="lazy"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src="Assets/HorizontalVideo3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="container2">
            <p className="textAlightLeft2 TextContent">
              <b>IPL Laser:</b> <br></br>
              Discover a new level of skincare excellence with our cutting-edge
              IPL (Intense Pulsed Light) treatments. Designed to address a wide
              range of skin concerns, our IPL sessions offer an effective,
              non-invasive solution for issues like pigmentation, sunspots, fine
              lines, acne scars, and even unwanted hair. Using precise pulses of
              light, our advanced IPL technology penetrates deep into the skin,
              stimulating collagen production and promoting a more even skin
              tone, leaving you with a brighter, rejuvenated complexion. Each
              session is tailored to suit your skin’s specific needs, ensuring
              optimal results while minimizing discomfort and downtime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalBanner;
