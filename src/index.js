import express from 'express';

import booksRoute from './routes/publishers.routes.js';
import publisherRoute from './routes/books.routes.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', booksRoute);
app.use('/api', publisherRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
