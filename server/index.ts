import express from 'express';
import cors from 'cors';
import { connectMongo } from './utils/mongo';
import { connectRedis } from './utils/redis';
import { routes } from './routes';

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', routes);

connectMongo().then(async () => {
  await connectRedis();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
