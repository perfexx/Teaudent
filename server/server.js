let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let dbConfig = require("./database/db");
// Express Route
const studentRoute = require("../server/routes/student.route");
const coursesRoute = require("../server/routes/courses.route");
const topicsRoute = require("../server/routes/topics.route");
const eventsRoute = require("../server/routes/events.route");
const quizRoute = require("../server/routes/quiz.route");
const announcementsRoute = require("../server/routes/announcements.route");

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database sucessfully connected!");
    },
    (error) => {
      console.log("Could not connect to database : " + error);
    }
  );
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/students", studentRoute);
app.use("/courses", coursesRoute);
app.use("/topics", topicsRoute);
app.use("/events", eventsRoute);
app.use("/quiz", quizRoute);
app.use("/announcements", announcementsRoute);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});
// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
