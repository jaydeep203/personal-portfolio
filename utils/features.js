import mongoose from "mongoose";

export const connectDB = async() => {
    const {connection} = await mongoose.connect(process.env.MONGODB_URI, {
        dbName:"portfolio"
    }); 

    console.log(`The Connection is Established with - ${connection.host}`);
};