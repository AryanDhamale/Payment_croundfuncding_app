import Profile from "@/components/Profile";
import connetDb from "@/db/connectDb";
import user from "@/modales/user";
import { notFound } from "next/navigation";
import Loader from "@/components/loader/Loader";

const Page=async ({params})=>{
  const {userName}=await params;
  <Loader flag={true}/>
  await connetDb(); 
  <Loader flag={false}/>
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