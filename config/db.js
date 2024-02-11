import mongoose from "mongoose";

// const dbUrl = `mongodb://127.0.0.1:27017/zomato`
const dbUrl = `mongodb+srv://rushikeshingale7447:nxuAikDE0tzaQ024@cluster0.dnwndyi.mongodb.net/zomato`;

mongoose.connect(dbUrl)
.then((res) => console.log("Database Connected Successfully..."))
.catch((err) => console.log("Error While Database Connecting..."))












// const dbConnection = async() => {
//     try{
//         let res = await mongoose.connect(dbUrl);
//         console.log("Database Connected Successfully...")
//     }catch(error){
//         console.log("Error While Database Connecting...")
//     }
// }

// export default dbConnection;