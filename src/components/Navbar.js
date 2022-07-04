import { useState } from "react";
import { Link } from 'react-router-dom'
import "../styles/navbar.css";
import logomain from '../imgs/logomain.png'

export default function Navbar(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  
  return (
    <>
      <nav className="navigation">
        <Link to='/' className="brand-name">
          <img src={logomain} alt='logo' className="logomain"/>
        </Link>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from Heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/work'>Work</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/resume'>Resume</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        {props.children}
      </div>
      
    </>


  );
}
