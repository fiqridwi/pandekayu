import React from "react";
import Footer from "../components/molecules/Footer";
import Hero from "../components/molecules/Hero";
import InfoSection from "../components/molecules/InfoSection";
import PandeProjectSection from "../components/molecules/PandeProjectSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <InfoSection />
      <PandeProjectSection />
      <Footer />
    </div>
  );
};

export default Home;
