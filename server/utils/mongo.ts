import * as mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectMongo = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI || 'mongodb://mongo:27017/panteon')
      .then(() => {
        console.log('Mongo connected');
      });
  } catch (error) {
    console.error('Mongo connection error:', error);
  }
};
