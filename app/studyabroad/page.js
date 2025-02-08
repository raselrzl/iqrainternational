"use client";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Sweden from "../component/sweden";

export default function Study() {
  const countries = [
    {
      country: "Sweden",
      image: "swedenCity.jpg",
      destination: "Study in Sweden",
    },
    {
      country: "UK",
      image: "uk.jpeg",
      destination: "Study in UK",
    } /* 
    {
      country: 'Canada',
      image: 'canada.jpg',
      destination: 'Visit in Canada',
    }, */,
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center h-full w-full">
      <div className="bg-gradient-to-r from-green-500 to-indigo-600 text-white text-center py-6 px-8 shadow-lg max-w-md mt-28 mx-6 rounded-lg">
        <h2 className="text-2xl font-bold uppercase mb-2">Now Accepting Files!</h2>
        <p className="text-lg font-medium">
          We are currently accepting applications for the{" "}
          <span className="font-extrabold text-yellow-300">
            UK September Intake
          </span>
          .
        </p>
        <p className="mt-2">
          Secure your spot today with our expert guidance for a hassle-free
          process!
        </p>
        <a
          href="/contact"
          className="mt-4 inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out"
        >
          Contact Us to Apply Now
        </a>
      </div>

      <div className="bg-black py-10 lg:px-8 lg:mx-20 flex flex-wrap justify-center gap-5 mt-20">
        {countries.map((item) => (
          <div
            key={item.country}
            className="flex flex-col items-center bg-[#2A2A2A] shadow-lg cursor-pointer hover:shadow-xl transition w-[300px] h-auto"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.destination}
              className="w-full h-48 object-cover"
            />

            {/* Link to country page */}
            <div className="w-full text-center rounded-b-lg text-white font-extrabold text-xl py-2 flex items-center justify-center gap-2">
              {item.destination}
              <FaArrowAltCircleRight />
            </div>
          </div>
        ))}
      </div>
      <Sweden />
    </div>
  );
}
