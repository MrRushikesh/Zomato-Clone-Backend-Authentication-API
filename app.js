import './config/db.js';
import express from 'express';
import router from './routes/routes.js';
import cookie_parser from 'cookie-parser';


const port = 8500;
const app = express();
 

app.use(express.json());
app.use(cookie_parser());
app.use('/api/auth',router);



app.get('/',(req,res) => {
    res.send("<h1>Hello From Authentication API</h1>")
    res.end();
})


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})