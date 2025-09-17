import express from "express";
import isLogin from "../Middleware/IsLogin.js";
import {
  create,
  getAll,
  getById,
  update,
  remove,
  scheduleWorkout,
  markAsCompleted,
} from "../Controllers/WorkoutCn.js";

const workoutRouter = express.Router();
workoutRouter.route("/")
  .get(isLogin, getAll)
  .post(isLogin, create);
workoutRouter.route("/:id")
  .get(isLogin, getById)
  .patch(isLogin, update)     
  .delete(isLogin, remove); 
workoutRouter.patch("/:id/schedule", isLogin, scheduleWorkout);
workoutRouter.patch("/:id/complete", isLogin, markAsCompleted);

export default workoutRouter;
