import * as express from 'express';
const forecastRouter = express.Router();

import { createHandler } from '../../handlers/common';
import { forecastHandler } from '../../handlers';
import validateSchema from './validationSchema';

forecastRouter.post(
  '/forecast',
  validateSchema,
  createHandler(forecastHandler)
);

export default forecastRouter;
