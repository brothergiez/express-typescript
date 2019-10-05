import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';
import { requestLogger, errorHandler } from './middleware';
import { initRoutes } from './initRoutes';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyparser.json());

// logger middleware
app.use(requestLogger);
// Load All Routes
initRoutes(app);
// Error Handler
app.use(errorHandler);

export { app };