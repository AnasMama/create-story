import { Link } from "react-router-dom";
import "../style/EndGame.css";

function EndGame() {
  return (
    <div className="page">
      <div className="left-page">
        <h1>gameTitle</h1>
        <p>Un jour Brenda et Jack eurent une serieuse discution...</p>
      </div>
      <div className="right-page">
        <div className="end-page">
          <ul>
            map pour chaque phrase du scénario
            <li>
              <h2>Jack dit :</h2>
              <h3>Joueur 1</h3>
              <p>Phrase récupérée du back</p>
            </li>
            <li>
              <h2>Brenda dit :</h2>
              <h3>Joueur 2</h3>
              <p>Phrase récupérée du back</p>
            </li>
          </ul>
          <Link to="/">
            <input type="button" value="Nouvelle Partie" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EndGame;
