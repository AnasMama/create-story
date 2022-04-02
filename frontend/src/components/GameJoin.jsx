/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useState } from "react";

function GameJoin({ url, setUrl }) {
  const [data, setData] = useState({
    url: "",
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
    const { url: code, nickname } = data;
    axios
      .post(`http://localhost:5000/games/${code}/${nickname}`)
      .then((response) => {
        console.log(response);
        setUrl(code);
      });
  }

  return (
    <div className="rejoin-game">
      {url ? (
        ""
      ) : (
        <form className="TestComponent" onSubmit={handleSubmit}>
          <h2>Rejoindre une partie</h2>
          <label htmlFor="url">
            <input
              type="text"
              name="url"
              id="url"
              placeholder="Pseudo"
              value={data.url}
              onChange={handleChange}
            />
          </label>
          <br />
          <label htmlFor="nickname">
            <span className="pseudo">Pseudo</span>
            <input
              type="text"
              name="nickname"
              id="nickname"
              placeholder="Lien"
              value={data.nickname}
              onChange={handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Rejoindre partie" />
        </form>
      )}
    </div>
  );
}

export default GameJoin;
