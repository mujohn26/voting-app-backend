import express from 'express';
import candidateRoute from './candidate.route';
import voteRoute from './vote.route';


const Router = express.Router();
Router.use('/candidate', candidateRoute);
Router.use('/vote', voteRoute);

export default Router;
