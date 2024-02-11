import mongoose from "mongoose";

const dbUrl = `mongodb+srv://test:test@cluster0.kibua9i.mongodb.net/zomato`;

mongoose.connect(dbUrl)
.then((res) => console.log("Database Connected Successfully..."))
.catch((err) => console.log("Error While Database Connecting..."))