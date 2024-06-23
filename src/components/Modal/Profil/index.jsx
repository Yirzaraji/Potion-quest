import React, { Fragment } from "react";
import "./Profil.css";

const Profil = ({ playerLevel }) => {
  const userDatas = JSON.parse(localStorage.getItem("userDatas"));
  console.log(userDatas.pseudo);
  return (
    <Fragment>
      <div className="avatar-container flex items-center">
        <div className="avatar w-2/5 flex justify-center border-r-2 border-gray-500 border-dotted">
          <img
            className="rounded-full"
            src="https://placeholderimage.eu/api/155/155"
            alt=""
          />
        </div>
        <div className="player-informations flex w-3/5 text-center">
          <div className="level w-2/5 text-right">
            <b className="text-3xl">{playerLevel && playerLevel}</b>
            <b>Lvl</b>
          </div>
          <div className="player-name w-3/5 text-left text-3xl ml-4">
            <b>{userDatas.classe}</b>
            <br />
            <b>{userDatas.pseudo}</b>
          </div>
          <div className="progress-bar"></div>
        </div>
      </div>
      <div className="bio-container">
        <h2 className="mt-5">
          <b>BIOGRAPHIE</b>
        </h2>
        <hr />
        <div className="biographie text-justify">
          Magicien hors pair, <b>{userDatas.pseudo}</b> connut la renommée
          durant ses études à la prestigieuse Académie de Magie de Dalaran. Son
          talent exceptionnel pour les arcanes fut découvert très tôt, attirant
          l'attention des plus grands Archimages de la cité.
        </div>
      </div>
      <div className="progress-container">
        <h2 className="mt-5">
          <b>PROGRESSION</b>
        </h2>
        <hr />
        <div className="progress-stepper flex justify-evenly mt-4 mb-5">
          <div className="step bg-blue-500 rounded-full">Chapter I</div>
          <div className="step bg-gray-500 rounded-full">Chapter II</div>
          <div className="step bg-gray-500 rounded-full">Chapter III</div>
          <div className="step bg-gray-500 rounded-full">Chapter IV</div>
          <div className="step bg-gray-500 rounded-full">Chapter V</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profil;
