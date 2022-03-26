let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// Events Model
let eventsSchema = require("../models/Events");
// CREATE event
router.route("/create-event").post((req, res, next) => {
  eventsSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      // console.log(data);
      res.json(data);
      console.log("event created successfully !");
    }
  });
});
// READ events
router.route("/").get((req, res) => {
  eventsSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Get Single event
router.route("/edit-event/:id").get((req, res) => {
  eventsSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update event
router.route("/update-event/:id").put((req, res, next) => {
  eventsSchema.findByIdAndUpdate(
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
        console.log("event updated successfully !");
      }
    }
  );
});
// Delete event
router.route("/delete-event/:id").delete((req, res, next) => {
  eventsSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
