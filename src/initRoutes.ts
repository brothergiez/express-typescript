import * as express from 'express';
import routers from './routes';

const initRoutes = (app: any) => {
  app.use(express.json());
  routers.forEach(el => app.use(el));
};

export { initRoutes };