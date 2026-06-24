import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path'; 

//get dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//config dotenv
dotenv.config({
    path: resolve(__dirname, '../.env/')
});

console.log(resolve(__dirname, '../env/'));

//config variables
const mongoURI = process.env.DB_HOST;

// function connect
async function connect(){
    mongoose.connect(mongoURI)
        .then(() => {
            console.log("connected to MongoDB");
            console.log(mongoURI);
        }).catch(err => {
            console.error("Error message: ", err);
        });
}

export default connect;
