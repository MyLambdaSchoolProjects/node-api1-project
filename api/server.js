require("dotenv").config();
const express = require("express");

const router = require('../router/router');
const server = express();
server.use(express.json());

server.use("/api/users", router);

server.get("/", (req, res) => {
    res.status(200).json({ api: "up", dbenv: process.env.DB_ENV });
});

module.exports = server;
