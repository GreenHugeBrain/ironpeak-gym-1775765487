import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    pages: [
      { name: 'Home', path: '/' },
      { name: 'Programs', path: '/programs' },
      { name: 'Coaches', path: '/coaches' },
      { name: 'Booking', path: '/booking' },
      { name: 'Contact', path: '/contact' }
    ]
  });
});

export default router;