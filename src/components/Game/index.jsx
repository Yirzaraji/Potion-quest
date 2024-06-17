import { Fragment } from "react";
import Menu from "@/components/Menu";
import "./Game.css";
import MusicPlayer from "@/components/MusicPlayer";

const Game = () => {
  return (
    <Fragment>
      <div className="test backgroundImageGame back text-center">
        <MusicPlayer />
        <Menu playerLevel={1} />
      </div>
    </Fragment>
  );
};

export default Game;
