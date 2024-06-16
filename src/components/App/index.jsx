import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "@/components/ErrorPage";
import StartGame from "@/components/StartGame";
import Game from "@/components/Game";
import { IconContext } from "react-icons";

function App() {
  return (
    <Router>
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <Routes>
          <Route exact path="/" element={<StartGame />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </IconContext.Provider>
    </Router>
  );
}

export default App;
