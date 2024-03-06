import express from 'express';

import booksRoute from './routes/publishers.routes.js';
import publishersRoute from './routes/books.routes.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', booksRoute);
app.use('/api', publishersRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
