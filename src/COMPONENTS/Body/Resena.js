import React from "react";

const Resena = () => {
  return (
    <div className="resena">
      <div className="resenaCuota">
        <p>
          “Fast and outstanding resutls. Edie understands their customer’s
          needs. They have a young and talented team.”{" "}
        </p>
      </div>
      <div className="resenaId">
        <div className="resenaId_profilePic">
          <img
            src="https://i.pinimg.com/originals/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
            alt="ProfilePic"
          />
        </div>
        <div className="resenaId_profileInfo">
          <p className="resenaId_profileInfo_name">Carlos Tran</p>
          <p className="resenaId_profileInfo_title">The Decorate Gatsby</p>
        </div>
      </div>
    </div>
  );
};

export default Resena;
