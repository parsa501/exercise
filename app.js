import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import morgan from "morgan";
import uploadRouter from "./Routes/Upload.js";
import userRouter from "./Routes/User.js";
import isAdmin from "./Middleware/IsAdmin.js";
import { catchError, HandleERROR } from "vanta-api";
import authRouter from "./Routes/Auth.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./Utils/Swagger.js";
import exportValidation from "./Middleware/ExportValidation.js";
import categoryRouter from "./Routes/Category.js";
import exerciseRouter from "./Routes/Exercise.js";
import workoutRouter from "./Routes/Workout.js";
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static("Public"));
app.use("/api/auth", authRouter);
app.use(exportValidation);

app.use("/api/uploads", isAdmin, uploadRouter);
app.use("/api/users", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/exercise", exerciseRouter);
app.use("/api/workout", workoutRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use((req, res, next) => {
  return next(new HandleERROR("Not Found", 404));
});
app.use(catchError);
export default app;
