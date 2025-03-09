"use client";
import { SiThunderbird } from "react-icons/si";
import { useSession, signIn, signOut } from "next-auth/react";
import Dropdown from "./Dropdown";
import Link from "next/link";
import { AiFillAppstore } from "react-icons/ai";
import Sidenav from "./Sidenav";
import { useState } from "react";

function Navbar()
{
    const {data:session}=useSession();
    const [visible,setvisible]=useState(false);
    return (
        <>
        {visible && <Sidenav handler={setvisible}/>}
        <div className="text-white flex justify-between items-center h-16 px-6">
            <div className="flex justify-center items-center gap-x-3">
                <SiThunderbird className="text-lg"/>
                <span className="italic text-base font-medium">BlackBird</span>
            </div>
            <div>
                <ul className="hidden sm:flex justify-center items-center gap-x-6">
                    <Link href='/' className="cursor-pointer">Home</Link>
                    <Link href='/about' className="cursor-pointer">About</Link>
                    <Link href='/' className="cursor-pointer">Project</Link>
                    {!session && <Link href='/login' className="cursor-pointer">
                    <button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center">SignUp</button>
                    </Link>}
                  {session && <Dropdown/>}
                </ul>
            </div>
            <div className="block sm:hidden">
             <AiFillAppstore onClick={()=>setvisible(true)} className="text-3xl"/>
            </div>
        </div>
        </>
    );
}

export default Navbar;