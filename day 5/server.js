const express = require('express')
const app = express()
const db = require('./db');
const bodyParsor = require("body-parser")
app.use(bodyParsor.json())

// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

// Use the routers
app.use('/menu', menuRoutes);
app.use('/person', personRoutes);



app.listen(3000, () => {
    console.log("listening on port 3000")
})