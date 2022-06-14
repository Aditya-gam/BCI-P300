import React, { Fragment, useState, useEffect } from "react";
import Nav from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { ButtonR } from "../components/ButtonElements";
import "../styles/App.css";
import "../styles/Speller.css";
import "../styles/Dashboard.css";

const Speller = ({
  isAuthenticated,
  setAuth,
  setRegister,
  isOpen,
  toggleIsOpen,
  primary,
  dark,
  dark2,
}) => {
  //   const [name, setName] = useState("");

  //   async function getName() {
  //     try {
  //       const response = await fetch("http://localhost:5000/dashboard/", {
  //         method: "GET",
  //         headers: { token: localStorage.token },
  //       });

  //       const parseRes = await response.json();

  //       setName(parseRes.user_name);
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   }

  // const logout = (e) => {
  //   e.preventDefault();
  //   localStorage.removeItem("token");
  //   setAuth(false);
  //   setRegister(false);
  //   toast.success("Logged out successfully!");
  // };

  //   useEffect(() => {
  //     getName();
  //   }, []);
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
          <h1>Speller</h1>
          <center>
            <ButtonR
              to="/dashboard/speller"
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
              // onClick=
            >
              Start
            </ButtonR>

            <div className="grid">
              <div class="grid-item grid-inside grid-blink1">A</div>
              <div class="grid-item grid-inside blinker-sp">B</div>
              <div class="grid-item grid-inside grid-blink2">C</div>
              <div class="grid-item grid-inside grid-blink1">D</div>
              <div class="grid-item grid-inside blinker-sp">E</div>
              <div class="grid-item grid-inside grid-blink2">F</div>
              <div class="grid-item grid-inside grid-blink2">G</div>
              <div class="grid-item grid-inside grid-blink1">H</div>
              <div class="grid-item grid-inside blinker-sp">I</div>
              <div class="grid-item grid-inside grid-blink2">J</div>
              <div class="grid-item grid-inside blinker-sp">K</div>
              <div class="grid-item grid-inside grid-blink1">L</div>
              <div class="grid-item grid-inside grid-blink1">M</div>
              <div class="grid-item grid-inside grid-blink2">N</div>
              <div class="grid-item grid-inside grid-blink1">O</div>
              <div class="grid-item grid-inside blinker-sp">P</div>
              <div class="grid-item grid-inside blinker-sp">Q</div>
              <div class="grid-item grid-inside blinker-sp">R</div>
              <div class="grid-item grid-inside grid-blink2">S</div>
              <div class="grid-item grid-inside blinker-sp">T</div>
              <div class="grid-item grid-inside blinker-sp">U</div>
              <div class="grid-item grid-inside grid-blink2">V</div>
              <div class="grid-item grid-inside grid-blink1">W</div>
              <div class="grid-item grid-inside grid-blink2">X</div>
              <div class="grid-item grid-inside grid-blink1">Y</div>
              <div class="grid-item grid-inside grid-blink2">Z</div>
              <div class="grid-item grid-inside grid-blink1">1</div>
              <div class="grid-item grid-inside blinker-sp">2</div>
              <div class="grid-item grid-inside grid-blink2">3</div>
              <div class="grid-item grid-inside grid-blink1">4</div>
              <div class="grid-item grid-inside grid-blink2">5</div>
              <div class="grid-item grid-inside grid-blink1">6</div>
              <div class="grid-item grid-inside blinker-sp">7</div>
              <div class="grid-item grid-inside grid-blink2">8</div>
              <div class="grid-item grid-inside grid-blink1">9</div>
              <div class="grid-item grid-inside blinker-sp">0</div>
            </div>
        </div>
          </center>
        </Fragment>
      </div>
      <Footer />
    </div>
  );
};

export default Speller;
