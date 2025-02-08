"use client";
import Image from "next/image";
import { FaTint } from "react-icons/fa";
import { GoPackageDependents } from "react-icons/go";
import { MdAirplaneTicket } from "react-icons/md";
import { FaHotel } from "react-icons/fa";

export default function OurSuccess() {
  const images = [
    "/visa/1.jpg",
    "/visa/2.jpg",
    "/visa/3.jpg" /* "/visa/4.jpg" */,
  ];

  return (
    <section className="mx-auto max-w-screen-lg bg-black p-6 text-center text-sm uppercase text-white shadow-2xl">
      <h2 className="text-2xl font-semibold uppercase mb-4 text-center text-white">
        Do you want to be in the success list??
      </h2>

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold uppercase mb-4 text-white text-center">
          Our recent success!!
        </h2>
        {/* <Image
    src="/visa/can.png"
    alt="hchc"
    width={200}
    height={200}
  /> */}
      </div>

      <div className="flex flex-col items-center">
        <div className="flex h-[50vh] w-full items-center py-1 justify-center">
          <div className="hexagon-gallery">
            {images.map((src, index) => (
              <div className="hexagon" key={index}>
                <Image
                  src={src}
                  alt={`Hexagon ${index + 1}`}
                  width={200}
                  height={200}
                  className="hexagon-inset"
                />
              </div>
            ))}
            {images.map((src, index) => (
              <div className="hexagon" key={index}>
                <Image
                  src={src}
                  alt={`Hexagon ${index + 1}`}
                  width={200}
                  height={200}
                  className="hexagon-inset"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-12 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
        <div className="p-6 space-y-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-xl border border-gray-700">
          <div className="flex items-center mb-4">
            <GoPackageDependents className="text-red-500 text-4xl mr-4" />
            <div>
              <h3 className="text-sm font-bold">
                Available 7-10-14 days Umrah Packages 2025
              </h3>
            </div>
          </div>
          <Image
            src="/umrah.png"
            alt="Whole Blood Donation"
            width={640} // Specify the width
            height={160} // Specify the height
            className="object-cover mb-4"
          />
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>14 days</li>
            <li>Visa, Air ticket, Transport, Ziyarah & Guide</li>
            <li>Accommodation in Makkah & Madinah</li>
          </ul>
        </div>
      

        <div className="p-6 space-y-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-xl border border-gray-700">
          <div className="flex items-center mb-4">
            <GoPackageDependents className="text-red-500 text-4xl mr-4" />
            <div>
              <h3 className="text-sm font-bold">
                Buy air ticket!
              </h3>
            </div>
          </div>
          <Image
            src="/ticket.webp"
            alt="Whole Blood Donation"
            width={640} // Specify the width
            height={160} // Specify the height
            className="object-cover mb-4"
          />
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>Cheap Air ticket assistance for any country</li>
            <li>Flexible flight options to suit your schedule</li>
          </ul>
        </div>
     

       <div className="p-6 space-y-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-xl border border-gray-700">
          <div className="flex items-center mb-4">
            <FaHotel className="text-red-500 text-4xl mr-4" />
            <div>
              <h3 className="text-sm font-bold">
                Hotel Bookings!
              </h3>
            </div>
          </div>
          <Image
            src="/hotel.webp"
            alt="Whole Blood Donation"
            width={640} // Specify the width
            height={160} // Specify the height
            className="object-cover mb-4"
          />
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>Cheap Hotel booking assistance in any country</li>
          </ul>
        </div>
      </div>
      
    </section>
  );
}
