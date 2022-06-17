import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
// import {
//   FooterContainer,
//   FooterWrap,
//   FooterLinksContainer,
//   FooterLinksWrapper,
//   FooterLinkItems,
//   FooterLinkTitle,
//   FooterLink,
//   SocialMedia,
//   SocialMediaWrap,
//   SocialLogo,
//   WebsiteRights,
//   SocialIcons,
//   SocialIconLink,
// } from "./FooterElements";

import "../../styles/FooterElements.css";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <div className="FooterContainer">
        <div className="FooterWrap">
          <div className="FooterLinksContainer">
            <div className="FooterLinksWrapper">
              <div className="FooterLinkItems">
                <h1 className="FooterLinkTitle">About Us</h1>
                <div className="FooterLink" to="/login">
                  How it works
                </div>
                <div className="FooterLink" to="/login">
                  Testimonials
                </div>
                <div className="FooterLink" to="/login">
                  Careers
                </div>
                <div className="FooterLink" to="/login">
                  Investors
                </div>
                <div className="FooterLink" to="/login">
                  Terms of Service
                </div>
              </div>
              <div classname="FooterLinkItems">
                <h1 className="FooterLinkTitle">Contact Us</h1>
                <div className="FooterLink" to="/login">
                  Contact
                </div>
                <div className="FooterLink" to="/login">
                  Support
                </div>
                <div className="FooterLink" to="/login">
                  Destinations
                </div>
                <div className="FooterLink" to="/login">
                  Sponsorships
                </div>
              </div>
            </div>
            <div className="FooterLinksWrapper">
              <div className="FooterLinkItems">
                <h1 className="FooterLinkTitle">Videos</h1>
                <div className="FooterLink" to="/login">
                  Submit Video
                </div>
                <div className="FooterLink" to="/login">
                  Ambassadors
                </div>
                <div className="FooterLink" to="/login">
                  Agency
                </div>
                <div className="FooterLink" to="/login">
                  Influencer
                </div>
              </div>
              <div className="FooterLinkItems">
                <h1 className="FooterLinkTitle">Social Media</h1>
                <div className="FooterLink" to="/login">
                  Instagram
                </div>
                <div className="FooterLink" to="/login">
                  Facebook
                </div>
                <div className="FooterLink" to="/login">
                  Youtube
                </div>
                <div className="FooterLink" to="/login">
                  Twitter
                </div>
              </div>
            </div>
          </div>
          <section className="SocialMedia">
            <div className="SocialMediaWrap">
              <div className="SocialLogo" to="/" onClick={toggleHome}>
                BCI
              </div>
              <small className="WebsiteRights">
                BCI © {new Date().getFullYear()} All rights reserved.
              </small>
              <div className="SocialIcons">
                <a
                  className="SocialIconLink"
                  href="/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  className="SocialIconLink"
                  href="/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  className="SocialIconLink"
                  href="/"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </a>
                <a
                  className="SocialIconLink"
                  href="/"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  className="SocialIconLink"
                  href="/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
