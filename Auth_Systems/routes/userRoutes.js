
import express from 'express';
import * as UsersController from '../controllers/userControllers.js';
import { authHandler } from '../middleware/authHandler.js';


const usersRoutes = express.Router();

// Public routes (no token required)
usersRoutes.post('/register', UsersController.registerUser);
usersRoutes.post('/login', UsersController.loginUser);

// Example protected route usage (apply authHandler per-route):
// usersRoutes.get('/profile', authHandler, UsersController.getProfile);

export default usersRoutes;