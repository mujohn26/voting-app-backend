import express from 'express';
import voteController from '../controllers/vote.controller';

const router = express.Router();

router.post('/', voteController.createVote);


export default router;
