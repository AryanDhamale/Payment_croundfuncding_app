"use client";
import { LuSearch } from "react-icons/lu";
import { getUserforSearch } from "@/actions/userActions";
import { useEffect ,useRef, useState} from "react";
import Link from "next/link";

function Search()
{
    const [search,setsearch]=useState([]);
    let data=useRef([]);
    const setData=async()=>{
       let arr =  await getUserforSearch();
       data.current=arr;
    }   

    const handleOnchage=(e)=>{
        if(data.current.includes(e.target.value))
        {
            setsearch((odVal)=>([...search,e.target.value]));
        }
        else {
            setsearch([]);
        }
    }

    useEffect(()=>{
        setData();
    },[]);
    return (
        <div className="ms-0.5 sm:ms-4 text-white relative">
            <div className="w-[16rem] sm:w-[20rem]  relative">
                <input onChange={handleOnchage} className="border-2 border-slate-700 outline-none rounded-full w-full px-4 py-2" type="text" placeholder="Enter your creater name" />
                <LuSearch className="hover:bg-slate-700 p-1.5 rounded-full cursor-pointer text-3xl text-white font-semibold absolute right-2 top-1/2 -transform -translate-y-1/2" onClick={setData}/>
            </div>
            <div className="w-[90%] absolute top-12 left-1/2 -transform -translate-x-1/2">
                <ul>
                    {
                        search.map((ele,idx)=>
                            <Link href={`/${ele}`} key={idx}>
                            <li className="text-sm cursor-pointer px-2 py-1.5 bg-slate-900 hover:bg-slate-800">{ele}</li>
                            </Link>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default Search;