import * as express from 'express';
import { ResponseError } from '../../middleware';

import { forecastTransaction } from '../../schemas';

/**
 * validateSchema function
 * @param {object} req - request object
 * @param {object} res - result object
 * @param {function} next - next function
 * @returns {function} next function
 */
const validateSchema = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const { error } = forecastTransaction(req.body);
  if (error) {
    return next(new ResponseError(error.message, 'NOT_ACCEPTABLE', 400));
  }else{
    return next();
  }
};

export default validateSchema;
