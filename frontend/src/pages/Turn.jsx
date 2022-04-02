import "../style/Turn.css";

function Turn() {
  const onSubmit = (data) => console.log(data);
  return (
    <div className="page">
      <div className="left-page">
        <img src="src/assets/output-onlinepngtools.png" alt="Profil 1" className="profil" />
        <h1>Brenda dit :</h1>
        <p>phrase précédente</p>
      </div>
      <div className="right-page">
        <div className="profil-img">
          <img src="src/assets/Unknown.png" alt="Profil 1" className="profil" />
        </div>
        <form onSubmit={onSubmit()}>
          <label htmlFor="answer">
            <h1>Jack dit :</h1>
            <input type="text" name="answer" placeholder="Ecris ta réponse" />
          </label>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Turn;
