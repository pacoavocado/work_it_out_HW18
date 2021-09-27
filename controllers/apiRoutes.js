const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/exercise", (req, res) => {
  res.sendFile(__dirname, "../public/exercise.html");
  return;
});

router.get("/stats", (req, res) => {
  res.redirect("/stats");
  return;
});




router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
  });
  
  router.post("/api/workouts", async ({ body }, res) => {
    try {
      const response = await Workout.create({body})
      res.json(response);
    }
    catch{(err => {
      console.log(err);
      res.status(400).json(err);
    });
  }});
  
  router.put("/api/workouts/:id", async ({ body }, res) => {
    const response = await Workout.find(body)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
  });


module.exports = router;
