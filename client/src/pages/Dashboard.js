import React, { Fragment, useState, useEffect } from "react";
import Nav from "../components/NavbarHome";
import Sidebar from "../components/Sidebar";
import '../styles/App.css';
// import { toast } from "react-toastify";

const Dashboard = ({ isAuthenticated, setAuth, setRegister, isOpen, toggleIsOpen }) => {
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

        {/* <button className="btn btn-lg btn-primary" onClick={e => logout(e)}>Logout</button> */}
      </Fragment>
      
    </div>
    </div>
  );
};

export default Dashboard;
