import React, { Fragment, useState } from "react";
import { GiTwoCoins } from "react-icons/gi";
import "./Inventory.css";

const Inventory = () => {
  //const userDatas = JSON.parse(localStorage.getItem("userDatas"));
  const [items, setItems] = useState([
    {
      id: 0,
      name: "Fiole Vide",
      icon: "testIcon",
    },
    {
      id: 1,
      name: "Feuillereve",
      icon: "testIcon",
    },
  ]);

  const boxes = [
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
  ];
  console.log(boxes.length);
  return (
    <Fragment>
      <div className="inventory-search-bar mb-1">
        <input
          placeholder="Search"
          type="text"
          name="searchbar"
          id="searchbar"
        />
      </div>
      <hr />
      <div className="inventory-items flex flex-wrap mt-1 mb-5">
        {boxes.map((box, index) => {
          const item = items.find((item) => item.id === index);
          console.log(item);
          return (
            <div
              key={index}
              className="item-box hover:border-blue-500 border-4 bg-gray-500 m-1"
            >
              box {index + 1}
              {item && <div className="item">{item.name}</div>}
            </div>
          );
        })}
      </div>
      <hr />
      <div className="inventory-bank text-right">
        <b>1439 </b>
        <GiTwoCoins
          style={{
            fontSize: "1.3rem",
            color: "yellow",
            display: "inline",
            verticalAlign: "middle",
          }}
        />
      </div>
    </Fragment>
  );
};

export default Inventory;
