import { Router } from 'express';
import Table from '../table.js';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

let blogs = new Table('blogs');

router.get('/blogs/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        blogs.getOne(id)
            .then(blog => {
                res.json(blog);
            });
    } else {
        blogs.getAll()
            .then(blogs => {
                res.json(blogs);
            });
    }
});

// router.use(tokenMiddleware);
// router.use(isLoggedIn);

router.post('/blogs', (req, res) => {
    blogs.insert(req.body)
        .then(id => {
            res.json(id);
        });
});

export default router;