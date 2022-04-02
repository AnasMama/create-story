import { Route, Routes } from "react-router-dom";
import "./App.css";
import EndGame from "./pages/EndGame";
import FirstTurn from "./pages/FirstTurn";
import GameStart from "./pages/GameStart";
import Home from "./pages/Home";
import Turn from "./pages/Turn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-start" element={<GameStart />} />
        <Route path="/first-turn" element={<FirstTurn />} />
        <Route path="/turn" element={<Turn />} />
        <Route path="/end-game" element={<EndGame />} />
      </Routes>
    </div>
  );
}
export default App;
