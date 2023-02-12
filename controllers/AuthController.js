
import dotenv from 'dotenv';
import User from "../models/User.js";
import jwt from "jsonwebtoken";

dotenv.config();

export const Login = async (req, res) => {
    User.findOne({username: req.body.username}, (err, user) => {
        if(user === null ){
            return res.status(404).json({message : "User not found"})
        }else{
            // return res.json(user.salt)
            if(user.validPassword(req.body.password)){
               
                const username = { username : req.body.username};
                const accessToken = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET);

                const newUser = {
                    username: user.username,
                    email: user.email,
                    accessToken: accessToken
                }
    
                res.status(200).json({data:newUser, message: "User Loged in"});
            }else{
                return res.status(400).json({message : "Password wrong"});
            }
        }
    })
}

export const Register = async (req, res) => {
    const users = new User();
    users.name = req.body.name;
    users.username = req.body.username;
    users.email = req.body.email;
    users.phone = req.body.phone;
    users.date_birth = req.body.date_birth;
    users.password = req.body.password;
    users.setPassword(req.body.password);

    try{
        const checkUser = await User.findOne({email: req.body.email})

        // return res.status(200).json(checkUser);

        if(checkUser === null){
            const saveUser = await users.save();
            return res.status(200).json(saveUser);
        }else{
            return res.status(200).json({
                message: "User already exist"
            });
        }
    }catch(error){
        res.status(400).json({message: error.message})
    }
}