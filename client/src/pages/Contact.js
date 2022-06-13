import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import AppConfig from "App.config";

import Nav from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import AddContact from "../components/AddContact";
import ContactCard from "../components/ContactCard";
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

  const contacts = useSelector((state) => state.contacts.list);

  const [contactFormVisiblity, setContactFormVisiblity] = useState(false);

  const toggleContactFormVisiblity = () =>
    setContactFormVisiblity((visiblity) => !visiblity);

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
          <div className="row">
            <div className="col text-center">
              <h2>Manage contacts!!!</h2>
              <p>
                This demo performs CRUD operation in redux store. You can add,
                edit and delete a contact in the below demo
              </p>

              <div className="col-sm-6 offset-sm-3">
                <div className="card">
                  <div className="card-header bg-dark text-white text-left">
                    <h4 className="d-inline">Contact List</h4>
                    <span
                      className="float-right mt-1 cursor-pointer"
                      onClick={toggleContactFormVisiblity}
                    >
                      <i className="fas fa-plus"></i>
                    </span>
                  </div>

                  <ul className="list-group list-group-flush">
                    {contacts.map((contact, index) => (
                      <ContactCard
                        {...contact}
                        index={index}
                        key={contact.name}
                      />
                    ))}
                  </ul>
                </div>
              </div>
              {contactFormVisiblity && (
                <AddContact onClose={toggleContactFormVisiblity} />
              )}
            </div>
          </div>
        </Fragment>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
