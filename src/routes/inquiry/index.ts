import * as express from 'express';
const router = express.Router();

import { createHandler } from '../../handlers/common';
import { inquiryHandler } from '../../handlers';

router.get('/inquiry', createHandler(inquiryHandler));

export default router;
