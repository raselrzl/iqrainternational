import Image from 'next/image';

export function Flag() {
  return (
    <div className="bg-black py-6">
      <div className="container mx-auto flex justify-center gap-4">
        

        {/* Australia Flag */}
        <div className="flex justify-center items-center">
          <Image 
            src="/australia1.webp" 
            alt="Australia Flag" 
            width={40} 
            height={50} 
            className=""
          />
        </div>
{/* Swedish Flag */}
<div className="flex justify-center items-center">
          <Image 
            src="/sweden1.png" 
            alt="Swedish Flag" 
            width={40} 
            height={50} 
            className=""
          />
        </div>
        {/* Canada Flag */}
        <div className="flex justify-center items-center">
          <Image 
            src="/canada.webp" 
            alt="Canada Flag" 
            width={40} 
            height={60} 
            className=""
          />
        </div>
      </div>
    </div>
  );
}
