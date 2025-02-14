// filepath: /my-nodejs-project/my-nodejs-project/src/index.js
import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the Font Awesome library
app.use('/fonts', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/css')));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/css/all.min.css">
            <title>My Node.js Project</title>
        </head>
        <body>
            <h1>Welcome to My Node.js Project</h1>
            <i class="fas fa-check-circle"></i> Font Awesome is integrated!
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});