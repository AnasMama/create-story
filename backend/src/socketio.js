const express = require("express");
const socketIo = require("socket.io");
const http = require("http");

const port = parseInt(process.env.SOCKETIO_PORT ?? "5001", 10);
const app = express();
const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

server.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Socket.io server running on port ${port}`);
});

module.exports = io;
