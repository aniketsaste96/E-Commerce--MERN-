const app = require('./app');
const dotenv = require("dotenv");
const connectdataBase = require("./config/database.js")
const cloudinary = require("cloudinary")
//handling uncaught exception
//must be at top
process.on("uncaughtException", (err) => {
    console.log(`Error :${err.message}`);
    console.log(`shutting down the server due to uncaughtException Error`);
    process.exit(1);
})

//config
dotenv.config({ path: "backend/config/config.env" });

//connecting to db
connectdataBase();

//cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})



//SERVER LISTENING 
const server = app.listen(process.env.PORT, (req, res) => {
    console.log(`server running on http://localhost:${process.env.PORT}`);
})

//unhandled promiss rejection

process.on("unhandledRejection", err => {
    console.log(`Error:${err.message}`);
    console.log(`shutting down the server due to Unhandled Promiss Rejection`);

    server.close(() => {
        process.exit(1);
    })
})

