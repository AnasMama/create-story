/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useState } from "react";

function GameCreate({ url, setUrl }) {
  const [data, setData] = useState({
    nickname: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    axios.post(`http://localhost:5000/games/`, data).then((response) => {
      console.log("response", response);
      setUrl(response.data.url);
    });
  }

  return (
    <div className="new-game">
      {url ? (
        ""
      ) : (
        <form className="TestComponent" onSubmit={handleSubmit}>
          <label htmlFor="nickname">
            <span className="pseudo">Pseudo</span>
            <input
              type="text"
              name="nickname"
              id="nickname"
              value={data.nickname}
              onChange={handleChange}
            />
          </label>
          <br />
          <input
            type="submit"
            value="Créer une nouvelle partie"
            className="btn-newgame"
          />
        </form>
      )}
    </div>
  );
}

export default GameCreate;
