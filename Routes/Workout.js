/**
 * @swagger
 * tags:
 *   name: Workout
 *   description: Workout management endpoints
 */

/**
 * @swagger
 * /api/workout:
 *   post:
 *     summary: Create a new workout
 *     tags: [Workout]
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
 *               - userId
 *             properties:
 *               title:
 *                 type: string
 *                 example: Upper Body Strength
 *               userId:
 *                 type: string
 *                 example: 64f91e2a5c0a1e1234567890
 *               date:
 *                 type: string
 *                 format: date-time
 *                 example: 2025-09-17T12:00:00Z
 *               exercises:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     exerciseId:
 *                       type: string
 *                       example: 64f91e2a5c0a1e1234567890
 *                     sets:
 *                       type: integer
 *                       example: 3
 *                     reps:
 *                       type: integer
 *                       example: 12
 *                     weight:
 *                       type: number
 *                       example: 20
 *                     notes:
 *                       type: string
 *                       example: Focus on form
 *     responses:
 *       201:
 *         description: Workout created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workout'
 */

/**
 * @swagger
 * /api/workout:
 *   get:
 *     summary: Get all workouts
 *     tags: [Workout]
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
 *         description: Workouts fetched successfully
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
 *                   example: Workouts fetched successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Workout'
 */

/**
 * @swagger
 * /api/workout/{id}:
 *   get:
 *     summary: Get a workout by ID
 *     tags: [Workout]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 64f91e2a5c0a1e1234567890
 *     responses:
 *       200:
 *         description: Workout fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workout'
 *       404:
 *         description: Workout not found
 * 
 *   patch:
 *     summary: Update a workout by ID
 *     tags: [Workout]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 64f91e2a5c0a1e1234567890
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Upper Body Strength
 *               exercises:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     exerciseId:
 *                       type: string
 *                       example: 64f91e2a5c0a1e1234567890
 *                     sets:
 *                       type: integer
 *                       example: 3
 *                     reps:
 *                       type: integer
 *                       example: 12
 *                     weight:
 *                       type: number
 *                       example: 20
 *                     notes:
 *                       type: string
 *                       example: Focus on form
 *     responses:
 *       200:
 *         description: Workout updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workout'
 *       404:
 *         description: Workout not found
 * 
 *   delete:
 *     summary: Delete a workout by ID
 *     tags: [Workout]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 64f91e2a5c0a1e1234567890
 *     responses:
 *       200:
 *         description: Workout deleted successfully
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
 *                   example: Workout deleted successfully
 *       404:
 *         description: Workout not found
 */

/**
 * @swagger
 * /api/workout/schedule/{id}:
 *   patch:
 *     summary: Schedule a workout
 *     tags: [Workout]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 64f91e2a5c0a1e1234567890
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - date
 *             properties:
 *               date:
 *                 type: string
 *                 format: date-time
 *                 example: 2025-09-20T08:00:00Z
 *     responses:
 *       200:
 *         description: Workout scheduled successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workout'
 *       400:
 *         description: Date is required
 *       404:
 *         description: Workout not found
 */

/**
 * @swagger
 * /api/workout/complete/{id}:
 *   patch:
 *     summary: Mark a workout as completed
 *     tags: [Workout]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 64f91e2a5c0a1e1234567890
 *     responses:
 *       200:
 *         description: Workout marked as completed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workout'
 *       404:
 *         description: Workout not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Workout:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 64f91e2a5c0a1e1234567890
 *         userId:
 *           type: string
 *           example: 64f91e2a5c0a1e1234567890
 *         title:
 *           type: string
 *           example: Upper Body Strength
 *         date:
 *           type: string
 *           format: date-time
 *           example: 2025-09-17T12:34:56.789Z
 *         status:
 *           type: string
 *           example: pending
 *         exercises:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               exerciseId:
 *                 type: string
 *                 example: 64f91e2a5c0a1e1234567890
 *               sets:
 *                 type: integer
 *                 example: 3
 *               reps:
 *                 type: integer
 *                 example: 12
 *               weight:
 *                 type: number
 *                 example: 20
 *               notes:
 *                 type: string
 *                 example: Focus on form
 *         createdAt:
 *           type: string
 *           example: 2025-09-17T12:34:56.789Z
 *         updatedAt:
 *           type: string
 *           example: 2025-09-17T12:34:56.789Z
 */

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
workoutRouter.patch("/schedule/:id", isLogin, scheduleWorkout);
workoutRouter.patch("/complete/:id", isLogin, markAsCompleted);

export default workoutRouter;
