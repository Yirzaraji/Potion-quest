import React, { Fragment, useState } from "react";
import Modal from "@/components/Modal/Base";
import Profil from "@/components/Modal/Profil";
import Inventory from "@/components/Modal/Inventory";
import "./Menu.css";

const Menu = ({ playerLevel }) => {
  const [selectedBtn, setSelectedBtn] = useState(null);
  const [menuBtn, setMenuBtn] = useState([
    {
      id: 0,
      name: "inventaire",
      component: <Inventory />,
    },
    {
      id: 1,
      name: "grimoire",
      component: <Profil />,
    },
    {
      id: 2,
      name: "Quete",
      component: <Profil />,
    },
    {
      id: 3,
      name: "Profil",
      component: <Profil playerLevel={playerLevel} />,
    },
    {
      id: 4,
      name: "Aides",
      component: <Profil />,
    },
  ]);

  //console.log(menuBtn[3].inventory);
  const handleClick = (event, index) => {
    setSelectedBtn(index);
  };

  return (
    <Fragment>
      <div className="bg-gray-800 sidebar flex flex-col justify-center opacity-95">
        <ul>
          {menuBtn.map((btn, index) => {
            return (
              <li
                key={index}
                onClick={(event) => handleClick(event, index)}
                className={`bg-blue-500 mb-2 text-center ${
                  selectedBtn === index ? "bg-green-500" : "bg-blue-500"
                } cursor-pointer pt-2 pb-2 hover:bg-green-500`}
              >
                {btn.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`${selectedBtn !== null ? "" : "hidden"} container-modal`}
      >
        <Modal name={menuBtn[selectedBtn]?.name}>
          {selectedBtn !== null ? menuBtn[selectedBtn].component : ""}
        </Modal>
      </div>
    </Fragment>
  );
};

export default Menu;
