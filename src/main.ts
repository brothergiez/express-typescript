import { app } from './app';
import * as http from 'http';

const PORT = 3201;
const server = http.createServer(app);
server.listen(PORT);
server.on('listen', () => {
  console.log(`server run at http://localhost:${PORT}`);
})