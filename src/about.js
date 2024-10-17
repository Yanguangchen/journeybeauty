import React, { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: "5%",
          border: "1px solid #051d41",
          borderRadius: "0.5rem",
          overflow: "hidden",
          background: "#512573",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="accordionTabs"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "1rem 5rem",
            textAlign: "center",
            transition: "background-color 0.3s",
            fontSize: "150%",
            background: "#FFBAC2",
            color: "Black",
            border: "none",
          }}
        >
          <span style={{ fontWeight: "600" }}>{title}</span>
          <span
            style={{
              transform: isOpen ? "rotate(45deg)" : "rotate(0)",
              transition: "transform 0.3s",
              marginLeft: "0.5rem",
            }}
          >
            +
          </span>
        </button>
        <div
          style={{
            maxHeight: isOpen ? "1000px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease-in-out",
          }}
        >
          <div style={{ padding: "1.5rem", background: "white" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const CarOptionsSection = () => {
  return (
    <div
      style={{
        maxWidth: "64rem",
        margin: "0 auto",
        padding: "1.5rem",
        borderRadius: "0.75rem",
      }}
    >
      <h1
        style={{
          fontSize: "1.875rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Beauty is a Journey, let us walk it with you
      </h1>

      <div>
        <AccordionItem title="Experts in Beauty">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Our experience:
          </h4>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            }}
          ></ul>
          <p>
            At <b>Journey Beauty </b>, we are deeply committed to nurturing not
            just your outer beauty but also enhancing the inner confidence that
            shines through. We believe that true beauty is a journey, and we are
            here to walk every step of that path with you. Our goal is to
            provide more than just a treatment; we offer an immersive, luxurious
            experience that indulges your senses and leaves you feeling
            rejuvenated from head to toe. Step into our serene oasis, where a
            tranquil ambiance greets you the moment you arrive. Our treatments
            are carefully curated to meet your unique needs, using only the
            finest products and techniques to ensure the highest level of
            satisfaction. From soothing massages that melt away stress to
            rejuvenating facials that bring out your natural radiance, every
            service is designed to pamper you and elevate your sense of
            well-being. Let us be your sanctuary for relaxation, self-care, and
            beauty, helping you leave each session not only looking refreshed
            but feeling truly empowered and confident.
          </p>
        </AccordionItem>

        <AccordionItem title="Our Mission, Our Vision">
          <p>
            <b>Vision</b> <br></br><br></br>
            To empower individuals to embrace their natural beauty
            and confidence. <br></br>
            Our vision is to be more than just a beauty
            destination; it's about inspiring a mindset shift where every
            individual recognizes and celebrates their natural beauty. 
            <br></br>
            We aim to create an environment where self-care is synonymous with
            self-empowerment. At the core of this vision is the belief that
            beauty comes in many forms, and our goal is to enhance what already
            makes you uniquely you. 
            <br></br>
            By providing treatments and experiences that
            bring out your best features, we strive to help you walk out with
            not just a radiant appearance but also an unshakeable confidence. We
            envision a world where everyone feels empowered to embrace their
            individuality and express their inner strength through their beauty
            journey. 
            <br></br>
            <br></br>
            <b>Mission:</b> <br></br>
            <br></br>To curate unparalleled beauty journeys
            through innovative treatment and expert service.
            <br></br>Our mission is to transform every visit into a holistic beauty journey tailored just
            for you. We commit to continuously curating a menu of treatments
            that blend the latest beauty innovations with proven techniques to
            offer services that are truly unparalleled. <br></br>
            Our approach goes beyond
            the traditional beauty salon experience; it's about listening to
            your needs, understanding your unique beauty goals, and providing
            expert guidance to achieve them. <br></br>
            Through the dedication and skill of
            our professionals, we ensure that every treatment is more than just
            a service—it’s a personalized experience designed to leave you
            feeling rejuvenated and confident. In every step, we prioritize
            excellence, innovation, and expert care to make your beauty journey
            as fulfilling and extraordinary as possible.
          </p>
        </AccordionItem>

        <AccordionItem title="Comfortable environment for you to relax">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Key Benefits:
          </h4>
          <p>
            Our beauty salon is dedicated to providing you with top-tier,
            premium comfort, ensuring that your experience with us is nothing
            short of exceptional. <br></br>
            From the moment you walk through our doors, you will be enveloped in
            an atmosphere of warmth and relaxation, where every detail has been
            thoughtfully designed for your ultimate comfort.
            <br></br>
            We believe that your time with us should be more than just a
            service; it should be an indulgent escape from the everyday hustle.
            While our skilled professionals work meticulously to bring out the
            best version of you, you can unwind in our plush, soothing
            environment.<br></br>
            Every aspect of our salon, from the cozy seating to the calming
            ambiance and refreshing beverages, is tailored to create a haven of
            tranquility where you can truly relax and feel pampered. <br></br>
            Your comfort and satisfaction are our top priorities, and we go the
            extra mile to make sure you leave feeling not only beautiful but
            also refreshed and re-energized. At our salon, you are not just
            receiving a treatment; you are experiencing a luxurious retreat
            designed to cater to your every need.
          </p>
        </AccordionItem>
      </div>
    </div>
  );
};

export default CarOptionsSection;
