import { useEffect, useState } from "react";
import Timer from "../components/Timer";
import "../style/Turn.css";

function FirstTurn() {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) {
      setTimer(30);
    }
  }, [timer]);

  const onSubmit = (data) => console.log(data);
  // POST nouvelle phrase
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
        <div className="profil-img">
          <img
            src="src/assets/output-onlinepngtools.png"
            alt="Profil 1"
            className="profil"
          />
        </div>
        <form className="send-reponse" onSubmit={onSubmit()}>
          <label htmlFor="answer">
            <h1 className="playersay">Brenda dit :</h1>
            <input
              className="input-reponse"
              type="text"
              name="answer"
              placeholder="Ecris ta réponse"
            />
          </label>
          <input className="btn-send" type="submit" />
          <Timer timer={timer} setTimer={setTimer} />
        </form>
      </div>
    </div>
  );
}

export default FirstTurn;
