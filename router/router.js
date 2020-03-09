const router = require("express").Router();

const users = require("./model");

router.post("/", (res, req) => {
  const userData = req.body;
  if (!userData.name || !userData.bio) {
    res
      .status(400)
      .json({ message: "Please provide name and bio for the user." });
  } else {
    users
      .insert(userData)
      .then(user => {
        res.status(201).json(userData);
      })
      .catch(error => {
        console.log("Error on POST User", error);
        res.status(500).json({ errorMessage: "error adding User" });
      });
  }
});
