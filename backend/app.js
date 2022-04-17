const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const errorMiddleware = require("./middleware/error");

//built in middleware function
//It parses incoming JSON requests and puts the parsed data in req. body.
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());





//route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");





//carefull about /
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);


//Middleware for error
app.use(errorMiddleware)
module.exports = app;