import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Timer from "../components/Timer";
import "../style/Turn.css";

function FirstTurn() {
  const [timer, setTimer] = useState(30);
  const [contentForm, setContentForm] = useState("");

  const params = useParams();
  const { id } = params;

  const handleChange = (event) => {
    console.log(event.target.value);
    setContentForm(event.target.value);
  };

  useEffect(() => {
    if (timer === 0) {
      setTimer(30);
    }
  }, [timer]);

  const onSubmit = () => {
    const newSentence = { content: contentForm, game_id: id };

    axios
      .post(`http://localhost:5000/sentences`, newSentence)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
            src="/src/assets/princess.jpeg"
            alt="Profil 1"
            className="profil"
          />
        </div>
        <form className="send-reponse" onSubmit={onSubmit}>
          <label htmlFor="content">
            <h1 className="playersay">Brenda dit :</h1>
            <input
              className="input-reponse"
              type="text"
              name="content"
              value={contentForm}
              onChange={handleChange}
              placeholder="Ecris ta réponse"
            />
          </label>
          <input className="btn-send" type="submit" />
          <Timer timer={timer} setTimer={setTimer} />
        </form>
        <Link to={`/turn/${id}`}>
          <span> Suivant</span>
        </Link>
      </div>
    </div>
  );
}

export default FirstTurn;
