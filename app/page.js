import Hero from "./component/hero";
import ImageSequence from "./component/imagesequence";

export default function Home() {
  return (
    <div className="mb-20 bg-black">
      <Hero />
      <ImageSequence />
    </div>
  );
}
