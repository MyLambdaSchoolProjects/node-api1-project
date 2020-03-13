require("dotenv").config();
const express = require("express"); 
const cors = require("cors");

const user_router = require('../router/users_router');

const server = express();

server.use(express.json());

server.use(cors());

server.use("/api/users", user_router);

server.get("/", (req, res) => {
    res.status(200).json({ api: "up", dbenv: process.env.DB_ENV });
});

module.exports = server;
