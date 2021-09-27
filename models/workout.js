const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newWorkOutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      routine: {
        type: String,
        trim: true,
        required: "Enter an exercise routine",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter an exercise name",
      },
      duration: {
        type: Number,
        required: "Enter exercise duration (min)",
      },
      weight: {
        type: Number,
        required: "Enter amount of weight",
      },
      reps: {
        type: Number,
        required: "Enter number of reps",
      },
      sets: {
        type: Number,
        required: "Enter number of sets",
      },
      distance: {
        type: Number,
        required: "Enter distance traveled",
      },
    },
  ],
});

const Workout = mongoose.model("Workout", newWorkOutSchema);

module.exports = Workout;
