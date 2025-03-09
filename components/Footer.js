"use client";

function Footer()
{
    let data=new Date().getFullYear();
    return (
        <div className="text-white flex justify-center items-center h-16 px-6">
            <p>Copyright &copy; <span className="font-medium italic">{data} BlackBird</span> - All rights reserved!</p>
        </div>
    );
}

export default Footer;