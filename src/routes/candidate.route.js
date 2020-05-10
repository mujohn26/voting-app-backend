import express from 'express';
import candidateController from '../controllers/candidate.controller';

const router = express.Router();

router.post('/', candidateController.signup);
router.get('/', candidateController.getCandidates);


export default router;
