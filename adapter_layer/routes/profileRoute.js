import * as ProfileController from '../controllers/profileController.js';
import express from 'express';

const profileRoutes = express.Router();

profileRoutes.get('/', ProfileController.listAll);
profileRoutes.get('/:id', ProfileController.getProfile);
profileRoutes.post('/', ProfileController.create);

export default profileRoutes;