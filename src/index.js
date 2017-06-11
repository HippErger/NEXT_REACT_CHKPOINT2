import next from 'next';
import path from 'path';
import express from 'express';
import VehicleRouter from './routers/VehicleRouter';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({
  dev,
  dir: path.resolve(__dirname)
});
const handle = nextApp.getRequestHandler();

const PORT = 3001;
const PATH_NAME = '/api';

nextApp.prepare().then(() => {
  const app = express();

  // Define all you backend handlers here...
  app.use(VehicleRouter);
  app.get(PATH_NAME + '/vehicles', (request, response) => {
    return response.json('got the vehicle we wanted!');
  });

  // Handle everything that is not covered in above routes with next.js
  app.get('*', (request, response) => {
    return handle(request, response);
  });

  app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log('Server listening on port ' + PORT);
  });
});
