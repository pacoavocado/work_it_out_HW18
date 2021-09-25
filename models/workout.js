const mongoose = require("mongoose");

const Workout = mongoose.Workout;

const newWorkOut = new Workout({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for Workout"
  },
  value: {
    type: Number,
    required: "Enter an amount"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", newWorkOut);

module.exports = Workout;
