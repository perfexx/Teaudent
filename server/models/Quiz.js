const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let quizSchema = new Schema(
  {
    questionText: {
      type: String,
    },
    answerOptions: [
      { answerText: { type: String }, isCorrect: { type: Boolean } },
      // { answerText: { type: String }, isCorrect: { type: Boolean } },
      // { answerText: { type: String }, isCorrect: { type: Boolean } },
      // { answerText: { type: String }, isCorrect: { type: Boolean } },
    ],
  },
  {
    collection: "quiz",
  }
);
module.exports = mongoose.model("Quiz", quizSchema);
