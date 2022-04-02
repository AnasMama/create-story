import "../style/home.css";
import { useState } from "react";
import GameCreate from "../components/GameCreate";
import GameJoin from "../components/GameJoin";
import GameView from "../components/GameView";

function Home() {
  const [url, setUrl] = useState("");
  return (
    <div className="home">
      <GameCreate url={url} setUrl={setUrl} />
      <GameJoin url={url} setUrl={setUrl} />
      <GameView url={url} setUrl={setUrl} />
      <div className="container">
        <div className="title">
          <h1>titre</h1>
        </div>
        <div className="new-game">
          <p className="pseudo">Pseudo :</p>
          <input placeholder="Pseudo" />
          <button type="button" className="btn-newgame">
            Crée une nouvelle partie{" "}
          </button>
        </div>
        <div className="rejoin-game">
          <p className="pseudo">Pseudo :</p>
          <input placeholder="Pseudo" />
          <p className="pseudo1">Lien de la partie :</p>
          <input placeholder="Lien" />
          <button type="button" className="btn-newgame">
            Rejoindre partie
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
