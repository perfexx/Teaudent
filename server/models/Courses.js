const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let coursesSchema = new Schema(
  {
    courseName: {
      type: String,
    },
    courseDesc: {
      type: String,
    },
    participants: {
      type: String,
    },
    creator: {
      type: String,
    },
    material: {
      type: String,
    },
  },
  {
    collection: "courses",
  }
);
module.exports = mongoose.model("Courses", coursesSchema);
