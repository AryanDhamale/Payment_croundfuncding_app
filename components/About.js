
function About()
{
    return (
        <div className="text-white flex flex-col items-center">
           <h1 className="text-2xl font-medium pb-4 pt-6">Learn more about us</h1>
           <div className="pb-6 w-full">
           <iframe className="w-[90%] h-[250px] mx-auto md:w-[560px] md:h-[315px]" src="https://www.youtube.com/embed/M4BpRtTP8QI?si=RY6b2RvCWTV5_qQU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
           </div>
        </div>
    );
}

export default About;