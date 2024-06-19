import React from "react";
import {Link, useNavigate} from "react-router-dom";

import "./footer.css";

import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {Button} from "@mui/material";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="footer">
        <div className="footer-section">
          <div className="footer-about-us">
            <h3>About us</h3>
            At Stay Swift, we are passionate travelers who believe everyone deserves a
            seamless and unforgettable travel experience. That's why we created this
            user-friendly hotel booking platform to help you find the perfect
            accommodation for your needs, whether you're seeking a luxurious getaway, a
            budget-friendly adventure, or something in between. Our team of travel
            enthusiasts and tech experts brings extensive knowledge and innovative
            solutions to ensure you get the best deals and a smooth booking process.
            Search from a wide range of hotels, compare prices, book securely, and get
            ready to explore!
          </div>
          <div className="footer-links">
            <div className="footer-quick-links">
              <h3>Quick Links</h3>

              <Button
                onClick={() => {
                  navigate("/");
                }}
                className="footer-link-btn"
              >
                Home
              </Button>
              <Button
                onClick={() => {
                  navigate("/");
                }}
                className="footer-link-btn"
              >
                Hotels
              </Button>
              <Button
                onClick={() => {
                  navigate("/account");
                }}
                className="footer-link-btn"
              >
                Account
              </Button>
            </div>
            <div className="footer-follow-us">
              <h3>Follow us</h3>
              <Link to="https://www.linkedin.com/in/anandprakash21/" target="_blank">
                <LinkedInIcon className="social-icon" />
              </Link>
              <Link to="https://github.com/anandprakash01" target="_blank">
                <GitHubIcon className="social-icon" />
              </Link>
              <Link to="https://www.instagram.com/hr_anand" target="_blank">
                <InstagramIcon className="social-icon" />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-rights">Stay Swift Hotels | All rights reserved!</div>
      </div>
    </>
  );
};

export default Footer;
