import mongoose from "mongoose"

export const connectionDB = async() => {
    return await mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected 🤞  '.green)) 
    .catch(err => console.log("Connection Fail  💩   ".red,err))
}