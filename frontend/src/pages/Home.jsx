import "../style/home.css";

function Home() {
  return (
    <div className="home">
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
