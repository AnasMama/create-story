/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useEffect, useState } from "react";
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
      <h2>Game: {url}</h2>
      <h3>Owner: {game.owner_nickname}</h3>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.nickname}</li>
        ))}
      </ul>
    </div>
  ) : (
    ""
  );
}

export default GameView;
