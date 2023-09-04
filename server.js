require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const GhostAdminAPI = require('@tryghost/admin-api');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const api = new GhostAdminAPI({
    url: process.env.GHOST_URL,
    key: process.env.GHOST_API_KEY,
    version: 'v4'
});

app.post('/admin/posts', async (req, res) => {
    try {
        const post = await api.posts.add({
            title: req.body.title,
            html: req.body.html,
            status: req.body.status || 'draft',
            feature_image: req.body.feature_image,
            cover_image: req.body.cover_image,
            meta_description: req.body.og_description,
            meta_title: req.body.og_title
        }, {
            source: 'html'
        });
        res.json(post);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

app.get('/admin/posts/:id', async (req, res) => {
    try {
        const postId = req.params.id;

        // Fetch the post using the Ghost Admin API
        const post = await api.posts.read({ id: postId });

        res.json(post);
    } catch (err) {
        if (err.response && err.response.status === 404) {
            res.status(404).json({ error: 'Post not found.' });
        } else {
            console.error(err);
            res.status(500).json(err);
        }
    }
});

app.get('/admin/posts/', async (req, res) => {
    try {
        // Fetch all posts using the Ghost Admin API
        const posts = await api.posts.browse();

        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


app.put('/admin/posts/:id', async (req, res) => {
    try {
        const postId = req.params.id;

        const updatedPost = await api.posts.edit({
            id: postId,
            title: req.body.title,
            html: req.body.html,
            status: req.body.status || 'draft',
            feature_image: req.body.feature_image,
            cover_image: req.body.cover_image,
            meta_description: req.body.og_description,
            meta_title: req.body.og_title,
            updated_at: req.body.updated_at
        }, {
            source: 'html'
        });

        res.json(updatedPost);
    } catch (err) {
        if (err.code === 'UPDATE_COLLISION') {
            res.status(409).json({ error: 'Update collision detected. The post has been edited by someone else.' });
        } else {
            console.error(err);
            res.status(500).json(err);
        }
    }
});




app.get('/site-info', async (req, res) => {
    try {
        const siteInfo = await api.site.read();
        res.json(siteInfo);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
