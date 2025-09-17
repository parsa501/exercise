import express from "express";
import isAdmin from "../Middleware/IsAdmin.js";
import { getAll, update } from "../Controllers/UserCn.js";

const userRouter = express.Router();

userRouter.route("/").get(isAdmin, getAll)
userRouter.route("/:id").patch(isAdmin, update)

export default userRouter;
