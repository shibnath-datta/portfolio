const express = require('express');
const router = require('./src/routes/api');
const app = new express();

const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');

const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require("path");
const multer = require("multer");

let DATABASE = "mongodb+srv://shibnath:shibnath123@cluster0.1qahp.mongodb.net/portfolio?retryWrites=true&w=majority"

mongoose.connect(DATABASE, { autoIndex: true }).then(() => {
    console.log("MongoDB connected");
}).catch(() => {
    console.log("MongoDB disconnected");
});


app.use(cookieParser());
app.use(cors({ credentials: true, origin: ["http://localhost:5173", ""] }))
app.use(helmet({ crossOriginResourcePolicy: false }))
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

// Middleware to parse JSON and URL-encoded data
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));


// Rate limiting
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 })
app.use(limiter)

// Disable ETag
app.set('etag', false);

//Use Router
app.use("/api/v1", router)

// Serve static files from the upload folder
app.use("/api/v1/upload", express.static(path.join(__dirname, "uploads")));
//app.use("/api/v1/upload-file", express.static("uploads"));

// Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ status: false, error: err.message });
})

// Serve Static Files
app.use(express.static('client/dist'));

// Add React Front End Routing
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
})


module.exports = app;