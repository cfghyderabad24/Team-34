import React from "react";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import NgosList from "../components/NgosList";

function Home() {
  return (
    <>
      <div className="section">
        <Hero />.
      </div>
      <div id="aboutus" className="section">
        <AboutUs />
      </div>
      <div id="ngolist" className="section">
        <NgosList />
      </div>
      <div id="contact" className="section">
        <ContactUs />
      </div>
    </>
  );
}

export default Home;
