import express from "express";
import {Login, Register} from "../controllers/AuthController.js";

const auth = express.Router();

auth.post('/login', Login);
auth.post('/register', Register);

export default auth;