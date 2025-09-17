import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
    exercises: [
      {
        exerciseId: {
             type: mongoose.Schema.Types.ObjectId,
             ref: "Exercise"
             },
        sets: { type: Number },
        reps: { type: Number },
        weight: { type: Number },
        notes: { type: String },
      },
    ],
  },
  { timestamps: true }
);
const Workout=mongoose.model("Workout",WorkoutSchema)
export default Workout