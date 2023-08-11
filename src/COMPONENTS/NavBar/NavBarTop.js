import React from "react";

const NavBarTop = () => {
  const enlaceInsta = "https://www.instagram.com/";
  const enlaceFace = "https://es-la.facebook.com/marketplace/";
  const enlaceWhats = "https://www.whatsapp.com/?lang=es";

  return (
    <div id="NavBarTop">
      <div>
        <h5>Visitanos en Redes Sociales!</h5>
      </div>
      <ul>
        <li>
          <a href={enlaceInsta}>
            <i className="bi bi-facebook"></i>
          </a>
        </li>
        <li>
          <a href={enlaceFace}>
            <i className="bi bi-instagram"></i>
          </a>
        </li>
        <li>
          <a href={enlaceWhats}>
            <i className="bi bi-whatsapp"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBarTop;
