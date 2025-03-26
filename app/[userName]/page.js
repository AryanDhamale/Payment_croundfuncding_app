import Profile from "@/components/Profile";
import connetDb from "@/db/connectDb";
import user from "@/modales/user";
import { notFound } from "next/navigation";

const Page=async ({params})=>{
  const {userName}=await params;
  await connetDb(); 
  let u=await user.findOne({username:userName});
  if(!u)
  {
    return  notFound();
  }
    return (
      <Profile userName={userName}/>
    );
}

export default Page;