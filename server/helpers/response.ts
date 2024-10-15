import { Response } from 'express';

export const successResponse = (
  response: Response,
  key: string,
  data: any,
  statusCode = 200
) => {
  return response.status(statusCode).json({
    success: true,
    [key]: data
  });
};

export const errorResponse = (response: Response, code: number, error: any) => {
  return response.status(code).json({
    success: false,
    message: error
  });
};
