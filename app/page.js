import Hero from "./component/hero";
import ImageSequence from "./component/imagesequence";
import ImageSlider from "./component/imageSlider";

export default function Home() {

   const slides = [
      {
        url: 'services/e1.jpg',
      },
      {
        url: 'services/e2.jpg',
      },
      {
        url: 'services/e3.webp',
      },
  
      {
        url: 'services/e4.jpeg',
      },
      {
        url: 'services/e5.jpg',
      },
    ];
  return (
    <div className="mb-20 bg-black">
      <div className="max-w-screen-2xl mx-auto px-2 lg:px-0">
        <ImageSlider slides={slides}/>
        <Hero />
        <ImageSequence />
      

      </div>
    </div>
  );
}
