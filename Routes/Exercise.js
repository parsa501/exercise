import express from "express";
import isAdmin from "../Middleware/IsAdmin.js";
import isLogin from "../Middleware/IsLogin.js";
import {
  create,
  getAll,
  remove,
  update,
  getAllCategoryExercise,
} from "../Controllers/ExerciseCn.js";

const exerciseRouter = express.Router();

exerciseRouter.route("/").get(isLogin, getAll).post(isLogin, create);
exerciseRouter.route("/:id").patch(isAdmin, update).delete(isAdmin, remove);
exerciseRouter.route("/category/:id").get(isLogin, getAllCategoryExercise);

export default exerciseRouter;
