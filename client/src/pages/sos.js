import React, { Fragment, useState, useEffect } from "react";
import Nav from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
// import { ButtonR } from "../components/ButtonElements";
import "../styles/App.css";
import "../styles/Speller.css";
import "../styles/Dashboard.css";

const Sos = ({
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

  const [details, setDetails] = useState(null);

  const getUserGeolocationDetails = () => {
    fetch(
      "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
    )
      .then((response) => response.json())
      .then((data) => setDetails(data));
  };

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
          <h1>SOS!!!</h1>
          <div className="row">
            <div className="col text-center">
              <h2>Find my IP and Location</h2>
              <p className="mt-3">
                <button
                  className="btn btn-primary"
                  onClick={getUserGeolocationDetails}
                >
                  Find my details
                </button>

                <div className="row justify-content-center mt-3">
                  <div className="col-lg-6 text-center text-dark">
                    {details && (
                      <ul className="list-group">
                        <li className="list-group-item">
                          Location :{" "}
                          {`${details.city}, ${details.country_name}(${details.country_code})`}
                        </li>
                        <li className="list-group-item">IP: {details.IPv4}</li>
                      </ul>
                    )}
                  </div>
                </div>
              </p>
            </div>
          </div>
        </Fragment>
      </div>
      <Footer />
    </div>
  );
};

export default Sos;
