import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { toast } from "react-toastify";
import "../../styles/Nav.css";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinksR,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ isAuthenticated, setAuth, setRegister, toggleIsOpen }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
    setRegister(false);
    toast.success("Logged out successfully!");
  };

  const menu = () => {
    if (isAuthenticated === false) {
      return (
        <>
          <IconContext.Provider value={{ color: "#fff" }}>
            <Nav scrollNav={scrollNav}>
              <NavbarContainer className="navbar">
                <NavLogo onClick={toggleHome} className="head-nav" to="/">
                  BCI P300
                </NavLogo>
                <MobileIcon onClick={toggleIsOpen}>
                  <FaBars />
                </MobileIcon>
                <NavMenu className="head-menu">
                  <NavItem>
                    <NavLinksR
                      to="speller"
                      // smooth={true}
                      // duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      activeClassName="active"
                    >
                      Speller
                    </NavLinksR>
                  </NavItem>
                  <NavItem>
                    <NavLinksR
                      to="ssvep"
                      // smooth={true}
                      // duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      activeClassName="active"
                    >
                      SSVEP
                    </NavLinksR>
                  </NavItem>
                  <NavItem>
                    <NavLinksR
                      to="about"
                      // smooth={true}
                      // duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      activeClassName="active"
                    >
                      About
                    </NavLinksR>
                  </NavItem>
                  <NavItem>
                      <NavLinksR
                        to="signup"
                        // smooth={true}
                        // duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        activeClassName="active"
                      >
                        Sign Up
                      </NavLinksR>
                    </NavItem>
                  <NavItem>
                    <NavLinksR to="alert">Alert</NavLinksR>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to="/login">Sign In</NavBtnLink>
                </NavBtn>
              </NavbarContainer>
            </Nav>
          </IconContext.Provider>
        </>
      );
    } else {
      return (
        <>
          <IconContext.Provider value={{ color: "#fff" }}>
            <Nav scrollNav={scrollNav}>
              <NavbarContainer className="navbar">
                <NavLogo className="head-nav" to="/">
                  BCI P300
                </NavLogo>
                <MobileIcon onClick={toggleIsOpen}>
                  <FaBars />
                </MobileIcon>
                <NavMenu className="head-menu">
                  <NavItem>
                    <NavLinksR to="speller">Speller</NavLinksR>
                  </NavItem>
                  <NavItem>
                    <NavLinksR to="ssvep">SSVEP</NavLinksR>
                  </NavItem>
                  <NavItem>
                    <NavLinksR to="about">About</NavLinksR>
                  </NavItem>
                  <NavItem>
                    <NavLinksR to="commoninstructions">Common</NavLinksR>
                  </NavItem>
                  <NavItem>
                    <NavLinksR to="alert">Alert</NavLinksR>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to="/" onClick={logout}>
                    Logout
                  </NavBtnLink>
                </NavBtn>
              </NavbarContainer>
            </Nav>
          </IconContext.Provider>
        </>
      );
    }
  };

  return <>{menu()}</>;
};

export default Navbar;
