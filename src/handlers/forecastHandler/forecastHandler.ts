import * as express from 'express';


const forecastHandler = async (req: express.Request, res: express.Response) => {
  const result = req.body;
  res.send(result);
}

export default forecastHandler;