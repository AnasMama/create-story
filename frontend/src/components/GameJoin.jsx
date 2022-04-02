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
    <div>
      {url ? (
        ""
      ) : (
        <form className="TestComponent" onSubmit={handleSubmit}>
          <h2>Join a game:</h2>
          <label htmlFor="url">
            <span>Url: </span>
            <input
              type="text"
              name="url"
              id="url"
              value={data.url}
              onChange={handleChange}
            />
          </label>
          <br />
          <label htmlFor="nickname">
            <span>Nickname: </span>
            <input
              type="text"
              name="nickname"
              id="nickname"
              value={data.nickname}
              onChange={handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Join" />
        </form>
      )}
    </div>
  );
}

export default GameJoin;
