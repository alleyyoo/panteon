import * as mongoose from 'mongoose';
import { IPlayer } from './player.types';

const { Schema } = mongoose;

const playerSchema = new Schema<Omit<IPlayer, 'money' | 'rank'>>(
  {
    id: { type: String, required: true },
    username: { type: String, required: true },
    country: { type: String, required: true }
  },
  { _id: false }
);

playerSchema.index({ id: 1 }, { unique: true });

const Player = mongoose.model<Omit<IPlayer, 'money' | 'rank'>>(
  'Player',
  playerSchema
);

export default Player;
