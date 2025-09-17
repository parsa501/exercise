import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    muscleGroup: {
      type: String,
    },
  },
  { timestamps: true }
);
 const Exercise=mongoose.model("Exercise",ExerciseSchema)
 export default Exercise