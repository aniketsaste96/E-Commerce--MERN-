const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error");

//built in middleware function
//It parses incoming JSON requests and puts the parsed data in req. body.
app.use(express.json());
app.use(cookieParser());





//route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");





//carefull about /
app.use("/api/v1", product);
app.use("/api/v1", user);


//Middleware for error
app.use(errorMiddleware)
module.exports = app;