import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Services from "../components/Services";
import Plans from "../components/Plans";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <Plans />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;
