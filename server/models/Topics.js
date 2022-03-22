const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let topicsSchema = new Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    createdby: {
      type: String,
    },
    replies: {
      type: Number,
    },
    views: {
      type: Number,
    },
    lastpost: {
      type: String,
    },
  },
  {
    collection: "topics",
  }
);
module.exports = mongoose.model("Topics", topicsSchema);
