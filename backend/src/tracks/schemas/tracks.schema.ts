import * as mongoose from 'mongoose';
import { MEMBER_ROLE } from '@users/enums/types.enum';

export const TracksSchema = new mongoose.Schema({
  nickname: String,
  nameTitle: String,
  titleType: String,
  season: String,
  year: Number,
  note: String,
  currentEpisode: Number,
  typeRole: {
    type: String,
    enum: MEMBER_ROLE,
  },
  coins: Number,
  isFast: Boolean,
  isOngoing: Boolean,
  isPriority: Boolean,
  isInTime: Boolean,
  isGuest: Boolean,
});