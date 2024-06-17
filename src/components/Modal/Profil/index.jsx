import React, { Fragment } from "react";

const Profil = ({ playerLevel }) => {
  const userDatas = JSON.parse(localStorage.getItem("userDatas"));
  console.log(userDatas.pseudo);
  return (
    <Fragment>
      <div className="avatar-container">
        <div className="avatar">Image</div>
        <div className="player-informations">
          Lvl <b>{playerLevel && playerLevel}</b> <b>{userDatas.classe}</b>{" "}
          <b>{userDatas.pseudo}</b>
        </div>
        <div className="progress-bar"></div>
      </div>
      <div className="bio-container">
        <h2>BIOGRAPHIE</h2>
        <hr />
        <div className="biographie">
          Magicien hors pair, Yirsa connut la renommée durant ses études à la
          prestigieuse Académie de Magie de Dalaran. Son talent exceptionnel
          pour les arcanes fut découvert très tôt, attirant l'attention des plus
          grands Archimages de la cité.
        </div>
      </div>
      <div className="progress-container">
        <h2>PROGRESSION</h2>
        <hr />
        <div className="progress-stepper">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default Profil;
