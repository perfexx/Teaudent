let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// Course Model
let announcementsSchema = require("../models/Announcements");
// CREATE Course
router.route("/create-announce").post((req, res, next) => {
  announcementsSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      // console.log(data);
      res.json(data);
    }
  });
});
// READ Courses
router.route("/").get((req, res) => {
  announcementsSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Get Single Course
router.route("/edit-announce/:id").get((req, res) => {
  announcementsSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update course
router.route("/update-announce/:id").put((req, res, next) => {
  announcementsSchema.findByIdAndUpdate(
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
        console.log("announcement updated successfully !");
      }
    }
  );
});
// Delete course
router.route("/delete-announce/:id").delete((req, res, next) => {
  announcementsSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
