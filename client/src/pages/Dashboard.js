import React, { Fragment, useState, useEffect } from "react";
import Nav from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
// import ButtonSection from "../components/ButtonSection";
// import {
//   buttonObjOne,
//   buttonObjTwo,
//   buttonObjThree,
//   buttonObjFour,
// } from "../components/ButtonSection/Data";
import { ButtonR } from "../components/ButtonElements";
import "../styles/App.css";
import "../styles/Dashboard.css";
// import { toast } from "react-toastify";

const Dashboard = ({
  isAuthenticated,
  setAuth,
  setRegister,
  isOpen,
  toggleIsOpen,
  primary,
  dark,
  dark2,
}) => {
  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();

      setName(parseRes.user_name);
    } catch (err) {
      console.error(err.message);
    }
  }

  // const logout = (e) => {
  //   e.preventDefault();
  //   localStorage.removeItem("token");
  //   setAuth(false);
  //   setRegister(false);
  //   toast.success("Logged out successfully!");
  // };

  useEffect(() => {
    getName();
  }, []);
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
      <div className="fullpage">
        <Fragment>
          <h1>Dashboard</h1>
          <h1 className="text-center my-5">Hello {name}</h1>
          
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
          >
            Speller
          </ButtonR>
          <ButtonR
            to="/dashboard/ssvep"
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
            SSVEP
          </ButtonR>
          <ButtonR
            to="/dashboard/common"
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
            Common Instructions
          </ButtonR>
          <ButtonR
            to="/alert"
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
            Alert
          </ButtonR>
          </center>
        </Fragment>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
