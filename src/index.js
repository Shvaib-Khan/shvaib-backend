// require('dotenv').config({path: './env'})

import dotenv from 'dotenv'

// import mongoose from 'mongoose';
// import { DB_NAME } from './constants'; in dono ko comment kar diya kyuki is method me connection to bahar kar rhr hai bas yaha connection import kar rhe hai isliye aur ye wha import kiya hai

import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})

connectDB()
/*ye chal to jaega but mazaa nhi aa rha import hai aur require bhi hamari consistancy kharab kar rha hai to require wale ko comment karenge aur import karenge lekin inport karne ke baad config bhi karna padega nhi to nhi chalega*/



















/*This was our first approach*/
/*
import express from 'express';
const app=express();

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("errror",(error)=>{
            console.log("ERROR", error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.error(("ERROR", error))
        throw error
        
    }
})()

*/