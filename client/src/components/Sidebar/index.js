import React from "react";
import { toast } from "react-toastify";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLinkS,
  SidebarLinkR,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({
  isAuthenticated,
  setAuth,
  setRegister,
  isOpen,
  toggleIsOpen,
}) => {
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
        <SidebarContainer isOpen={isOpen} onClick={toggleIsOpen}>
          <Icon onClick={toggleIsOpen}>
            <CloseIcon />
          </Icon>
          <SidebarWrapper>
            <SidebarMenu>
              <SidebarLinkS to="speller" onClick={toggleIsOpen}>
                Speller
              </SidebarLinkS>
              <SidebarLinkS to="ssvep" onClick={toggleIsOpen}>
                SSVEP
              </SidebarLinkS>
              <SidebarLinkS to="about" onClick={toggleIsOpen}>
                About
              </SidebarLinkS>
              <SidebarLinkS to="signup" onClick={toggleIsOpen}>
                Sign Up
              </SidebarLinkS>
              <SidebarLinkR to="alert" onClick={toggleIsOpen}>
                Alert
              </SidebarLinkR>
            </SidebarMenu>
            <SideBtnWrap>
              <SidebarRoute to="/login">Sign In</SidebarRoute>
            </SideBtnWrap>
          </SidebarWrapper>
        </SidebarContainer>
      );
    } else {
      return (
        <SidebarContainer isOpen={isOpen} onClick={toggleIsOpen}>
          <Icon onClick={toggleIsOpen}>
            <CloseIcon />
          </Icon>
          <SidebarWrapper>
            <SidebarMenu>
              <SidebarLinkS to="speller" onClick={toggleIsOpen}>
                Speller
              </SidebarLinkS>
              <SidebarLinkS to="ssvep" onClick={toggleIsOpen}>
                SSVEP
              </SidebarLinkS>
              <SidebarLinkS to="about" onClick={toggleIsOpen}>
                About
              </SidebarLinkS>
              <SidebarLinkR to="common" onClick={toggleIsOpen}>
                Common
              </SidebarLinkR>
              <SidebarLinkR to="alert" onClick={toggleIsOpen}>
                Alert
              </SidebarLinkR>
            </SidebarMenu>
            <SideBtnWrap>
              <SidebarRoute to="/" onClick={logout}>
                Logout
              </SidebarRoute>
            </SideBtnWrap>
          </SidebarWrapper>
        </SidebarContainer>
      );
    }
  };

  return <>{menu()}</>;
};

export default Sidebar;
