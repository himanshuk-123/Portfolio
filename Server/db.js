import mongoose from 'mongoose'

const ConnectDB = async()=>{
    try{
        const uri = process.env.MONGO_URI;
        await mongoose.connect(uri);
        console.log('MongoDB connected'.cyan.underline);
    }
    catch(error){
        console.error(`Error: ${error.message}`.red.underline.bold);
    }
}

export default ConnectDB;