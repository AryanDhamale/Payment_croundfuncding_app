"use client";
import { useState, useEffect ,useCallback } from "react";
import { initiate, fetchUser, fetchpayments } from "@/actions/userActions";
import Script from "next/script";
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from "react-toastify";
import { useSearchParams } from 'next/navigation';
import Image from "next/image";

function Profile({ userName }) {
    const [paymentform, setPaymentform] = useState({ name: "", amount: "", message: "" });
    const [currentuser, setCurrentuser] = useState({});
    const [payments, setpayments] = useState([]);
    const showparams = useSearchParams();
    const handleForm = (e) => {
        e.preventDefault();
        const Amount = Number.parseInt(paymentform.amount);
        if (!Amount || Amount < 1) {
            show("please enter an valid amount", toast.warn);
            return;
        }

        if (!currentuser.razorpayId || !currentuser.rayzorpaysecret) {
            show("this user can't accept the payment now", toast.error);
            return;
        }
        payment(Amount, userName, paymentform);
        return;
    }

    const getData = useCallback(async () => {
        let user = await fetchUser(userName);
        setCurrentuser(user);
        let payment = await fetchpayments(userName);
        setpayments(payment);
    },[]);


    useEffect(() => {
        if (showparams.get("paymentDone") == "true") {
            show("Congradulation,payment has done !", toast.success);
        }
        getData();
    }, [getData,showparams]);

    const show = (message, type) => {
        type(message, {
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



    const payment = async (amount, userName, paymentForm) => {
        let a = await initiate(amount, userName, paymentForm);
        const options = {
            key: currentuser.razorpayId, // Replace with your Razorpay key_id
            amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: 'INR',
            name: userName,
            description: 'Test Transaction',
            order_id: a.id, // This is the order_id created in the backend
            callback_url: process.env.NEXT_PUBLIC_REDIRECT_URL, // Your success URL
            prefill: {
                name: paymentForm.name,
                email: 'gaurav.kumar@example.com',
                contact: '9999999999'
            },
            theme: {
                color: '#F37254'
            },
        };
        const rzp = new Razorpay(options);
        rzp.open();

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
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className="text-white realtive">
                <div className="w-full">
                    <Image width={100} height={100} className="w-[100%] object-cover h-[40vh]" src={currentuser.coverPic || "/coverPic.jpeg"} alt="this is an IMAGE" />
                </div>
                <div className="absolute text-center flex flex-col justify-center items-center gap-y-2 py-2 px-2 - left-1/2 transform -translate-x-1/2 top-1/2  -translate-y-[38%]">
                    <Image width={100} height={100} className="size-[10rem] rounded-full" src={currentuser.profilePic || "/profilePic.jpg"} alt="this is an profile image" />
                    <h2 className="text-3xl font-normal">{userName}</h2>
                    <p className="text-sm font-medium">let help to your favorite creater {currentuser.username}</p>
                    <p className="text-xs font-normal opacity-50">{payments.length} raised . &#8377;{payments.reduce((acc, curr) => Number(curr.amount) + acc, 0)}</p>
                </div>
            </div>
            <div className="mt-50 w-4/5 mx-auto grid grid-cols-1 gap-y-6 md:gap-y-0 md:grid-cols-2 gap-x-4 mb-4">
                <div className="text-white px-6 py-4 bg-slate-900 rounded-sm">
                    <h2 className="text-xl font-medium pb-4">Supporters</h2>
                    <div className="flex flex-col justify-center items-start gap-y-3">
                        {payments.length == 0 &&
                            <p className="flex justify-start items-center gap-x-2">
                                <Image height={30} width={30} className="rounded-full" src="/user.webp" alt="this is an user image" />
                                <span>No Transition found in Database</span>
                            </p>
                        }
                        {
                            payments.map((ele, idx) =>
                                <p className="flex justify-start items-center gap-x-2" key={idx}>
                                    <Image height={30} width={30} className="rounded-full" src="/user.webp" alt="this is an user image" />
                                    <span>{ele.name} <b>{ele.amount}</b> with message  {ele.message}</span>
                                </p>
                            )
                        }
                        {/* {
                            arr.map((ele,idx)=>
                                <p key={idx} className="flex justify-start items-center gap-x-2">
                            <img width={30} className="rounded-full" src="/user.webp" alt="this is an user image" />
                            <span>Hello World {idx}</span>
                        </p>)
                        } */}
                    </div>
                </div>
                <div className="bg-slate-900 rounded-sm px-6 py-10 text-white">
                    <h2 className="text-xl font-medium pb-4">Make a Payment</h2>
                    <form onSubmit={handleForm}>
                        <div>
                            <input className="border-2 border-gray-800 focus:bg-gray-800 rounded-sm mb-4 outline-0 w-full py-2 px-3.5" type="text" value={paymentform.name} onChange={(e) => setPaymentform({ ...paymentform, name: e.target.value })} name="name" placeholder="Enter your name" required />
                        </div>
                        <div>
                            <input className="border-2 border-gray-800 focus:bg-gray-800 rounded-sm mb-4 outline-0 w-full py-2 px-3.5" type="text" value={paymentform.message} onChange={(e) => setPaymentform({ ...paymentform, message: e.target.value })} name="message" placeholder="Enter your message to your favorite creater" required />
                        </div>
                        <div className="mb-4">
                            <input className="mb-4 border-2 border-gray-800 focus:bg-gray-800 rounded-sm outline-0 w-full py-2 px-3.5" type="text" value={paymentform.amount} onChange={(e) => setPaymentform({ ...paymentform, amount: e.target.value })} name="amount" placeholder="Enter your Amount you want to pay him !" required />
                            <p className="text-xs opacity-50">eg : 10rs or 20rs</p>
                        </div>
                        <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay Amount</button>
                    </form>
                </div>
            </div>
        </>
    );
}


export default Profile;