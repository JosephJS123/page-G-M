import React from "react";
import { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        <div className="circle" style={{color : darkMode ? "#f985c5" : ""}}>10+</div>
        <span>años de</span>
        <span>Experiencia</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color : darkMode ? "#f985c5" : ""}}>100+</div>
        <span>clientes</span>
        <span>Satisfechos</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color : darkMode ? "#f985c5" : ""}}>20+</div>
        <span>trabajadores y</span>
        <span>Colaboradores</span>
      </div>
    </div>
  );
};

export default Experience;
