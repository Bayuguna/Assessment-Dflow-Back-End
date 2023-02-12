import express from "express";
import cors from "cors";
import user from "./routes/user.js";
import auth from "./routes/auth.js";
import dotenv from "dotenv";
import { AuthenticateToken } from "./repository/authentication.js";
import products from "./routes/product.js";
import carts from "./routes/cart.js";
import index from "./routes/index.js";
import transaction from "./routes/transaction.js";
import 'express-group-routes';
import db from "./repository/db_connection.js";
import bodyParser from "body-parser";
import websocket from "./repository/websocket.js";

dotenv.config();

const app = express();

const port = process.env.HTTP_PORT;

db(process.env.DB_CONNECTION);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());
app.use(express.json());
// app.all('/api/*', AuthenticateToken)
app.use('/', index)

app.group('/api', (router) => {
    router.group('/v1', (v1) =>{
        v1.use(AuthenticateToken);
        v1.use('/user', user);
        v1.use('/product', products);
        v1.use('/cart', carts);
        v1.use('/transaction', transaction);
    })

    router.use('/auth', auth);
})

websocket(app)


app.listen(port, ()=>{
    console.log(`listening at http://localhost:${port}`)
})