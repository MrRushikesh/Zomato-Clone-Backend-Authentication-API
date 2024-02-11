import mongoose from "mongoose";

const dbUrl = `mongodb://127.0.0.1:27017/zomato`;

mongoose.connect(dbUrl)
.then((res) => console.log("Database Connected Successfully..."))
.catch((err) => console.log("Error While Database Connecting..."))