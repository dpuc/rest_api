const mongoose = require('mongoose');
const db = mongoose.connection;

require('dotenv').config({path: 'env'});

const conectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_HOST,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        db.on("error", console.error.bind(console, "connection error: "));
        db.once("open", function () {
            console.log("Connected successfully");
        });

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = conectDb