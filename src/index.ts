import express from 'express';
import api from './routes';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Server start');
});

app.use('/api', api);

app.listen(port, () => {
  console.log(`server is running on localhost:${port}`);
});

export default app;
