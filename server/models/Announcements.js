const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let announcementsSchema = new Schema(
  {
    announceName: {
      type: String,
    },
    announceDesc: {
      type: String,
    },
  },
  {
    collection: "announcements",
  }
);
module.exports = mongoose.model("Announcements", announcementsSchema);
