import { Router } from 'express';

const router = Router();

router.get('/notes', (req, res) => {
    res.json({message: "prueba"});
});

export default router;
