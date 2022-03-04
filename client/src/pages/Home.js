import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/Infosection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
  homeObjFour
} from "../components/Infosection/Data";
import Services from "../components/Services";
import "../styles/Home.css";
import Nav from "../components/NavbarHome";
import Sidebar from "../components/Sidebar";

const Home = ({isAuthenticated, setAuth, setRegister, isOpen, toggleIsOpen}) => {
  return (
    <div className="Home">
      <Sidebar
          animate={true}
          isAuthenticated={isAuthenticated}
          setAuth={setAuth}
          setRegister={setRegister}
          isOpen={isOpen}
          toggleIsOpen={toggleIsOpen}
        />
        <Nav
          animate={true}
          isAuthenticated={isAuthenticated}
          setAuth={setAuth}
          setRegister={setRegister}
          toggleIsOpen={toggleIsOpen}
        />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Services />
      <InfoSection {...homeObjFour} />
      <Footer />
    </div>
  );
};

export default Home;
