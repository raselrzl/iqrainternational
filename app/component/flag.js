import Image from "next/image";

export function Flag() {
  const flags = [
    { src: "/flag/faus.png", alt: "Australia Flag" },
    { src: "/flag/fswe.png", alt: "Sweden Flag" },
    { src: "/flag/fcan.jpg", alt: "Canada Flag" },
    { src: "/flag/fuk.png", alt: "UK Flag" },
    { src: "/flag/findia.png", alt: "India Flag" },
    { src: "/flag/fmalaysia.svg", alt: "Malaysia Flag" },
    { src: "/flag/fsingapore.jpeg", alt: "Singapore Flag" },
    { src: "/flag/ftai.png", alt: "Thailand Flag" },
    { src: "/flag/fusa.png", alt: "USA Flag" },
  ];

  return (
    <div className="bg-black py-6 text-white">
      {/* Heading with Logo */}
      <div className="flex items-center uppercase justify-center gap-1 mb-2 ">
        {/* <p className="text-md font-semibold">Study&Visit with </p> */}
        <Image
          src="/iq1.png"
          alt="Iqra Logo"
          width={140}
          height={140}
          className="object-contain"
        />
      </div>
      <div className="relative bg-black ">
        <div className="flex items-center justify-center text-white">
          {/* Line */}
          <div className="h-[2px] bg-white w-1/4"></div>

          {/* X Separator */}
          <span className="mx-4 text-2xl font-bold">X</span>

          {/* Line */}
          <div className="h-[2px] bg-white w-1/4"></div>
        </div>
      </div>

      {/* Flags */}
      <div className="container mx-auto flex flex-wrap justify-center gap-1">
        {flags.map((flag, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-6 h-6 rounded-full overflow-hidden bg-white"
          >
            <Image
              src={flag.src}
              alt={flag.alt}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
