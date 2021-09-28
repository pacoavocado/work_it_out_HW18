const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])

    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .limit(7)

    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post("/workouts", async ({ body }, res) => {
  try {
    const response = await Workout.create({ body });
    res.json(response);
  } catch {
    (err) => {
      console.log(err);
      res.status(400).json(err);
    };
  }
});

router.put("/workouts/:id", async ({ body }, res) => {
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
