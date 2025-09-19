import ApiFeatures, { catchAsync, HandleERROR } from "vanta-api";
import Workout from "../Models/WorkoutMd.js";

export const create = catchAsync(async (req, res, next) => {
  const workout = await Workout.create(req.body);
  return res.status(201).json({
    success: true,
    message: "Workout created successfully",
    data: workout,
  });
});

export const getAll = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Workout, req?.query, req?.role)
    .filter()
    .sort()
    .limitFields()
    .paginate()
    .populate();
  const result = await features.execute();
  return res.status(200).json({
    success: true,
    message: "Workouts fetched successfully",
    data: result,
  });
});

export const getById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const workout = await Workout.findById(id).populate("exercises.exerciseId");
  if (!workout) {
    return next(new HandleERROR("Workout not found", 404));
  }
  return res.status(200).json({
    success: true,
    message: "Workout fetched successfully",
    data: workout,
  });
});

export const update = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const workout = await Workout.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!workout) {
    return next(new HandleERROR("Workout not found", 404));
  }
  return res.status(200).json({
    success: true,
    message: "Workout updated successfully",
    data: workout,
  });
});

export const remove = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const workout = await Workout.findByIdAndDelete(id);
  if (!workout) {
    return next(new HandleERROR("Workout not found", 404));
  }
  return res.status(200).json({
    success: true,
    message: "Workout deleted successfully",
  });
});

export const scheduleWorkout = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { date } = req.body;

  if (!date) {
    return next(new HandleERROR("Date is required", 400));
  }
  const workout = await Workout.findById(id);
  if (!workout) {
    return next(new HandleERROR("Workout not found", 404));
  }
  workout.date = new Date(date);
  await workout.save();
  return res.status(200).json({
    success: true,
    message: "Workout scheduled successfully",
    data: workout,
  });
});

export const markAsCompleted = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const workout = await Workout.findById(id);
  if (!workout) {
    return next(new HandleERROR("Workout not found", 404));
  }
  if (workout.status === "completed") {
    return res.status(200).json({
      success: true,
      message: "Workout is already marked as completed",
      data: workout,
    });
  }
  workout.status = "completed";
  workout.completedAt = new Date(); 
  await workout.save();
  return res.status(200).json({
    success: true,
    message: "Workout marked as completed",
    data: workout,
  });
});