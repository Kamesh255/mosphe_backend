import express from "express";
import Connection from './config/db.js';
import dotenv from 'dotenv';
import cors from "cors";
import bodyParser from 'body-parser';
import router from './routes/routes.js';

const app = express();
dotenv.config();

app.use(cors()); 
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', router)



const USERNAME = process.env.USERNAME  || "kamesh";
const PASSWORD = process.env.PASSWORD || "kamesh098";

Connection(USERNAME,PASSWORD)

const port = process.env.port || 2345;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})