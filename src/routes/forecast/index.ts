import * as express from 'express';
const router = express.Router();

import { createHandler } from '../../handlers/common';
import { forecastHandler } from '../../handlers';

router.post('/forecast', createHandler(forecastHandler));

export default router;
