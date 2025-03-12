import { Schema, model , models } from "mongoose";

const userScheme=new Schema({
    name : { type : String},
    email : {type : String , required : true},
    username : {type : String, required : true},
    profilePic : {type : String},
    coverPic : {type : String},
    rayzorpayId: {type:String},
    rayzorpaysecret:{type:String},
    created_At : {type : Date, default : Date.now},
    updated_At : {type : Date ,default : Date.now},
});


export default models.User || model("User",userScheme); /// class 