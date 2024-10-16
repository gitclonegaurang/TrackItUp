// Importing the express module
const express = require('express');
const app = express();

// Defining the port
const PORT = 3000;

// Basic route that sends a response
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
