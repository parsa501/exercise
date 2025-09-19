/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management endpoints
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users (admin only)
 *     tags: [User]
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
 *         description: Users fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *       403:
 *         description: Unauthorized (not admin)
 */

/**
 * @swagger
 * /api/users/{id}:
 *   patch:
 *     summary: Update a user (admin or owner)
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 64f91e2a5c0a1e1234567890
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: new_username
 *               password:
 *                 type: string
 *                 example: NewPassword123
 *               role:
 *                 type: string
 *                 example: user
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       403:
 *         description: Unauthorized to update this user
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 64f91e2a5c0a1e1234567890
 *         username:
 *           type: string
 *           example: john_doe
 *         password:
 *           type: string
 *           example: hashed_password_here
 *         role:
 *           type: string
 *           example: user
 *         createdAt:
 *           type: string
 *           example: 2025-09-17T12:34:56.789Z
 *         updatedAt:
 *           type: string
 *           example: 2025-09-17T12:34:56.789Z
 */

import express from "express";
import isAdmin from "../Middleware/IsAdmin.js";
import { getAll, update } from "../Controllers/UserCn.js";

const userRouter = express.Router();

userRouter.route("/").get(isAdmin, getAll)
userRouter.route("/:id").patch(isAdmin, update)

export default userRouter;
