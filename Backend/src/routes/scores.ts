import { Router } from 'express';
import Score from '../models/Score';

const router = Router();


router.get('/', async (_, res) => {
  const scores = await Score.find().sort({ score: -1 }).limit(10);
  res.json(scores);
});


router.post('/', async (req, res) => {
  const { player, score } = req.body;
  const newScore = new Score({ player, score });
  await newScore.save();
  res.status(201).json(newScore);
});

export default router;
