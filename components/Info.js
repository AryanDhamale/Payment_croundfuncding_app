
function Info()
{
    return (
        <div className="text-white py-16 flex flex-col items-center border-b-2 border-gray-700">
          <h1 className="text-2xl font-medium pb-4 pt-6">Your fan buy you a Chai</h1>
          <div className=" w-[90%] grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-0">
             <div className="flex flex-col justify-center items-center">
                <img src="/man.gif" alt="this is an image" className="rounded-full" width={120} />
                <p className="font-normal pb-1.5 pt-1.5">Fans want to help you</p>
                <p className="text-sm opacity-50 font-medium">Your fans are available for help yoy</p>
             </div>
             <div className="flex flex-col justify-center items-center">
                <img src="/coin.gif" alt="this is an image" className="rounded-full" width={120} />
                <p className="font-normal pb-1.5 pt-1.5">Fans want to contribute</p>
                <p className="text-sm opacity-50 font-medium">Your fans are willing to contribute financially</p>
             </div>
             <div className="flex flex-col justify-center items-center">
                <img src="/group.gif" alt="this is an image" className="rounded-full bg-white" width={120} />
                <p className="font-normal pb-1.5 pt-1.5">Fans want to help collbarate</p>
                <p className="text-sm opacity-50 font-medium">Your fans are ready to collaborate with you</p>
             </div>
          </div>
        </div>
    );
}

export default Info;