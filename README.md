# Contentify Ghost Admin API Integration


This project provides a simple Express server that integrates with the Ghost Admin API to manage posts.
<br>
<br>

Table of Contents
-----------------

*   [Prerequisites](#prerequisites)
*   [Getting Started](#getting-started)
*   [Usage](#usage)
*   [Deployment](#deployment)
*   [Useful Links](#useful-links)
<br>


Prerequisites
-------------

*   [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
*   A running [Ghost](https://ghost.org/) instance.
*   Ghost Admin API key.

<br>

Getting Started
---------------

1.  **Clone the repository:**
    
    ```bash
    git clone https://github.com/your-repo-link.git cd your-repo-directory
    ```
    <br>


2.  **Install dependencies:**
    
    ```bash
    npm install
    ```
    <br>
    
3.  **Setting up the environment variables:**
    
    Create a `.env` file in the root directory of the project. Add the following content:
    
    ```env
    GHOST_URL=YOUR_GHOST_URL 
    GHOST_API_KEY=YOUR_GHOST_ADMIN_API_KEY
    API_KEY=CONTENTIFY_KEY

    ```
    <br>
    
    `GHOST_URL`: This is your URL<br>
    `GHOST_API_KEY`: Get Ghost Admin API from Settings > Integrations > Add Custom Integrations<br>
    `API_KEY`: Get this API Key from [Contentify](https://contentify.app/)<br>
    <br>
    
    
4.  **Start the server:**
    
    
    ```bash
    npm start
    ```
    
    The server will start on port 3000 by default. You can access it at `http://localhost:3000`.
    <br>
    <br>

    

Usage
-----
*   **Create a Post:**
    
    Send a `POST` request to `/admin/posts` with the post details.<br>
    <br>
    
*   **Update a Post:**
    
    Send a `POST` request to `/update-post` with the post details.<br>
    <br>
    
*   **Get a Specific Post:**
    
    Send a `GET` request to `/admin/posts/:id` where `:id` is the ID of the post you want to retrieve.<br>
    <br>
    
*   **Get All Posts:**
    
    Send a `GET` request to `/admin/posts/`.
    <br>
    <br>
    

Deployment
----------
1.  **Choose a hosting provider:** There are many providers like [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [AWS](https://aws.amazon.com/), etc. For beginners, Heroku is recommended due to its simplicity.
<br>
<br>

2.  **Follow the deployment guide:** Each hosting provider will have its own deployment guide. Here's a [guide for deploying Node.js apps on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs).
<br>
<br>
    
3.  **Set environment variables:** Once deployed, ensure you set the environment variables (`GHOST_URL`, `GHOST_API_KEY`, `API_KEY`) on your hosting provider's platform. 
<br>
<br>


Useful Links
------------

*   [Ghost Official Documentation](https://ghost.org/docs/)
*   [Ghost Admin API Documentation](https://ghost.org/docs/admin-api/)
*   [Express.js Documentation](https://expressjs.com/)
*   [Node.js Documentation](https://nodejs.org/docs/)
*   [Heroku Deployment Guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
<br>
<br>

* * *

Remember to replace placeholders like `your-repo-link` and `your-repo-directory` with appropriate values. Adjust the content as needed to fit the specifics of your project.# contentify-ghost-integration
