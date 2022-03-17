let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// Course Model
let coursesSchema = require("../models/Courses");
// CREATE Course
router.route("/create-course").post((req, res, next) => {
  coursesSchema.create(req.body, (error, data) => {
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
  coursesSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Get Single Course
router.route("/edit-course/:id").get((req, res) => {
  coursesSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update course
router.route("/update-course/:id").put((req, res, next) => {
  coursesSchema.findByIdAndUpdate(
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
        console.log("course updated successfully !");
      }
    }
  );
});
// Delete course
router.route("/delete-course/:id").delete((req, res, next) => {
  coursesSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
