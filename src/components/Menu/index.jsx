import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="bg-gray-800 sidebar flex flex-col justify-center opacity-95">
      <ul>
        <li className="bg-blue-500 mb-2 text-center cursor-pointer pt-2 pb-2 hover:bg-green-500">
          inventaire
        </li>
        <li className="bg-blue-500 mb-2 text-center cursor-pointer pt-2 pb-2 hover:bg-green-500">
          Grimoire
        </li>
        <li className="bg-blue-500 mb-2 text-center cursor-pointer pt-2 pb-2 hover:bg-green-500">
          Quete
        </li>
        <li className="bg-blue-500 mb-2 text-center cursor-pointer pt-2 pb-2 hover:bg-green-500">
          Profil
        </li>
        <li className="bg-blue-500 mb-2 text-center cursor-pointer pt-2 pb-2 hover:bg-green-500">
          aide
        </li>
      </ul>
    </div>
  );
};

export default Menu;
