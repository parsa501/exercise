import express from "express";
import isAdmin from "../Middleware/IsAdmin.js";
import isLogin from "../Middleware/IsLogin.js";
import { create, getAll, remove, update } from "../Controllers/CategoryCn.js";

const categoryRouter = express.Router();

categoryRouter.route("/").get(isLogin, getAll).post(isLogin, create);
categoryRouter.route("/:id").delete(isAdmin, remove);

export default categoryRouter;
