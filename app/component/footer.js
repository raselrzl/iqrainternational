import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
export function Footer() {
  return (
    <>
      <div className="fixed bottom-0 left-0 flex w-full justify-center gap-4 p-6 text-3xl">
        <Link
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare className="hover:text-[#444444]" />
        </Link>

        <Link href="tel:+46000000">
          <MdAddCall className="hover:text-[#444444]" />
        </Link>
        <Link href="mailto:i@g.com">
          <MdMarkEmailUnread className="hover:text-[#444444]" />
        </Link>
        <Link
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareFacebook className="hover:text-[#444444]" />
        </Link>
        
      </div>
    </>
  );
}