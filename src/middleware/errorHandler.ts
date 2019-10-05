import * as express from 'express';

class MyError extends Error {
  constructor(public message: string, public code: string, public statusCode: number) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.code = code;
    this.statusCode = statusCode;
    this.message = message;
  }
};

const ForbiddenError = class extends MyError {
  constructor() {
    super('Site access denied.', 'Forbidden', 403);
  }
};

const InvalidTokenError = class extends MyError {
  constructor() {
    super('Specified token is invalid.', 'InvalidToken', 401);
  }
};

const ResponseError = class ResponseError extends Error {
  constructor(public message: string, public code: string, public statusCode: number) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.code = code;
    this.statusCode = statusCode;
    this.message = message;
  }
};

class HttpException extends Error {
  message: string;
  statusCode: number;
  code: string;
  constructor(message: string, code: string, statusCode: number) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.code = code;
  }
}

const errorHandler = (err: HttpException, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const { statusCode, message, code} = err;
  const info = {
    method: req.method,
    path: req.originalUrl,
    statusCode : statusCode || 500,
    message,
    code: code || 'INTERNAL_SERVER_ERROR'
  }
  console.info(info);
  res.status(statusCode || 500).send({
    statusCode: statusCode || 500,
    code: code || 'INTERNAL_SERVER_ERROR',
    message
  });
};

export {
  errorHandler,
  ForbiddenError,
  InvalidTokenError,
  ResponseError
}