import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./navbar";
import ContactForm from "./form";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <main>
      <div>
        <ContactForm />
        <NavBar />
      </div>
    </main>
  </>
);
