import "../style/Turn.css";

function FirstTurn() {
  const onSubmit = (data) => console.log(data);
  return (
    <div className="page">
      <div className="left-page">
        <h1>gameTitle</h1>
        <p>Un jour Brenda et Jack eurent une serieuse discution...</p>
      </div>
      <div className="right-page">
        <div className="profil-img">
          <img src="src/assets/Unknown.png" alt="Profil 1" className="profil" />
          <img src="src/assets/Unknown.png" alt="Profil 1" className="profil" />
        </div>
        <form onSubmit={onSubmit()}>
          <label htmlFor="answer">
            <h1>Brenda dit :</h1>
            <input type="text" name="answer" placeholder="Ecris ta réponse" />
          </label>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default FirstTurn;
