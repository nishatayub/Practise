const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async() =>{
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    }
    catch(err){
        console.error(err.message);
    }
}

module.exports = connectDB;