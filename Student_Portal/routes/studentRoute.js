import * as StudentController from '../controllers/studentController.js';
import express from 'express';

const studentRoutes = express.Router();

// Get a specific student profile
studentRoutes.get('/:id', StudentController.getProfile);

// Get all student profiles
studentRoutes.get('/', StudentController.listAllProfiles);

// POST /api/student (New)
studentRoutes.post('/new', StudentController.createProfile);

export default studentRoutes;