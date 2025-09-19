/**
 * @swagger
 * tags:
 *   name: Exercise
 *   description: Exercise management endpoints
 */

/**
 * @swagger
 * /api/exercise:
 *   post:
 *     summary: Create a new exercise
 *     tags: [Exercise]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - categoryId
 *             properties:
 *               title:
 *                 type: string
 *                 example: Push Up
 *               description:
 *                 type: string
 *                 example: Upper body strength exercise
 *               categoryId:
 *                 type: string
 *                 example: 64f91e2a5c0a1e1234567890
 *               muscleGroup:
 *                 type: string
 *                 example: Chest
 *     responses:
 *       201:
 *         description: Exercise created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Exercise created successfully
 *                 data:
 *                   $ref: '#/components/schemas/Exercise'
 *       400:
 *         description: Validation error
 * 
 *   get:
 *     summary: Get all exercises
 *     tags: [Exercise]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *     responses:
 *       200:
 *         description: Exercises fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Exercises fetched successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Exercise'
 */

/**
 * @swagger
 * /api/exercise/{id}:
 *   patch:
 *     summary: Update an exercise by ID
 *     tags: [Exercise]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 64f91e2a5c0a1e1234567890
 *         description: Exercise ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Push Up
 *               description:
 *                 type: string
 *                 example: Upper body strength exercise
 *               categoryId:
 *                 type: string
 *                 example: 64f91e2a5c0a1e1234567890
 *               muscleGroup:
 *                 type: string
 *                 example: Chest
 *     responses:
 *       200:
 *         description: Exercise updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Exercise updated successfully
 *                 data:
 *                   $ref: '#/components/schemas/Exercise'
 *       404:
 *         description: Exercise not found
 * 
 *   delete:
 *     summary: Delete an exercise by ID
 *     tags: [Exercise]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 64f91e2a5c0a1e1234567890
 *         description: Exercise ID
 *     responses:
 *       200:
 *         description: Exercise deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Exercise deleted successfully
 *       404:
 *         description: Exercise not found
 */

/**
 * @swagger
 * /api/exercise/category/{id}:
 *   get:
 *     summary: Get all exercises for a specific category
 *     tags: [Exercise]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 64f91e2a5c0a1e1234567890
 *         description: Category ID
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *     responses:
 *       200:
 *         description: Exercises for category fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Exercises for category fetched successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Exercise'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Exercise:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 64f91e2a5c0a1e1234567890
 *         title:
 *           type: string
 *           example: Push Up
 *         description:
 *           type: string
 *           example: Upper body strength exercise
 *         categoryId:
 *           type: string
 *           example: 64f91e2a5c0a1e1234567890
 *         muscleGroup:
 *           type: string
 *           example: Chest
 *         createdAt:
 *           type: string
 *           example: 2025-09-17T12:34:56.789Z
 *         updatedAt:
 *           type: string
 *           example: 2025-09-17T12:34:56.789Z
 */
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
