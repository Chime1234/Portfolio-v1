import React from "react";
import "../styles/footer.css";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => (
  <div className="footer">
    <ul className="socials">
        <li>
        <a href="https://github.com/Chime1234"><FaGithub/>
        </a>
        </li>
        <li>
        <a href="https://www.google.com/"><FaTwitter/></a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/chinemerem-anyadioha-087974195/"><FaLinkedin/></a>
        </li>
        <li>
        <a href="https://www.google.com/"><FaFacebook/></a>
        </li>
    </ul>
  </div>
);

export default Footer;