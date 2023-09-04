require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const GhostAdminAPI = require('@tryghost/admin-api');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const api = new GhostAdminAPI({
    url: process.env.GHOST_URL || 'http://localhost:2368',
    key: process.env.GHOST_API_KEY,
    version: 'v4'
});

// Middleware to check the API key
function checkApiKey(req, res, next) {
    const apiKey = req.header('X-API-KEY');
    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(403).json({ error: 'Invalid API key' });
    }
    next();
}

// Apply the middleware to your routes
app.get('/admin/posts/', checkApiKey, async (req, res) => {
    try {
        const posts = await api.posts.browse();
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

app.get('/admin/posts/:id', checkApiKey, async (req, res) => {
    try {
        const post = await api.posts.read({ id: req.params.id });
        res.json(post);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

app.post('/admin/posts', checkApiKey, async (req, res) => {
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

app.put('/admin/posts/:id', checkApiKey, async (req, res) => {
    try {
        const updatedPost = await api.posts.edit({
            id: req.params.id,
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
        res.json(updatedPost);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
