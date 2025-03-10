"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";

function Land()
{
    const {data:session}=useSession();
    return (
        <div className="border-b-2 border-gray-700 text-white h-[44vh] flex flex-col justify-center items-center">
            <h1 className="text-2xl pb-4">Hello, Welcome to <span className="italic font-semibold">BlackBird</span> </h1>
            <p className="pb-2.5 font-light text-center">A croudfunding platform for creators. Get funded by your fans and followers. Start now !</p>
            <div>
            {!session && <Link href={'/login'}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start here</button></Link>}
            
            <Link href={"/about"}>
            <button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">About us</button></Link>
            </div>
        </div>
    );
}

export default Land;