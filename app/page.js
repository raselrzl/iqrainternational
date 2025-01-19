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
      

      </div>
    </div>
  );
}
