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
                <div className="FooterLinkTitle">About Us</div>
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
                <div className="FooterLinkTitle">Contact Us</div>
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
                <div className="FooterLinkTitle">Videos</div>
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
                <div className="FooterLinkTitle">Social Media</div>
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
          <div className="SocialMedia">
            <div className="SocialMediaWrap">
              <div className="SocialLogo" to="/" onClick={toggleHome}>
                BCI
              </div>
              <div className="WebsiteRights">
                BCI © {new Date().getFullYear()} All rights reserved.
              </div>
              <div className="SocialIcons">
                <div
                  className="SocialIconLink"
                  href="/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </div>
                <div
                  className="SocialIconLink"
                  href="/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </div>
                <div
                  className="SocialIconLink"
                  href="/"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </div>
                <div
                  className="SocialIconLink"
                  href="/"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </div>
                <div
                  className="SocialIconLink"
                  href="/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
