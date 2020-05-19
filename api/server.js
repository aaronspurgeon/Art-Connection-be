const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.get("/", (req, res, next) => {
  res.json({ message: "Hello Backend" });
});

server.use((err, req, res, next) => {
  console.log("Err:", err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

module.exports = server;
