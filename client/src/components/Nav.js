import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
// import { toast } from "react-toastify";
import "../styles/Nav.css";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  // NavMenu,
  // NavItem,
  // NavLinksS,
  // NavLinksR,
  // NavBtn,
  // NavBtnLink,
} from "./NavbarHome/NavbarElements";

const Navbar = ({ isAuthenticated, setAuth, setRegister, toggleIsOpen }) => {
const navtrans = false;

  // const changeNav = () => {
  //   if (window.scrollY >= 80) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeNav);
  // }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  // const logout = (e) => {
  //   e.preventDefault();
  //   localStorage.removeItem("token");
  //   setAuth(false);
  //   setRegister(false);
  //   toast.success("Logged out successfully!");
  // };

  const menu = () => {
    if (isAuthenticated === false) {
      return (
        <>
          <IconContext.Provider value={{ color: "#fff" }}>
            <Nav scrollNav={!navtrans}>
              <NavbarContainer className="navbar">
                <NavLogo onClick={toggleHome} className="head-nav" to="/">
                  BCI P300
                </NavLogo>
                <MobileIcon onClick={toggleIsOpen}>
                  <FaBars />
                </MobileIcon>
              </NavbarContainer>
            </Nav>
          </IconContext.Provider>
        </>
      );
    } else {
      return (
        <>
          <IconContext.Provider value={{ color: "#fff" }}>
            <Nav scrollNav={!navtrans}>
              <NavbarContainer className="navbar">
                <NavLogo className="head-nav" to="/">
                  BCI P300
                </NavLogo>
                <MobileIcon onClick={toggleIsOpen}>
                  <FaBars />
                </MobileIcon>
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
