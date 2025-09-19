import ApiFeatures, { catchAsync, HandleERROR } from "vanta-api";
import Category from "../Models/CategoryMd.js";

export const create = catchAsync(async (req, res, next) => {
  const category = await Category.create(req.body);
  return res.status(201).json({
    success: true,
    message: "Category created successfully",
    data: category,
  });
});

export const getAll = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Category, req?.query, req?.role)
    .filter()
    .sort()
    .limitFields()
    .paginate()
    .populate();
  const result = await features.execute();
  return res.status(200).json({
    success: true,
    message: "Categories fetched successfully",
    data: result,
  });
});

export const remove = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const category = await Category.findByIdAndDelete(id);
  if (!category) {
    return next(new HandleERROR("Category not found", 404));
  }
  return res.status(200).json({
    success: true,
    message: "Category deleted successfully",
  });
});
