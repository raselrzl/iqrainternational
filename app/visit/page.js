"use client";
import Link from 'next/link';
import { FaArrowAltCircleRight } from 'react-icons/fa';

export default function Visit() {
  const countries = [
   /*  {
      country: 'Sweden',
      image: 'sweden1.png',
      destination: 'Study in Sweden',
    }, */
    {
      country: 'Australia',
      image: 'australiaCity.jpg',
      destination: 'Visit in Australia',
    },
    {
      country: 'Canada',
      image: 'canadaCity.webp',
      destination: 'Visit in Canada',
    },
  ];

  return (
    <div className="bg-black py-10 lg:px-8 lg:mx-20 flex flex-wrap justify-center gap-5 mt-20">
      {countries.map((item) => (
        <Link key={item.country} href={`/${item.country.toLowerCase()}`} passHref>
          <div className="flex flex-col items-center bg-[#2A2A2A] rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition w-[300px] h-auto">
            {/* Image */}
            <img
              src={item.image}
              alt={item.destination}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            {/* Link to country page */}
            <div className="w-full text-center rounded-b-lg text-white font-extrabold text-xl py-2 flex items-center justify-center gap-2">
              {item.destination} 
              <FaArrowAltCircleRight />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
