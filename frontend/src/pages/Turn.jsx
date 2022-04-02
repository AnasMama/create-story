import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Timer from "../components/Timer";
import "../style/Turn.css";

function Turn() {
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
  return (
    <div className="page">
      <div className="left-page">
        <img
          src="/src/assets/chopped-man.png"
          alt="Profil 1"
          className="profil"
        />
        <h1>Brenda dit :</h1>
        <p>phrase précédente</p>
      </div>
      <div className="right-page">
        <div className="profil-img">
          <img
            src="/src/assets/princess.jpeg"
            alt="Profil 1"
            className="profil"
          />
        </div>
        <form onSubmit={onSubmit}>
          <label htmlFor="answer">
            <h1>Jack dit :</h1>
            <input
              type="text"
              name="answer"
              value={contentForm}
              onChange={handleChange}
              placeholder="Ecris ta réponse"
            />
          </label>
          <input type="submit" />
        </form>
        <Timer timer={timer} setTimer={setTimer} />
        <Link to={`/turn/${id}`}>
          <span> Suivant</span>
        </Link>
      </div>
    </div>
  );
}

export default Turn;
