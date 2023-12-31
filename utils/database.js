import mongoose  from "mongoose";

let isConnected = false; // track the connection

export const connnectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected) {
        console.log('MongoDB is alreadey connected')
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true
        console.log('MongoDB connected')
    } catch  (error) {
        console.log(error)
    }
}
