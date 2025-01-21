"use client";
import Link from 'next/link';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Sweden from '../component/sweden';

export default function Study() {
  const countries = [
    {
      country: 'Sweden',
      image: 'swedenCity.jpg',
      destination: 'Study in Sweden',
    },
    /* {
      country: 'Australia',
      image: 'australia1.webp',
      destination: 'Visit in Australia',
    },
    {
      country: 'Canada',
      image: 'canada.jpg',
      destination: 'Visit in Canada',
    }, */
  ];

  return (
    <div>
    <div className="bg-black py-10 lg:px-8 lg:mx-20 flex flex-wrap justify-center gap-5 mt-20">
      {countries.map((item) => (
          <div key={item.country} className="flex flex-col items-center bg-[#2A2A2A] shadow-lg cursor-pointer hover:shadow-xl transition w-[300px] h-auto">
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
    <Sweden /></div>
  );
}
