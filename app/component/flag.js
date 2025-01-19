import Image from "next/image";

export function Flag() {
  return (
    <div className="bg-black py-6">
      <div className="container mx-auto flex justify-center gap-4">
        {/* Australia Flag */}
       
        <div className="flex justify-center items-center w-12 h-12 rounded-full overflow-hidden bg-white">
          <Image
            src="/australia1.webp"
            alt="Australia Flag"
            width={48}
            height={48}
          />
        </div>
        {/* Swedish Flag */}
        
        <div className="flex justify-center items-center w-12 h-12 rounded-full overflow-hidden bg-white">
          <Image
            src="/sweden1.png"
            alt="Swedish Flag"
            width={48}
            height={48}
          />
        </div>
        {/* Canada Flag */}
        <div className="flex justify-center items-center w-12 h-12 rounded-full overflow-hidden bg-white">
          <Image
            src="/canada.webp"
            alt="Canada Flag"
            width={48}
            height={48}
            className="object-cover"
          />
        </div>

        
      </div>
    </div>
  );
}
