import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

export const redis = createClient({
  url: process.env.REDIS_URL || 'redis://redis:6379',
});

export const connectRedis = async () => {
  try {
    await redis.connect();
    console.log('Redis connected');
  } catch (error) {
    console.error('Redis connection error:', error);
  }
};
