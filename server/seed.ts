import { faker } from '@faker-js/faker/locale/en';
import Progress from 'progress';
import { connectMongo } from './utils/mongo';
import { connectRedis, redis } from './utils/redis';
import Player from './models/player/player';

const PLAYER_COUNT = 10000000;
const BATCH_SIZE = 10000;

const seeder = async () => {
  await connectMongo();
  await connectRedis();

  console.log('Seeding started');

  const progress = new Progress('[:bar] :percent :etas', {
    total: PLAYER_COUNT,
    width: 30
  });

  for (let i = 0; i < PLAYER_COUNT; i += BATCH_SIZE) {
    const data = genereateData(BATCH_SIZE);

    await Player.insertMany(
      data.map(({ id, username, country }) => ({ id, username, country }))
    );

    for (const temp of data) {
      await redis.zAdd('scores', { score: temp.money, value: temp.id });
    }

    progress.tick(BATCH_SIZE);
  }

  console.log('Data generation complete!');
  process.exit();
};

const genereateData = (count: number) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    const id = faker.string.uuid();
    const username = faker.internet.userName();
    const rank = faker.number.int({ min: 1, max: 100 });
    const country = faker.location.country();
    const money = faker.number.int({ min: 100, max: 100000 });

    data.push({
      id,
      username,
      rank,
      country,
      money
    });
  }
  return data;
};

seeder().catch((error) => {
  console.error(error);
  process.exit(1);
});
