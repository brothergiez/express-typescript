import * as express from 'express';

const requestLogger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.info(`${req.method} ${req.originalUrl}`);
  const start = new Date().getTime();
  res.on('finish', () => {
    const elapsed = new Date().getTime() - start;
    console.info(`${req.method} ${req.originalUrl} ${res.statusCode} - from IP : ${req.ip} - ${elapsed}ms 
      \n\r=====================================================================`
    );
  })
  next();
}

export default requestLogger;