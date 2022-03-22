let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// Topic Model
let topicsSchema = require("../models/Topics");
// CREATE Topic
router.route("/create-topic").post((req, res, next) => {
  topicsSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      // console.log(data);
      res.json(data);
    }
  });
});
// READ topics
router.route("/").get((req, res) => {
  topicsSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Get Single topic
router.route("/edit-topic/:id").get((req, res) => {
  topicsSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update topic
router.route("/update-topic/:id").put((req, res, next) => {
  topicsSchema.findByIdAndUpdate(
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
        console.log("topic updated successfully !");
      }
    }
  );
});
// Delete topic
router.route("/delete-topic/:id").delete((req, res, next) => {
  topicsSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
