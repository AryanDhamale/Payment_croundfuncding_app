"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchUser, updateUserprofile } from "@/actions/userActions.js";
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from "react-toastify";


function Dashbord() {
    const { data: session } = useSession();
    const [formdata, setformdata] = useState({name:"",email:"",username:"",profilePic:"",coverPic:"",razorpayId:"",rayzorpaysecret:""});
    const router = useRouter();
    useEffect(() => {
        if (!session) {
            router.push("/login");
            return;
        }

        async function findUserdata() {
            let u = await fetchUser(session.user.name);
            console.log(u);
            setformdata(u);
        }

        findUserdata();

    }, []);

    const handleOnchange = (e) => {
        setformdata({ ...formdata, [e.target.name]: [e.target.value] });
    }
    const handleSubmit = async (e) => {
        let msg = await updateUserprofile(e, session.user.name);
        toast.success(msg.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            <div className="text-white w-full">
                <div className="w-[95%] md:w-[36%] py-4 mx-auto">
                    <h1 className="text-2xl text-center mb-4">Welcome to Dashbord</h1>
                    <form action={handleSubmit} className="flex flex-col gap-y-6">
                        <div>
                            <input className="border-2 border-gray-800 focus:bg-gray-800 rounded-sm outline-0 w-full py-2 px-3.5" type="text" placeholder="Name" onChange={handleOnchange} value={formdata.name || ""} name="name" />
                        </div>
                        <div>
                            <input className="border-2 border-gray-800 focus:bg-gray-800 rounded-sm outline-0 w-full py-2 px-3.5" type="email" placeholder="Email" onChange={handleOnchange} value={formdata.email || ""} name="email" />
                        </div>
                        <div>
                            <input className="border-2 border-gray-800 focus:bg-gray-800 rounded-sm outline-0 w-full py-2 px-3.5" type="text" placeholder="Username" onChange={handleOnchange} value={formdata.username || ""} name="username" />
                        </div>
                        <div>
                            <input className="border-2 border-gray-800 focus:bg-gray-800 rounded-sm outline-0 w-full py-2 px-3.5" type="text" placeholder="Profile picture *url" onChange={handleOnchange} value={formdata.profilePic || ""} name="profilePic" />
                        </div>
                        <div>
                            <input className="border-2 border-gray-800 focus:bg-gray-800 rounded-sm outline-0 w-full py-2 px-3.5" type="text" placeholder="Cover picture *url" onChange={handleOnchange} value={formdata.coverPic || ""} name="coverPic" />
                        </div>
                        <div>
                            <input className="border-2 border-gray-800 focus:bg-gray-800 rounded-sm outline-0 w-full py-2 px-3.5" type="text" placeholder="Rayzorpay ID" onChange={handleOnchange} value={formdata.razorpayId || ""} name="razorpayId" required />
                        </div>
                        <div>
                            <input className="border-2 border-gray-800 focus:bg-gray-800 rounded-sm outline-0 w-full py-2 px-3.5" type="text" placeholder="Rayzorpay Secret" onChange={handleOnchange} value={formdata.rayzorpaysecret || ""} name="rayzorpaysecret" required />
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Update Profile</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Dashbord;