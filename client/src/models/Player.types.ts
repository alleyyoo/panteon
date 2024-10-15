export interface PlayerList {
  players: PlayerTypes[];
  otherPlayers: PlayerTypes[];
}

export interface PlayerTypes {
  id: string;
  username: string;
  country: string;
  rank: number;
  score: number;
}
