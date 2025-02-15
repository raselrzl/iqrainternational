import Image from "next/image";

const ImageSequence = () => {
  const steps = [
    {
      src: "/enquiry.png",
      title: "Step 1: Start Your Journey",
      description:
        "Search for universities, explore countries, and estimate expenses.",
    },
    {
      src: "/council.jpeg",
      title: "Step 2: Expert Guidance",
      description:
        "Get guidance based on your qualifications and financial capacity.",
    },
    {
      src: "/apply.png",
      title: "Step 3: Perfect Your Application",
      description:
        "Prepare required documents, choose the right university, and apply correctly.",
    },
    {
      src: "/offer.png",
      title: "Step 4: The Golden Offer",
      description:
        "Receive offer letters and explore scholarship opportunities.",
    },
    {
      src: "/visa.jpg",
      title: "Step 5: Visa Essentials",
      description:
        "Complete visa forms and get comprehensive guidance for visa requirements.",
    },
    {
      src: "/accomodation.webp",
      title: "Step 6: Secure Your Stay",
      description:
        "Learn about accommodation options, costs, and how to secure a place.",
    },
    {
      src: "/flight.jpg",
      title: "Step 7: Ready for Takeoff",
      description:
        "Check flight availability, handle ticketing, and arrange airport pickup.",
    },
  ];

  return (
    <>
      <div className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-center mt-1 py-1 px-10 ">
        Step by Step Guide to Your Success
      </div>
      <div className="bg-black py-10 lg:px-8 lg:mx-20  flex flex-wrap justify-center gap-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-row items-center bg-[#2A2A2A] shadow-lg p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 "
          >
            {/* Image on the Left */}
            <div className="relative mr-6">
              <Image
                src={step.src}
                alt={step.title}
                width={120}
                height={120}
                className="rounded-full border-4 border-white shadow-lg"
              />
            </div>

            {/* Step Title and Description on the Right */}
            <div className="flex flex-col justify-center text-white text-left w-full">
              {/* Step Title */}
              <div className="text-lg sm:text-lg md:text-xl font-extrabold mb-2 tracking-wide">
                {step.title}
              </div>

              {/* Description Text */}
              <div className="text-sm sm:text-md md:text-md font-medium text-left">
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-center text-2xl md:text-3xl font-extrabold text-transparent text-white py-6">
        "Your Success is our only Mission."
      </h1>
    </>
  );
};

export default ImageSequence;
