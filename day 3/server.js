const express = require('express');
const app = express();

app.get('/weather', (req, res) => {
    const weatherData = {
        temperature: 25,
        conditions: 'Sunny',
        city: 'Los Angeles'
    };
    res.json(weatherData);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});