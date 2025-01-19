import Hero from "./component/hero";
import ImageSequence from "./component/imagesequence";
import ImageSlider from "./component/imageSlider";

export default function Home() {
  return (
    <div className="mb-20 bg-black">
      <div className="max-w-screen-2xl mx-auto px-2 lg:px-0">
        <ImageSlider />
        <Hero />
        <ImageSequence />
        <h1 className="text-center text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 py-6">
  <span className="block sm:text-white">"Your Success is our only Mission"</span>
</h1>

      </div>
    </div>
  );
}
