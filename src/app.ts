import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';
import { requestLogger } from './middleware/requestLogger';
import { initRoutes } from './initRoutes';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyparser.json());

//logger middleware
app.use(requestLogger);
initRoutes(app);

export { app };