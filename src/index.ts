import express from 'express';
import image from './routes/image';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Server start');
});

app.use('/image', image);

app.listen(port, () => {
  console.log(`server is running on localhost:${port}`);
});
