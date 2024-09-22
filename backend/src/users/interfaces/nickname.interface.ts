export interface INickname extends Document {
  nickname: string;
  types: string[];
  coins: number;
  seasons: { season: string; year: number; coins: number }[];
}
