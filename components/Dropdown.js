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
    const [image,setImage]=useState("https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b")
    useEffect(()=>{
        if(session)
        setImage(session.user.image);
    },[session]);
    return (
        <div>
             <div>
             <Image onClick={()=>setVisible(!visible)} onBlur={()=>setVisible(false)}  src={image} className="relative border-2 border-gray-800 rounded-full cursor-pointer" width={44} height={44} alt="this is image" />
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