import React from "react";
import InputContainer from "./InputContainer";

const Footer = () => {
  return (
    <div id="Footer">
      <div className="mainContent">
        <ul className="navLinks">
          <li> Home</li>
          <li>Services </li>
          <li>Our Works</li>
          <li>Clientes</li>
          <li>Contac</li>
        </ul>
        <div className="personalInfo">
          <p className="logo">Edie</p>
          <div className="socialMedia">
            <i class="bi bi-instagram"></i>
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-twitter"></i>
          </div>
        </div>
        <div className="personalContact">
          <p> Want us to contact you?</p>
          <InputContainer />
        </div>
      </div>
      <div className="credits">
        <p>
          creado por <a href="https://github.com/jerangel1">jerangel1</a>{" "}
          created by - devChallenges.io
        </p>
      </div>
    </div>
  );
};

export default Footer;
