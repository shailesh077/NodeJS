const mongoose = require("mongoose");
const mongoUrl = 'mongodb://localhost:27017/hotels'
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log("connected to MongoDB server")
})

db.on('error', (err) => {
    console.log(" MongoDB server error")
})
db.on('disconnectd', () => {
    console.log("disconected server MongoDB");
})


module.exports = db;