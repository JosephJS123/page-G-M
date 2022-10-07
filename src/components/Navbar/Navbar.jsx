import React from "react";
import "./Navbar.css";
import logo from "../../img/LOGO.png";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <Toggle className="toggle"/>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to={"Navbar"}
              smooth={true}
              activeClass="activeClass"
            >
              <li>Nosotros</li>
            </Link>
            <Link
              spy={true}
              to={"Services"}
              smooth={true}
              activeClass="activeClass"
            >
              <li>Servicios</li>
            </Link>
            <Link
              spy={true}
              to={"Experience"}
              smooth={true}
              activeClass="activeClass"
            >
              <li>Experiencia</li>
            </Link>
            <Link
              spy={true}
              to={"Gallery"}
              smooth={true}
              activeClass="activeClass"
            >
              <li>Galeria</li>
            </Link>
            <Link
              spy={true}
              to={"Testimonials"}
              smooth={true}
              activeClass="activeClass"
            >
              <li>Testimonios</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to={"Contact"} smooth={true} activeClass="activeClass">
          <button className="button n-button">Contáctenos</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
