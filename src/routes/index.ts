import express from 'express';
import image from './image';

const api = express.Router();

api.get('/', (req, res) => {
  res.send(
    'Welcome to Image Processing API. Please add /image?filename=""&width=""&height="" to path of url to resize an image ',
  );
});

api.use('/image', image);

export default api;
