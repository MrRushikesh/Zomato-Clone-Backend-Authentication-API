import express from 'express';
import User from '../model/model.js';
import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';


const router = express.Router();


// http://localhost:8500/api/auth/register
router.post('/register', (req,res) => {
    const {username, email, phone, password} = req.body;

    //condition 1 : All fileds are requiered. 
    if(!username || !email || !phone || !password){
        return res.send({message : "All fileds are required..."});
    }

    //condition 2 : Check email is registered or not
    User.findOne({email : email})
    .then((foundUser) => {
        if(foundUser){
            return res.send({messaage : "User is already registered..."})
        }else{
            //Hash password 
            bcrypt.hash(password, 12)
            .then((hashPassword) => {

                const newUser = new User({
                    username : username,
                    email : email,
                    phone : phone,
                    password : hashPassword //hash passwod store in database
                })
        
                newUser.save()
                .then((response) => {
                    //Genrating token 
                    const token = uuidv4();
                    console.log(token);
                    response.token = token;
                    response.save()
                    .then((updatedResponse) => {
                        res.send({message : "User Registered Successfully...",updatedResponse})
                    })
                    .catch((err) => {
                        console.log("Error While Updating the user...")
                    })

                })
                .catch((err) => {
                    console.log("Error While Registering User...",err)
                })
              
            })
            .catch((err) => {
                console.log("Error While Hashing Password...",err);
            })
        }
            
    })
    .catch((err) => {
        console.log("Error While Finding User",err)
    })
})


// http://localhost:8500/login
router.post('/login', async(req,res) => {
    const {email, password} = req.body;

    //condition 1 : all fileds are required
    if(!email || !password){
        return res.send({message : "Please Fill all the fields"})
    }

    try{
        const response = await User.findOne({email: email})

        if(!response){
            return res.send({message : "Email is not registered..."})
        }else{
            const matchResult = await bcrypt.compare(password, response.password);
            if(matchResult){
                const token = uuidv4();
                console.log(token);
                response.token = token;
                const updatedResponse = await response.save()
                res.cookie('token',token);
                return res.send({message : "User Login Successfully..."})
            }else{
                return res.send({message : "Invalid Password..."})
            }
        }

    }catch(err){
        console.log(err)
    }

})


// http://localhost:8500/api/auth/profile
router.get('/profile', async(req, res) => {
    const token = req.cookies.token
    if(token){
        res.send({message : "Welcome to profile page"})
    }else{
        res.send({message : "User is not logged in"})
    }
})


// http://localhost:8500/api/auth/logout
router.get('/logout', async(req,res) => {
    res.clearCookie('token');
    res.send({message : "User Logged Out Successfully..."})
})



export default router;