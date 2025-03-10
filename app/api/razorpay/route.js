"use server";
import { NextResponse } from "next/server";
import connetDb from "@/db/connectDb";
import payment from "@/modales/payment";
import user from "@/modales/user";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";

export async function POST(request){
   let body=await request.formData();
   body=Object.fromEntries(body);
   await connetDb();
   const p = await payment.findOne({oid:body.razorpay_order_id});
   if(!p)
   {
     return NextResponse.json({success:false,message:"paymen not found!"});
   }
   const u = await user.findOne({username:p.to_user});
   const secret=u.rayzorpaysecret;
   
   const xx=validatePaymentVerification({"order_id":p.oid,"payment_id":body.razorpay_payment_id}, body.razorpay_signature,secret);
   if(xx)
   {
    const updatePayment=await payment.findOneAndUpdate({oid:p.oid},{done:true},{new:true});
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_REDIRECT_URL}/${updatePayment.to_user}/?paymentDone=true`);
   }
   else {
     return NextResponse.json({success:false,message:"Payment varification faild"});
   }
}