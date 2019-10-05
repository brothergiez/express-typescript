import * as express from 'express';
const inquiryRouter = express.Router();

import { createHandler } from '../../handlers/common';
import { inquiryHandler } from '../../handlers';

inquiryRouter.get('/inquiry', createHandler(inquiryHandler));

export default inquiryRouter;
