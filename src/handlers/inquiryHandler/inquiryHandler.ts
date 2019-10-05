import * as express from 'express';


const inquiryHandler = async (req: express.Request, res: express.Response) => {
  const result = {
    message: 'Success'
  };
  res.send(result);
}

export default inquiryHandler;