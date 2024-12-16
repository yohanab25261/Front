import React from "react";
import Navabar from "../components/Navabar";
import Hero from "../components/Hero";
import About from "../components/About";
import KeyFeatures from "../components/KeyFeatures";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import DemoSection from "../components/DemoSection";
import Team from "../components/Team";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
function LandingPage() {
  return (
    <>
      {" "}
      <Navabar />
      <Hero />
      <About />
      <KeyFeatures />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <DemoSection />
      <Team />
      <CallToAction />
      <Footer />
    </>
  );
}

export default LandingPage;
