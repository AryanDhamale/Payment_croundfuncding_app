"use client";

import Link from "next/link";
import { IoSettings } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { MdDashboard } from "react-icons/md";
import Image from "next/image";

function Dropdown()
{
    const {data:session}=useSession();
    const [visible,setVisible]=useState(false);
    const colors = ["bg-rose-500", "bg-blue-500", "bg-emerald-500", "bg-yellow-500"];
    const bgColor= Math.floor(Math.random()*colors.length);

    return (
        <div>
             <div className="size-10 relative rounded-full" onClick={()=>setVisible(!visible)} onBlur={()=>setVisible(false)}>
             {
               session.user.image ?  <Image src={session.user.image} className="border-2 border-gray-800 rounded-full cursor-pointer w-full h-full" width={44} height={44} alt="this is image" />  : <div className={`w-full h-full text-white ${bgColor} rounded-full flex justify-center items-center text-lg`}>{session.user.name[0]}</div>
             }
             </div>
            {visible && <div className="fixed border-2 border-gray-700 w-[10rem] rounded-sm right-8 top-18 py-2" >
              <Link href={`/${session.user.name}`} className="hover:bg-gray-900 flex justify-start items-center gap-x-3 px-3 py-2" ><FaUser/>Profile</Link>
              {/* <Link href={'/'} className="hover:bg-gray-900 flex justify-start items-center gap-x-3 px-3 py-2" ><IoSettings/>Setting</Link> */}
              <Link href={'/dashbord'} className="hover:bg-gray-900 flex justify-start items-center gap-x-3 px-3 py-2" ><MdDashboard/>Dashbord</Link>
              <Link href={'/'} onClick={()=>signOut()} className="hover:bg-gray-900 flex justify-start items-center gap-x-3 px-3 py-2" ><IoLogOut/>Signout</Link>
            </div>}
        </div>
    );
}

export default Dropdown;