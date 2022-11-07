let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// Visitor Model
let visitorSchema = require("../models/visitor");
// CREATE Visitor
router.route("/create-visitor").post((req, res, next) => {
  visitorSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
// READ Visitors
router.route("/").get((req, res) => {
  visitorSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Get Single Visitor
router.route("/edit-visitor/:id").get((req, res) => {
  visitorSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Visitor
router.route("/update-visitor/:id").put((req, res, next) => {
  visitorSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Visitor updated successfully !");
      }
    }
  );
});
// Delete Visitor
router.route("/delete-visitor/:id").delete((req, res, next) => {
  visitorSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
module.exports = router;
