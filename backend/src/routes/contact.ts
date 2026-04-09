import { Router, Request, Response } from 'express';

const router = Router();

router.post('/', (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // In a real application, you would send an email or save to DB here
  console.log(`New contact submission from ${name} (${email}): ${message}`);
  
  res.status(200).json({ success: true, message: 'Contact form submitted successfully' });
});

export default router;