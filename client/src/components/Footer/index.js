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
                <div>
                <a href="/login" className="FooterLink">How it works</a>
                </div>
                <div>
                <a href="/login" className="FooterLink">Testimonials</a>
                </div>
                <div>
                <a href="/login" className="FooterLink">Careers</a>
                </div>
                <div>
                <a href="/login" className="FooterLink">Terms of Service</a>
                </div>
              </div>
              <div classname="FooterLinkItems">
                <h1 className="FooterLinkTitle">Contact Us</h1>

                <div>
                <a href="/login" className="FooterLink">Contact</a>
                </div>
                <div>
                <a href="/login" className="FooterLink">Support</a>
                </div>
                <div>
                <a href="/login" className="FooterLink">Destinations</a>
                </div>
                <div>
                <a href="/login" className="FooterLink">Sponsorships</a>
                </div>
              </div>
            </div>
            <div className="FooterLinksWrapper">
              <div className="FooterLinkItems">
                <h1 className="FooterLinkTitle">Videos</h1>

                <div>
                <a href="/login" className="FooterLink">Submit Video</a>

                </div>
                <div>
                <a href="/login" className="FooterLink">Ambassadors</a>
                </div>
                <div>
                <a href="/login" className="FooterLink">Agency</a>
                </div>
                <div>
                <a href="/login" className="FooterLink">Influencer</a>
                </div>
              </div>
              <div className="FooterLinkItems">
                <h1 className="FooterLinkTitle">Social Media</h1>
                <div>
                <a href="/login" className="FooterLink">Instagram</a>
                </div>
                <div>
                <a href="/login" className="FooterLink">Facebook</a>
                </div>
                <div>
                <a href="/login" className="FooterLink">Youtube</a>
                </div>
                <div>
                <a href="/login" className="FooterLink">Twitter</a>
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