const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error")

//built in middleware function
//It parses incoming JSON requests and puts the parsed data in req. body.
app.use(express.json())





//route imports
const product = require("./routes/productRoute");





//carefull about /
app.use("/api/v1", product);


//Middleware for error
app.use(errorMiddleware)
module.exports = app;