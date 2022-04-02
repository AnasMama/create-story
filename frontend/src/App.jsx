import "./App.css";
import { useState } from "react";
import GameView from "./components/GameView";
import GameJoin from "./components/GameJoin";
import GameCreate from "./components/GameCreate";

function App() {
  const [url, setUrl] = useState("");

  return (
    <div className="App">
      <GameCreate url={url} setUrl={setUrl} />
      <GameJoin url={url} setUrl={setUrl} />
      <GameView url={url} setUrl={setUrl} />
    </div>
  );
}

export default App;
