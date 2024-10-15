import { redis } from '../utils/redis';
import { redis2Array } from '../helpers/redis';
import Player from '../models/player/player';

export const getAllPlayersById = async (id: string) => {
  console.log('asdasd')
  try {
    const topPlayers: any[] = redis2Array(
      await redis.sendCommand(['ZREVRANGE', 'scores', '0', '99', 'WITHSCORES'])
    );
    const playerIds = topPlayers.map((player) => player.id);
    const players = await Player.find({ id: { $in: playerIds } });
    if (!id) {
      return {
        players: players.map((player, key) => {
          const playerData = topPlayers.find((p) => p.id === player.id);
          return {
            rank: key + 1,
            id: player.id,
            score: playerData.score,
            username: player.username,
            country: player.country
          };
        }),
        otherPlayers: []
      };
    }

    const currentPlayerRank = (await redis.zRevRank('scores', id)) || 0;

    if (currentPlayerRank && currentPlayerRank > 99) {
      const otherPlayers: any[] = redis2Array(
        await redis.sendCommand([
          'ZREVRANGE',
          'scores',
          (currentPlayerRank + 3).toString(),
          (currentPlayerRank - 2).toString(),
          'WITHSCORES'
        ])
      );
      const otherPlayerIds = otherPlayers.map((player) => player.id);
      const otherPlayersData = await Player.find({
        id: { $in: otherPlayerIds }
      });

      return {
        players: players.map((player, key) => {
          const playerData = topPlayers.find((p) => p.id === player.id);
          return {
            rank: key + 1,
            id: player.id,
            score: playerData.score,
            username: player.username,
            country: player.country
          };
        }),
        otherPlayers: otherPlayersData.map((player, key) => {
          const playerData = otherPlayers.find((p) => p.id === player.id);
          return {
            rank: currentPlayerRank - 2 + key + 1,
            id: player.id,
            score: playerData.score,
            username: player.username,
            country: player.country
          };
        })
      };
    } else {
      return {
        players: players.map((player, key) => {
          const playerData = topPlayers.find((p) => p.id === player.id);
          return {
            rank: key + 1,
            id: player.id,
            score: playerData.score,
            username: player.username,
            country: player.country
          };
        }),
        otherPlayers: []
      };
    }
  } catch (error) {
    console.log(error);
  }
};
