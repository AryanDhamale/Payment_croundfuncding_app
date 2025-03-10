"use client";
import Image from "next/image";

function About() {
    return (
        <div className="container p-6 text-white w-full md:w-[80%] mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6">About Us</h1>
            <p className="text-lg text-white opacity-80 mb-6">Welcome to our website. We are dedicated to providing the best service possible.</p>

            <section className="mb-12 flex items-center gap-x-4">
                <Image src="/mission.avif" alt="Our Mission" width={100} height={100} className="w-30 rounded-lg shadow-md" />
                <div>
                    <h2 className="text-3xl font-semibold text-white mb-4">Our Mission</h2>
                    <p className="text-lg text-white opacity-70 mb-4">Our mission is to deliver high-quality products that bring value to our customers. We strive to innovate and improve our offerings continuously.</p>
                </div>
            </section>

            <section className="mb-12 flex items-center gap-x-4 ">
                <Image src="/team.jpg" alt="Our Team" width={100} height={100} className="size-30 rounded-lg shadow-md" />
                <div>
                    <h2 className="text-3xl font-semibold text-white mb-4">Our Team</h2>
                    <p className="text-lg text-white opacity-70 mb-4">We have a team of experienced professionals who are passionate about their work. Our team members come from diverse backgrounds and bring unique perspectives to the table.</p>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-white mb-4">Our Values</h2>
                <ul className="list-disc list-inside text-lg text-white opacity-70">
                    <li className="mb-2">Integrity: We uphold the highest standards of integrity in all our actions.</li>
                    <li className="mb-2">Customer Commitment: We develop relationships that make a positive difference in our customers&apos; lives.</li>
                    <li className="mb-2">Quality: We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.</li>
                    <li className="mb-2">Teamwork: We work together, across boundaries, to meet the needs of our customers and to help our Company win.</li>
                </ul>
            </section>

            <section className="mb-12 flex items-center gap-x-4">
                <Image src="/history.avif" alt="Our History" width={100} height={100} className="size-30 rounded-lg shadow-md" />
                <div>
                    <h2 className="text-3xl font-semibold text-white mb-4">Our History</h2>
                    <p className="text-lg text-white opacity-70 mb-4">Founded in 2000, our company has grown from a small startup to a leading player in the industry. Our journey has been marked by innovation, growth, and a commitment to excellence.</p>
                </div>
            </section>
        </div>
    );
}

export default About;