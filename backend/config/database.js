const mongoose = require("mongoose");




const connectdataBase = () => {
    mongoose.connect(process.env.DB_URI).then((data) => {
        console.log(`MongoDb connected at server: ${data.connection.host}`)
    })
}

module.exports = connectdataBase;