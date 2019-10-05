import * as express from 'express';

const createHandler = (handler: any) => {
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let error;
    try {
      await handler(req, res);
    } catch (err) {
      error = err;
      return res.status(err.statusCode).send({
        code: error.code,
        statusCode: err.statusCode,
        message: err.message,
        error: error.error
      });
    }
    return next(error);
  };
};

export { createHandler };
