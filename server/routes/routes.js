const express = require("express");
const projectSchema = require("../models/project");

const router = express.Router();

// Get all
router.get("/projects", async (req, res) => {
  res.send(
    // get projects
    await projectSchema
      .find((error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
        }
      })
      .clone()
      .catch(function (err) {
        console.log(err);
      })
  );
});

module.exports = router;
