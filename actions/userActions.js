"use server";
import Razorpay from "razorpay";
import connetDb from "@/db/connectDb";
import Payment from "@/modales/payment.js";
import user from "@/modales/user";

export const initiate = async (amount, to_username, paymentForm) => {
    await connetDb();
    const u=await user.findOne({username:to_username});
    var instance = new Razorpay({ key_id: u.razorpayId, key_secret: u.rayzorpaysecret });
    var options = {
        amount: amount * 100,  // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    let x = await instance.orders.create(options);
    await Payment.create({ name: paymentForm.name, oid: x.id, amount: amount, to_user: to_username, message: paymentForm.message });
    return x;
}

export const fetchUser = async (username) => {
    await connetDb()
    let u = await user.findOne({ username });
    u = u.toObject({ flattenObjectIds: true });
    return u;
}

export const fetchpayments = async (username) => {
    await connetDb();
    let payments = await Payment.find({ to_user: username, done: true }).limit(8).lean();
    payments = payments.map((ele,idx)=>({
        name : ele.name , 
        oid : ele.oid,
        done : true,
        message : ele.message , 
        to_user : ele.to_user , 
        amount : ele.amount
    }))
    return payments;
}

export const updateUserprofile = async (data, oldUsername) => {
    await connetDb();
    let newData = Object.fromEntries(data);
    if (newData.name !== oldUsername) {
      let u = await user.findOne({username:newData.name});
      if(u) {
        return {message:"userName alrady exit!",stauts:false};
      }
      // update user here // 
      await Payment.updateMany({to_user:oldUsername},newData);
    }
    // update also here //
    await user.updateOne({email:newData.email},newData);
    return {message:"profile has been updated!",stauts:true}
}


export const getUserforSearch=async()=>{
  await connetDb(); 
  let arrofu= await user.find({
    rayzorpaysecret : {$exists : true },
    rayzorpayId : {$exists : true}
  }).lean();
  arrofu=arrofu.map((ele,idx)=>ele.username);
 return arrofu;
}