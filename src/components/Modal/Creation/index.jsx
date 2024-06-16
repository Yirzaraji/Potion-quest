import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GameDatas from "@/components/GameDatas/Character";
import "./Creation.css";

const Modal = () => {
  const navigate = useNavigate();
  const [classeTxt, setClassTxt] = useState({
    pseudo: "",
    classe: "",
    description: "",
    isSubmit: false,
    isSelected: false,
    classeDatas: GameDatas,
  });
  const [selectedClasse, setSelectedClasse] = useState(null);

  const handleSubmit = () => {
    setClassTxt((prevState) => ({ ...prevState, isSubmit: true }));
    console.log("isSubmit");
    navigate("/game");
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setClassTxt((prevState) => ({ ...prevState, pseudo: value }));
  };

  const handleClickClasse = (event, index) => {
    const { textContent } = event.target;
    setClassTxt((prevState) => ({ ...prevState, classe: textContent }));

    for (const classeData of classeTxt.classeDatas) {
      if (textContent === classeData.name) {
        setClassTxt((prevState) => ({
          ...prevState,
          description: classeData.description,
        }));
        setSelectedClasse(index);
      }
    }
  };

  useEffect(() => {
    if (classeTxt.isSubmit) {
      const updatedClasseTxt = {
        pseudo: classeTxt.pseudo,
        classe: classeTxt.classe,
      };
      localStorage.setItem("userDatas", JSON.stringify(updatedClasseTxt));
      console.log("Saved to localStorage:", updatedClasseTxt);
    }
  }, [classeTxt.isSubmit]);

  return (
    <Fragment>
      <div
        className={`absolute modal ${
          classeTxt.isSubmit ? "hidden" : ""
        } p-4 bg-gray-900 rounded-lg shadow`}
      >
        <div className="modal-content">
          <div className="modal-header mb-5">
            <h5 className="modal-title text-lg font-bold text-center mb-1">
              CREATION PERSONNAGE
            </h5>
            <hr />
          </div>
          <div className="modal-body mt-4">
            <div className="form-group mb-5 text-center">
              <form>
                <label htmlFor="">PSEUDO</label>
                <br />
                <input onChange={handleChange} type="text" className="text" />
              </form>
            </div>
            <div className="classe-title text-center mb-1">CLASSE</div>
            <hr />
            <div className="form-group flex justify-evenly mt-5">
              <hr />
              {classeTxt.classeDatas.map((classeData, index) => {
                return (
                  <div
                    key={index}
                    onClick={(event) => handleClickClasse(event, index)}
                    className={`classe ${
                      selectedClasse === index ? "bg-green-500" : "bg-blue-500"
                    } hover:bg-green-500 mr-5 cursor-pointer`}
                  >
                    {classeData.name}
                  </div>
                );
              })}
            </div>
            <div className="classe-description text-justify mt-5 mb-5">
              {classeTxt.description}
            </div>
          </div>
          <div className="modal-footer mt-4 text-center absolute hover:bg-green-900 bg-green-500 cursor-pointer rounded-lg">
            <button
              onClick={handleSubmit}
              className="btn text-white px-4 py-2 rounded bg-green-500"
            >
              <b>VALIDER</b>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
