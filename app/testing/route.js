"use server";
import { NextResponse } from "next/server";
import connetDb from "@/db/connectDb";
import { fetchUser } from "@/actions/userActions";

export async function GET()
{
   await connetDb();
   const res=await fetchUser("AryanDhamale");
   return NextResponse.json({message:"see in the console"});   
}

