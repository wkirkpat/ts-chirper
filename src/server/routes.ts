import * as express from 'express';
import chirpsRouter from "./chirps"

const router = express.Router();

router.use("/chirps", chirpsRouter);

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

export default router;