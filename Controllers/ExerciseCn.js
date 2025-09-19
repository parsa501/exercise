import ApiFeatures, { catchAsync, HandleERROR } from "vanta-api";
import Exercise from "../Models/exerciseMd.js";

export const create = catchAsync(async (req, res, next) => {
  const exercise = await Exercise.create(req.body);
  return res.status(201).json({
    success: true,
    message: "Exercise created successfully",
    data: exercise,
  });
});

export const getAll = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Exercise, req?.query, req?.role)
    .filter()
    .sort()
    .limitFields()
    .paginate()
    .populate();
  const result = await features.execute();
  return res.status(200).json({
    success: true,
    message: "Exercises fetched successfully",
    data: result,
  });
});

export const getAllCategoryExercise = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Exercise, req?.query, req?.role)
    .addManualFilters({ categoryId: req.params.id })
    .filter()
    .sort()
    .limitFields()
    .paginate()
    .populate();
  const result = await features.execute();
  return res.status(200).json({
    success: true,
    message: "Exercises for category fetched successfully",
    data: result,
  });
});

export const update = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const exercise = await Exercise.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!exercise) {
    return next(new HandleERROR("Exercise not found", 404));
  }
  return res.status(200).json({
    success: true,
    message: "Exercise updated successfully",
    data: exercise,
  });
});

export const remove = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const exercise = await Exercise.findByIdAndDelete(id);
  if (!exercise) {
    return next(new HandleERROR("Exercise not found", 404));
  }
  return res.status(200).json({
    success: true,
    message: "Exercise deleted successfully",
  });
});
