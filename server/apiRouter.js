import Express from 'express';

const router = Express.Router();

router.get('/books', function (req, res) {
    res.send('hello world')
});

export default router;
