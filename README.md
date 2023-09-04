# Contentify Ghost Admin API Integration


This project provides a simple Express server that integrates with the Ghost Admin API to manage posts.

Table of Contents
-----------------

*   [Prerequisites](#prerequisites)
*   [Getting Started](#getting-started)
*   [Usage](#usage)
*   [Deployment](#deployment)
*   [Useful Links](#useful-links)

Prerequisites
-------------

*   [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
*   A running [Ghost](https://ghost.org/) instance.
*   Ghost Admin API key.

Getting Started
---------------

1.  **Clone the repository:**
    
    bashCopy code
    
    ```git clone https://github.com/your-repo-link.git cd your-repo-directory`
    
2.  **Install dependencies:**
    
    bashCopy code
    
    `npm install`
    
3.  **Setting up the environment variables:**
    
    Create a `.env` file in the root directory of the project. Add the following content:
    
    envCopy code
    
    `GHOST_URL=YOUR_GHOST_URL GHOST_API_KEY=YOUR_GHOST_ADMIN_API_KEY`
    
    Replace `YOUR_GHOST_URL` with your Ghost instance URL and `YOUR_GHOST_ADMIN_API_KEY` with your Ghost Admin API key.
    
4.  **Start the server:**
    
    bashCopy code
    
    `npm start`
    
    The server will start on port 3000 by default. You can access it at `http://localhost:3000`.
    

Usage
-----

*   **Create a Post:**
    
    Send a `POST` request to `/admin/posts` with the post details.
    
*   **Update a Post:**
    
    Send a `POST` request to `/update-post` with the post details.
    
*   **Get a Specific Post:**
    
    Send a `GET` request to `/admin/posts/:id` where `:id` is the ID of the post you want to retrieve.
    
*   **Get All Posts:**
    
    Send a `GET` request to `/admin/posts/`.
    

Deployment
----------

1.  **Choose a hosting provider:** There are many providers like [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [AWS](https://aws.amazon.com/), etc. For beginners, Heroku is recommended due to its simplicity.
    
2.  **Follow the deployment guide:** Each hosting provider will have its own deployment guide. Here's a [guide for deploying Node.js apps on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs).
    
3.  **Set environment variables:** Once deployed, ensure you set the environment variables (`GHOST_URL`, `GHOST_API_KEY`, `API_KEY`) on your hosting provider's platform. 

`GHOST_URL`: This is your URL
`GHOST_API_KEY`: Get Ghost Admin API from Settings > Integrations > Add Custom Integrations
`API_KEY`: Get this API Key from [Contentify](https://contentify.app/)
    

Useful Links
------------

*   [Ghost Official Documentation](https://ghost.org/docs/)
*   [Ghost Admin API Documentation](https://ghost.org/docs/admin-api/)
*   [Express.js Documentation](https://expressjs.com/)
*   [Node.js Documentation](https://nodejs.org/docs/)
*   [Heroku Deployment Guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

* * *

Remember to replace placeholders like `your-repo-link` and `your-repo-directory` with appropriate values. Adjust the content as needed to fit the specifics of your project.# contentify-ghost-integration
