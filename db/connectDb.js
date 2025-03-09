import mongoose from "mongoose";


const connetDb=async()=>{
   try {
    const con=await mongoose.connect(process.env.DATA_BASE_URL);
    console.log("connected to db,con.connection.host");
    return con;
   }catch(err){
     console.log("failed to connect to db",err);
     process.exit(1);
   }
}

export default connetDb;