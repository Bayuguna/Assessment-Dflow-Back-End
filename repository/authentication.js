import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const AuthenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token) return res.status(401).json({message : 'Unauthorized Token'}); 

    if(process.env.ACCESS_TOKEN_SECRET == token){
        jwt.verify(token, process.env.ACCESS_SECRET_KEY, (err, user) => {
            if(err) return res.sendStatus(403);
    
            next()
        })
    }
}