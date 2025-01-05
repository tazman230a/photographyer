import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <section>
      <div className="h-[110px] pt-[3rem] flex flex-row justify-between items-center">
        <div className="mb-15">
          <div>
            <Image
              src="/assets/ericM.svg"
              alt="logo"
              width={500}
              height={500}
            />
          </div>
        </div>
        <nav className="space-x-5 p-[6rem] text-2xl">
            <Link 
              href="/"
              className="hover:border-b hover:border-b-slate-500 hover:text-slate-500"  
            >
                Home
            </Link>
            <Link href="/about">About</Link>
            <Link href="portfolio">Portfolio</Link>
            <Link href="contact">Contact</Link>
        </nav>
      </div>
    </section>
  );
};

export default Header;
