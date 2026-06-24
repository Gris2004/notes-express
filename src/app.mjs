import express from 'express';
import 'dotenv/config';

//api
const app = express();

app.use(express.json());
app.set('json spaces', 2);

//host
const ip = process.env.API_IP || localhost;
const port = process.env.API_PORT || 8000;

//app listening
app.listen(port, ip, () => {
    console.log(`listening: \nip: ${ip} \nport:${port}`);
    console.log(`http://${ip}:${port}/`)
});
