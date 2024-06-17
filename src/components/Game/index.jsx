import { Fragment } from "react";
import Menu from "@/components/Menu";
import "./Game.css";

const Game = () => {
  return (
    <Fragment>
      <div className="test backgroundImageGame back text-center">
        <Menu playerLevel={1} />
      </div>
    </Fragment>
  );
};

export default Game;
