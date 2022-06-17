import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
// import { toast } from "react-toastify";
import { Fragment } from "react";
import Nav from "../components/NavbarDashboard";
import { ButtonR } from "../components/ButtonElements";
import "../styles/Ssvep.css";
import "../styles/Dashboard.css";

const SpellerSettings = ({
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
          <h1 className="text-center my-5">Choose the Options</h1>

          <main className="form-signin">
            <form>
              <h1 className="h3 mb-3 fw-normal">Enter the Number of Trials</h1>

              <select
                id="list"
                // onChange={(e) => onChange(e)}
                name={"access"}
                className="form-control my-3"
                placeholder="Access Type"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              {/* <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
              </button> */}
            </form>

            <form>
              <h1 className="h3 mb-3 fw-normal">
                Choose the Value of Simulation Frequency
              </h1>

              <select
                id="list"
                // onChange={(e) => onChange(e)}
                name={"access"}
                className="form-control my-3"
                placeholder="Access Type"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>

              {/* <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
              </button> */}
            </form>

            <form>
              <h1 className="h3 mb-3 fw-normal">
                Choose the color of stimulus, please!
              </h1>

              <select
                id="list"
                // onChange={(e) => onChange(e)}
                name={"access"}
                className="form-control my-3"
                placeholder="Access Type"
              >
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
              </select>

              <ButtonR
                to="/dashboard/speller"
                className="start-button-speller"
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
                Start
              </ButtonR>
            </form>
          </main>
        </Fragment>
      </div>
      <Footer />
    </div>
  );
};

export default SpellerSettings;
