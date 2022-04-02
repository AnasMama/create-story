import "../style/home.css";
import { useState } from "react";
import GameCreate from "../components/GameCreate";
import GameJoin from "../components/GameJoin";
import GameView from "../components/GameView";

function Home() {
  const [url, setUrl] = useState("");
  return (
    <div className="home">
      <div className="container">
        <GameCreate url={url} setUrl={setUrl} />
        <GameJoin url={url} setUrl={setUrl} />
        <GameView url={url} setUrl={setUrl} />
      </div>
    </div>
  );
}

export default Home;
