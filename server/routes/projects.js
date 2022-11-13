const express = require("express");
const router = express.Router();

const projectSchema = require("../models/project");

// create project
router.route("/create-project").post((req, res, next) => {
  projectSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// get project
// router.route("/").get((req, res) => {
//   projectSchema.find((error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

router.get("/projects", async (req, res, next) => {
  try {
    const projects = await projectSchema.find();

    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

module.exports = router;
