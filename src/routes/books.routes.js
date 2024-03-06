import { Router } from 'express';
import { prisma } from '../db.js';

const router = Router();

router.get('/books', async (req, res) => {
  const books = await prisma.book.findMany({
    include: {
      publisher: true,
    },
  });
  res.json(books);
});

router.get('/books/:id', async (req, res) => {
  const bookFound = await prisma.book.findFirst({
    where: {
      id: +req.params.id,
    },
    include: {
      publisher: true,
    },
  });

  if (!bookFound) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.json(bookFound);
});

router.post('/books', async (req, res) => {
  const book = await prisma.book.create({
    data: req.body,
  });
  res.json(book);
});

router.delete('/books/:id', async (req, res) => {
  const bookDeleted = await prisma.book.delete({
    where: {
      id: +req.params.id,
    },
  });

  if (!bookDeleted) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.json(bookDeleted);
});

router.put('/books/:id', async (req, res) => {
  const bookUpdated = await prisma.book.update({
    where: {
      id: +req.params.id,
    },
    data: req.body,
  });

  res.json(bookUpdated);
});

export default router;
