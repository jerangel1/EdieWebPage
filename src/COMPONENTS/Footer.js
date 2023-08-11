import React from "react";

const Footer = () => {
  return (
    <div id="Footer">
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
        <form>
          <label for="Email" value="Join"></label>
          <input type="submit" value="Join"></input>
        </form>
      </div>
    </div>
  );
};

export default Footer;
