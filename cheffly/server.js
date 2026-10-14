const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// 1. Serve your Frontend static files
app.use(express.static(path.join(__dirname, 'public')));

// 2. Create a Sample Backend API Route
app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello from the Cheffy Backend Server!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});