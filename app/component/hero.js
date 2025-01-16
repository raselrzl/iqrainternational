"use client"; 
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row md:w-[60%] mx-auto h-auto md:h-[60vh] mt-[100px] md:mt-[100px]">
      {/* Text and Button Div */}
      <div className="flex items-center justify-center w-full md:w-1/2 h-full text-white p-8">
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-3xl font-bold">IQRA International Education Consultancy</h1>
          <p className="text-md">
            ...provides step-by-step guidance from application 
            to enrolment to make dreams of higher study abroad a reality for genuine students. 
            Book your <span className="font-bold">FREE Consultation</span> with us now 
            to find out why more than five thousand students consider us the best 
            education consultancy in Bangladesh.
          </p>
          <p className="text-md">
            Our team of expert counselors is happy to assist you with the following 
            services without <span className="font-bold">ANY FEES</span> 
            when you apply to our partner universities.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-500 hover:to-blue-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out uppercase">
            Get Started
          </button>
        </div>
      </div>

      {/* Image Div */}
      <div className="flex justify-center items-center w-full md:w-1/2 h-full sm:mt-20 mb-64">
        <div className="relative w-full h-full md:w-[90%] md:h-[90%]">
          <Image
            src="/hero11.png" // Replace with your image path in the public folder
            alt="Hero Image"
            layout="intrinsic" // Use intrinsic layout for responsive images
            width={500} // Adjust width
            height={500} // Adjust height
            objectFit="contain"
            className="absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
}
