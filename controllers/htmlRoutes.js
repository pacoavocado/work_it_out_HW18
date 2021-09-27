const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require('path');

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
  return;
});

router.get("/stats", (req, res) => {
  console.log("hello");
  res.sendFile(path.join(__dirname, "../public/stats.html"));
  return;
});

module.exports = router;