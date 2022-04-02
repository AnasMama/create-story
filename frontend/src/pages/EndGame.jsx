import { Link } from "react-router-dom";
import "../style/EndGame.css";

function EndGame() {
  return (
    <div className="page">
      <div className="left-page">
        <h1 className="gametitle">
          Il était une fois dans un pays fort, fort lointain...
        </h1>
        <p className="first-phrase">
          Un jour Brenda et Jack eurent une serieuse discussion...
        </p>
        <p className="first-phrase">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          deleniti, laborum distinctio voluptatum et
        </p>
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
