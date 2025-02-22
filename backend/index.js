const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const connectDB = require("./db/db");
const UserModel = require("./models/userModel");
const userController = require("./controllers/userController");
const app = express();
const Port = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());

app.listen(Port, ()=>{
    try{
        connectDB();
        console.log(`server is listening on port ${Port}`);
    }
    catch(err){
        console.error(err.message);
    }
});