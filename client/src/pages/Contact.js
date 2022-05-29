import React, { Fragment, useState, useEffect } from "react";
import Nav from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
// import { ButtonR } from "../components/ButtonElements";
import "../styles/App.css";
import "../styles/Speller.css";
import "../styles/Dashboard.css";

const Contact = ({
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
          <h1>Contact</h1>
          
        </Fragment>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
