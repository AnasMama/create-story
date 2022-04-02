const express = require("express");
const path = require("path");

const cors = require("cors");

// let's create express app

const app = express();

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

const io = require("./socketio");

io.on("connection", (socket) => {
  console.log("client connected: ", socket.id);

  socket.join(`wuat`);

  socket.on("disconnect", (reason) => {
    console.log(reason);
  });
});

app.use((req, res, next) => {
  req.io = io;
  next();
});

// load router
const router = require("./router");

app.use(router);

// ready to export
module.exports = app;
