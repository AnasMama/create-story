import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import GameView from "./components/GameView";
import GameJoin from "./components/GameJoin";
import GameCreate from "./components/GameCreate";
import EndGame from "./pages/EndGame";
import FirstTurn from "./pages/FirstTurn";
import GameStart from "./pages/GameStart";
import Home from "./pages/Home";
import Turn from "./pages/Turn";

function App() {
  const [url, setUrl] = useState("");

  return (
    <div className="App">
      <GameCreate url={url} setUrl={setUrl} />
      <GameJoin url={url} setUrl={setUrl} />
      <GameView url={url} setUrl={setUrl} />
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
