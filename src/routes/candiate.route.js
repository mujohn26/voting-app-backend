import express from 'express';
import candidateController from '../controllers/candidate.controller';

const router = express.Router();

router.post('/', candidateController.signup);


export default router;
