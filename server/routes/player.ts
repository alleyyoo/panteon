import { Router } from 'express';
import { getPlayers } from '../controllers/player';

export const playerRoutes = Router();

playerRoutes.get('/', getPlayers);
