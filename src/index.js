import next from 'next';
import path from 'path';
import express from 'express';
// import VehicleRouter from './routers/VehicleRouter';
import mongoose from 'mongoose';
// import bodyParser from 'body-parser';

const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({
  dev,
  dir: path.resolve(__dirname)
});
const handle = nextApp.getRequestHandler();
const PORT = 3001;


// this promise must be global so mongoose can use it with DB and in here
mongoose.Promise = global.Promise;
// Mongoose and DB connection
// the localhost = PORT 27017 as the default because that's what mongoose is set to
mongoose.connect('mongodb://localhost/Next-CheckPoint2');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('mongoose and db are connected'
);
});

nextApp.prepare().then(() => {
  const app = express();

  // Define all you backend handlers here...
  // app.use(bodyParser.json());
  // app.use(VehicleRouter);
  // Handle everything that is not covered in above routes with next.js

  app.get('*', (request, response) => {
    return handle(request, response);
  });

  app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log('Server listening on port ' + PORT);
  });
});
