"use client";
import Image from "next/image";

export default function OurSuccess() {
  return (
    <section className="mx-auto max-w-screen-lg bg-black p-10 text-center text-sm uppercase text-white shadow-2xl">
      <h2 className="text-2xl font-semibold uppercase mb-4 text-center text-white">
        Do you want be in the success list??
      </h2>
      <div className="flex flex-col items-center">
        <div className=" flex h-[50vh] w-full items-center py-1 justify-center">
          <div className="hexagon-gallery">
            {[...Array(7)].map((_, index) => (
              <div className="hexagon" key={index}>
                <Image
                  src="/1.png"
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
    </section>
  );
}
