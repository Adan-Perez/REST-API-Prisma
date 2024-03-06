import { Router } from 'express';
import { prisma } from '../db.js';

const router = Router();

router.get('/publishers', async (req, res) => {
  const publishers = await prisma.publisher.findMany({
    include: {
      books: true,
    },
  });
  res.json(publishers);
});

export default router;
