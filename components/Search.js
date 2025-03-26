"use client";
import { LuSearch } from "react-icons/lu";
import { getUserforSearch } from "@/actions/userActions";
import { useEffect , useState} from "react";
import Link from "next/link";


function Search()
{
    const [search,searchData]=useState([]);
    const [query,setQuery]=useState('');
    const [visible,setVisible]=useState(false);

    useEffect(()=>{
        async function fetchData()
        {
          let newData=await getUserforSearch();
          if(newData.length) {
            searchData(newData);
          }
        }
        
        fetchData();
    },[])
   
    return (
        <div className="ms-0 sm:ms-4 text-white relative">
            <div onBlur={()=>setVisible(false)} className="w-[15rem] sm:w-[20rem]  relative">
                <input onChange={(e)=>setQuery(e.target.value)} onMouseDown={()=>setVisible(true)} value={query} className="border-2 border-slate-700 outline-none rounded-full w-full px-4 py-2" type="text" placeholder="Enter your creater name" />
                <LuSearch className="hover:bg-slate-700 p-1.5 rounded-full cursor-pointer text-3xl text-white font-semibold absolute right-2 top-1/2 -transform -translate-y-1/2"/>
            </div>
            <div className="w-[90%] absolute top-12 left-1/2 -transform -translate-x-1/2">
                {visible && <ul className="h-30 overflow-auto">
                    {
                        search.filter((ele,idx)=>ele.toLowerCase().includes(query)).map((ele,idx)=><Link onClick={(e)=>setVisible(false)} onMouseDown={(e)=>{e.preventDefault()}} href={`/${ele}`} key={idx}>
                        <li className="text-sm cursor-pointer px-2 py-1.5 bg-slate-900 hover:bg-slate-800">{ele}</li>
                        </Link>)
                    }
                </ul>}
            </div>
        </div>
    );
}

export default Search;