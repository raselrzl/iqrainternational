import Hero from "./component/hero";
import ImageSequence from "./component/imagesequence";
import ImageSlider from "./component/imageSlider";
import OurSuccess from "./component/ourSuccess";
import ProfileCounter from "./component/profileCounter";

export default function Home() {
  const slides = [
    {
      url: "services/e1.jpg",
    },
    {
      url: "services/e2.jpg",
    },
    {
      url: "services/e3.webp",
    },

    {
      url: "services/e4.jpeg",
    },
    {
      url: "services/e5.jpg",
    },
  ];
  return (
    <div className="bg-black">
      <div className="max-w-screen-2xl mx-auto px-2 lg:px-0">
        <ImageSlider slides={slides} />
        <div className="text-center bg-[#2A2A2A] text-white rounded-lg p-4 border-1 border-gray-700 mx-4 mt-16">
          <h2 className="text-2xl font-extrabold uppercase tracking-wide mb-2  text-yellow-300">
            Now Accepting Student Files!
          </h2>

          <p className="text-lg font-medium leading-relaxed">
            We are currently accepting applications for the--
            <span className="font-extrabold text-yellow-300">
              UK September Intake
            </span>
            .
          </p>
          <p className="mt-2 text-gray-100">
            Secure your spot today with our expert guidance!
          </p>
          <p className="text-lg font-medium mt-4 leading-relaxed">
            We are currently processing visas for the--
            <span className="font-extrabold text-yellow-300">
              Sweden September Intake
            </span>
            .
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-lg"
          >
            Contact Us to Apply Now
          </a>
        </div>

        <ProfileCounter />
        <Hero />
        <ImageSequence />
        <OurSuccess />
      </div>
    </div>
  );
}
