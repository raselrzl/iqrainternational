import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
export function Footer() {
  return (
    <>
      <div className="flex justify-center gap-4 p-6 text-2xl bg-black mr-10 md:text-2xl lg:text-3xl lg:mr-20">

        {/* <Link
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare className="hover:text-[#444444]" />
        </Link> */}

        <Link href="tel:01571311765">
          <MdAddCall className="hover:text-[#444444]" />
        </Link>
        <Link href="mailto:info@giqrainternational.online">
          <MdMarkEmailUnread className="hover:text-[#444444]" />
        </Link>
        <Link
          href="https://www.facebook.com/share/1Ay2ZWhikB/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareFacebook className="hover:text-[#444444]" />
        </Link>
        
      </div>
    </>
  );
}