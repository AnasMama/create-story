/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";

function GameView({ url }) {
  const [game, setGame] = useState(null);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (url) {
      const socket = io(import.meta.env.VITE_SOCKETIO_URL);

      socket.on(`game-${url}`, (data) => setPlayers(data.players));

      axios.get(`http://localhost:5000/games/${url}`).then((response) => {
        setGame(response.data);
        setPlayers(response.data.players);
      });
    }
  }, [url]);

  return url && game ? (
    <div>
      <h2>Lien de la partie: {url}</h2>
      <h1>Participants</h1>
      <h3>Créateur : {game.owner_nickname}</h3>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.nickname}</li>
        ))}
      </ul>
      <Link to="first-turn">
        <input type="button" value="Lancer" />
      </Link>
    </div>
  ) : (
    ""
  );
}

export default GameView;
