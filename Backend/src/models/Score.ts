import mongoose from 'mongoose';

export interface IScore extends mongoose.Document {
  player: string;
  score: number;
  date: Date;
}

const scoreSchema = new mongoose.Schema({
  player: { type: String, required: true },
  score: { type: Number, required: true },
   date: { type: Date, default: Date.now }
 
});

export default mongoose.model<IScore>('Score', scoreSchema);
