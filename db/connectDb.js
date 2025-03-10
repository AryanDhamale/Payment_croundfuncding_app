import mongoose from "mongoose";


const connetDb=async()=>{
   try {
    const con=await mongoose.connect(process.env.DATA_BASE_URL);
    return con;
   }catch(err){
     process.exit(1);
   }
}

export default connetDb;