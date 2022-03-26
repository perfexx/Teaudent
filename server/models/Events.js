const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let eventsSchema = new Schema(
  {
    title: {
      type: String,
    },
    start: {
      type: String,
    },
    end: {
      type: String,
    },
  },
  {
    collection: "events",
  }
);
module.exports = mongoose.model("Events", eventsSchema);
