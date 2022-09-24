const express = require('express');
const router = require("./routes")


const app = express();
app.use(router)
const port = 3200

module.exports = app