import "../style/gamestart.css";

function GameStart() {
  return (
    <div className="home">
      <div className="container">
        <div className="playerlist">
          <div className="list">
            <h2 className="title-list">Liste des joueurs:</h2>
            <ul className="listp">
              <li>Michel Tacos</li>
              <hr className="ligne" />
              <li>Michel Tacos</li>
              <hr className="ligne" />
              <li>Michel Tacos</li>
              <hr className="ligne" />
              <li>Michel Tacos</li>
              <hr className="ligne" />
              <li>Michel Tacos</li>
            </ul>
            <button className="btn-start">Lancer la partie</button>
          </div>
        </div>
        <div className="rules">
          <div className="container-link">
            <h2>Lien de la partie:</h2>
          </div>
          <div className="rules-list">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameStart;
