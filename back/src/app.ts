import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import { PORT, DATABASE_URL } from './config';
import { router } from './api';

mongoose.connect(`${DATABASE_URL}`)
.catch(err => {
  console.warn(err.message);
})
.then(() => {
  const app = express();
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(router);

  const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });	
});