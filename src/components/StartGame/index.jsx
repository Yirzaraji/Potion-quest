import { Fragment } from "react";
import "./StarGame.css";
import Modal from "@/components/Modal/Creation";

const Home = () => {
  //const [isModalSubmit, setIsModalSubmit] = useState(false);

  return (
    <Fragment>
      <div className="backgroundImage">
        <Modal />
      </div>
    </Fragment>
  );
};

export default Home;
