import { Router } from 'express';
import transactionRouter from './transaction.routes';

const routes = Router();

routes.use('/transactions', transactionRouter);
routes.use('/users', user);
export default routes;
