import mongoose, { Document } from 'mongoose';

export interface IAnime extends Document {
  name: string;
  link: string;
  posterUrl: string;
  isOngoing: boolean;
  votes: mongoose.Types.Array<mongoose.Schema.Types.ObjectId>;

  getTotalVotes(): number;
}
