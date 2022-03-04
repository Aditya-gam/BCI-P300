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
  NavLinksS,
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
                    <NavLinksS
                      to="speller"
                      // smooth={true}
                      // duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      activeClassName="active"
                    >
                      Speller
                    </NavLinksS>
                  </NavItem>
                  <NavItem>
                    <NavLinksS
                      to="ssvep"
                      // smooth={true}
                      // duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      activeClassName="active"
                    >
                      SSVEP
                    </NavLinksS>
                  </NavItem>
                  <NavItem>
                    <NavLinksS
                      to="about"
                      // smooth={true}
                      // duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      activeClassName="active"
                    >
                      About
                    </NavLinksS>
                  </NavItem>
                  <NavItem>
                      <NavLinksS
                        to="signup"
                        // smooth={true}
                        // duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        activeClassName="active"
                      >
                        Sign Up
                      </NavLinksS>
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
                    <NavLinksS to="speller">Speller</NavLinksS>
                  </NavItem>
                  <NavItem>
                    <NavLinksS to="ssvep">SSVEP</NavLinksS>
                  </NavItem>
                  <NavItem>
                    <NavLinksS to="about">About</NavLinksS>
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
