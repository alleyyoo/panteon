import { PlayerList } from '../../models/Player.types';

export interface PlayerState {
  loading: boolean;
  data: PlayerList | null;
  error: string;
}
