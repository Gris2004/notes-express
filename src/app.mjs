import express from 'express';
import connect from '../config/db.mjs';
import dotenv from 'dotenv/config';

//api
const app = express();

app.use(express.json());
app.set('json spaces', 2);

//host
const ip = process.env.API_IP || localhost;
const port = process.env.API_PORT || 8000;

//connect to mongodb
await connect();

//app listening
app.listen(port, ip, () => {
    console.log(`listening: \nip: ${ip} \nport:${port}`);
    console.log(`http://${ip}:${port}/`)
});
