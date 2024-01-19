import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async() => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL NOT FOUND');
    if(isConnected) return console.log('already connected to mongodb');

    try {
        await mongoose.connect(process.env.MONGODB_URL);

        isConnected = true;

        console.log('Connected to mongodb')
    } catch(error) {
        console.log(error);
    }
}