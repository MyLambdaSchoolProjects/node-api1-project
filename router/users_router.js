const router = require("express").Router();

const users = require("./model");

//POST Creates a user using the information sent inside the `request body`
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

//GET Returns an array of all the user objects contained in the database.
router.get("/", (res, req) => {
  users
    .find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      console.log("error on GET Users", error);
      res
        .status(500)
        .json({ errorMessage: "getting list of users from database" });
    });
});

//GET Returns the user object with the specified `id`
router.get("/:id", (res, req) => {
  const id = req.params.id;
  users
    .findById(id)
    .then(users => {
      if (id) {
        res.status(201).json(users);
      } else {
        res.status(404).json({ message: "user not found" });
      }
    })
    .catch(error => {
      console.log("error on GET Users", error);
      res
        .status(500)
        .json({ errorMessage: "getting list of users from database" });
    });
});

//DELETE Removes the user with the specified `id` and returns the deleted user
router.delete("/:id", (res, req) => {
  const id = req.params.id;
  users
    .remove(id)
    .then(removed => {
      if (removed) {
        res.status(201).json({ message: "User removed", removed });
      } else {
        res.status(404).json({ message: "User with specified id not found" });
      }
    })
    .catch(error => {
      console.log("Error on DELETE /api/users/:id", error);
      res.status(500).json({ message: "User Cannot be removed" });
    });
});

//PUT Updates the user with the specified `id` using data from the `request body`
router.patch("/:id", (res, req) => {
  const id = req.params.id;
  const userData = req.body;

  if (!userData.name || !userData.bio) {
    res
      .status(400)
      .json({ message: "Please provide name and bio for the user." });
  } else {
    db.update(id, userData)
      .then(user => {
        if (user) {
          res.status(200).json({ success: true, user });
        } else {
          res
            .status(404)
            .json({ message: `User with id ${id} does not exist` });
        }
      })
      .catch(error => {
        res
          .status(500)
          .json({ message: "User information cannot be modified" });
      });
  }
});
module.exports = router;