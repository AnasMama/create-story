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
    <div>
      {url ? (
        ""
      ) : (
        <form className="TestComponent" onSubmit={handleSubmit}>
          <h2>Create a game:</h2>
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
          <input type="submit" value="Create" />
        </form>
      )}
    </div>
  );
}

export default GameCreate;
