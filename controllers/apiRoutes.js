const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", async ({ body }, res) => {
  try {
      const response = await Workout.create({body})
      res.json(response);
    }
    catch{(err => {
      res.status(400).json(err);
    });
}});

router.put("/api/workouts/:id", async ({ body }, res) => {
  const response = await Workout.find(body)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


module.exports = router;
