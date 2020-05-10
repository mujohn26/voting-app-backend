import express from 'express';
import candidateRoute from './candiate.route';


const Router = express.Router();
Router.use('/add-candidate', candidateRoute);

export default Router;
