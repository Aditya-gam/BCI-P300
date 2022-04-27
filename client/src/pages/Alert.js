import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { Fragment } from 'react'
import { Nav } from '../components/NavbarDashboard/NavbarElements'
import { ButtonR } from '../components/ButtonElements'

const Alert = ({
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
    <div>
      <div className="alert">
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
          <h1>Alerts</h1>

          <center>
            <ButtonR
              to="/dashboard/alert"
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
              SOS
            </ButtonR>
            <ButtonR
              to="/dashboard/contact"
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
              Contact
            </ButtonR>
            {/* <ButtonR
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
            </ButtonR> */}
          </center>
        </Fragment>
      </div>
      <Footer />
    </div>

    </div>
  )
}

export default Alert
