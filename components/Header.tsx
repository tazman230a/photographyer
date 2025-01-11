import React from "react";
import Socials from "./Socials";
import MobileNav from "./MobileNav";
import Image from "next/image";
import Link from "next/link";

const Header = () => {

  return (
    <header className="relative w-full px-[15px] z-30 h-[100px] lg:h-[100px] flex flex-row items-center ">
      <div className="fix flex flex-col lg:flex-row lg:items-center w-full justify-between space-x-4">
        {/* nav - initially hidden - show on desktop mode */}
        <div className="mt-11">
          {/* logo */}
          <Link href={"/"} className=" pr-[230px]">
            <Image
              src="/assets/ericM.svg"
              alt="logo"
              width={500}
              height={500}
            />
          </Link>
        </div>
        <nav className="hidden relative xl:flex gap-x-12 font-bold w-full">
          <div className="font-secondary text-primary text-3xl pl-11">
            <ul className="flex flex-row space-x-5">
              <li>
                <a href={"/"}>Home</a>
              </li>
              <li>
                <a href={"/about"}>About</a>
              </li>
              <li>
                <a href={"/portfolio"}>Portfolio</a>
              </li>
              <li>
                <a href={"/contact"}>Contact</a>
              </li>
            </ul>
          </div>
          <div className="pt-3">
            {/* socials */}
            <Socials />
          </div>
        </nav>
      </div>
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
