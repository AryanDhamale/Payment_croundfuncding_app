"use client";
import { IoIosCloseCircle } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { GoProjectSymlink } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";
import Image from "next/image";

function Sidenav({ handler }) {
  const { data: session } = useSession();
  const default_image_url="https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b";
  return (
    <div className="fixed w-[100%] pt-4 h-[100vh] bg-zinc-900 z-10 text-white">
      <div className=" h-14 flex items-center justify-between px-5">
      {!session && <div className="flex items-center gap-x-3">
          <Image width={100} height={100} className="size-10 rounded-full" src={default_image_url} alt="this is an image" />
          <span>Unknown user</span>
        </div>}
        {session && <div className="flex items-center gap-x-3">
          <Image width={100} height={100} className="size-10 rounded-full" src={session.user.image || default_image_url} alt="this is an image" />
          <span>Welcome {session.user.name}</span>
        </div>}
        <IoIosCloseCircle onClick={() => handler(false)} className="text-white text-2xl" />
      </div>
      <div className=" text-white mt-3">
        <ul className="flex flex-col gap-y-4">
          <li onClick={() => handler(false)} className="active:bg-gray-800  px-4 py-4"><Link href={"/"} className="flex items-center gap-x-3"><MdHome className="text-xl" /> Home</Link></li>
          <li onClick={() => handler(false)} className="active:bg-gray-800  px-4 py-4"><Link href={"/about"} className="flex items-center gap-x-3"><FcAbout className="text-xl" />About</Link></li>
          <li onClick={() => handler(false)} className="active:bg-gray-800  px-4 py-4"><Link href={"/"} className="flex items-center gap-x-3"><GoProjectSymlink className="text-xl" />My Projects</Link></li>
          {session && <li onClick={() => handler(false)} className="active:bg-gray-800  px-4 py-4"><Link href={`/${session.user.name}`} className="flex items-center gap-x-3"><Image width={100} height={100} className="size-6 rounded-full" src="/user.webp" alt="this is an image" />Profile</Link></li>}
          {session && <li onClick={() => handler(false)} className="active:bg-gray-800  px-4 py-4"><Link href={"/dashbord"} className="flex items-center gap-x-3"><MdDashboard className="text-xl" />Dashbord</Link></li>}
          {session && <li onClick={() => { handler(false); signOut("github") }} className="active:bg-gray-800  px-4 py-4"><Link href={"/"} className="flex items-center gap-x-3"><IoLogOut className="text-xl" />Sign out</Link></li>}
          {!session && <li onClick={() => handler(false)} className="active:bg-gray-800  px-4 py-4"><Link href={"/login"} className="flex items-center gap-x-3"><HiArrowLeftStartOnRectangle className="text-xl" />Sign in</Link></li>}
        </ul>
      </div>
    </div>
  );
}

export default Sidenav;