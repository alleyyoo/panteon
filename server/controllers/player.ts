import { Request, Response } from 'express';
import { errorResponse, successResponse } from '../helpers/response';
import { getAllPlayersById } from '../services/player';

export const getPlayers = async (request: Request, response: Response) => {
  const id: string = request.query.id as string;
  try {
    successResponse(response, 'players', await getAllPlayersById(id));
  } catch (error) {
    errorResponse(response, 500, 'Failed to get players');
  }
};
