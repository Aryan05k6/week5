const express = require('express');
const app = express();
const PORT = process.env.PORT || 3010;

app.get('/', (req, res) => {
    res.send('Hello, Docker!');
});

app.listen(3010, '0.0.0.0', () => {
    console.log('Server is running on port 3010');
});
