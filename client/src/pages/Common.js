import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Fragment } from "react";
import Nav from "../components/NavbarDashboard";
// import { ButtonR } from "../components/ButtonElements";
import "../styles/Ssvep.css";
import "../styles/Dashboard.css";

const Common = ({
  isAuthenticated,
  setAuth,
  setRegister,
  isOpen,
  toggleIsOpen,
  primary,
  dark,
  dark2,
}) => {
  return (
    <div className="dashboard">
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
      <div className="fullpage-dashboard">
        <Fragment>
          <h1>Common Instructions</h1>

          {/* <center>
            <ButtonR
              to="/dashboard/water"
              className="blinker"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              activeClassName="active"
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
              dark2={dark2 ? 1 : 0}
            >
              Water
            </ButtonR>
            <ButtonR
              to="/dashboard/fan"
              className="blinker"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              activeClassName="active"
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
              dark2={dark2 ? 1 : 0}
            >
              Fan
            </ButtonR>
            <ButtonR
              to="/dashboard/food"
              className="blinker"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              activeClassName="active"
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
              dark2={dark2 ? 1 : 0}
            >
              Food
            </ButtonR>
            <ButtonR
              to="/dashboard/restroom"
              className="blinker"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              activeClassName="active"
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
              dark2={dark2 ? 1 : 0}
            >
              Restroom
            </ButtonR>
          </center> */}
        </Fragment>
      </div>
      <Footer />
    </div>
  );
};

export default Common;
