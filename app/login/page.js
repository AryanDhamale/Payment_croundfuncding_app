"use client";
import { FaGoogle } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react"


function Login()
{
    const {data:session}=useSession();
    const router = useRouter();
    useEffect(()=>{
        if(session){
            router.push('/dashbord');
        }
    },[session,router]);
    return (
        <div className="text-white h-[75vh] flex justify-center items-center">
            <div className="border border-gray-700 w-[95%] md:w-[40%] lg:w-[30%]  flex flex-col justify-center items-center gap-y-4 px-4 py-16 rounded-sm">
                <div className="bg-white text-black cursor-pointer active:bg-emerald-50 rounded-sm flex justify-center items-center gap-x-2 w-[80%] mx-auto py-3"> 
                <FaGoogle className="text-2xl"/>
                <span>Login with google</span>
                </div>
                <div  onClick={()=>signIn("github")} className="bg-slate-800 cursor-pointer rounded-sm flex justify-center items-center gap-x-2 w-[80%] mx-auto py-3"> 
                <IoLogoGithub className="text-2xl"/>
                <span>Login with GitHub</span>
                </div>
                <div className="bg-blue-300 text-black cursor-pointer  rounded-sm flex justify-center items-center gap-x-2 w-[80%] mx-auto py-3"> 
                <FaLinkedin className="text-2xl"/>
                <span>Login with Linkedin</span>
                </div>
            </div>
        </div>
    );
}

export default Login;