import { Router } from 'express';
import { playerRoutes } from './player';

export const routes = Router();

routes.use('/players', playerRoutes);
