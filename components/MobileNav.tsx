"use client"

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { motion } from "framer-motion";
import Link from "next/link";

const menuVariants = {
  hidden: {
    x: "100%"
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  

  return (
    <nav className="text-primary xl:hidden">
      {/* nav open button */}
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer mx-10"
      >
        <CgMenuRight />
      </div>
      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className=" shadow-2xl w-full absolute bg-slate-400 top-0 right-0 max-w-xs h-screen z-20"
      >
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>
        {/* menu list */}

      <div className="h-full flex flex-col justify-center items-center gap-y-8 font-primary text-primary font-bold text-3xl">
        <Link
          href="/"
          className="hover:border-b hover:border-b-slate-500 hover:text-slate-500"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:border-b hover:border-b-slate-500 hover:text-slate-500"
        >
          About
        </Link>
        <Link
          href="portfolio"
          className="hover:border-b hover:border-b-slate-500 hover:text-slate-500"
        >
          Portfolio
        </Link>
        <Link
          href="contact"
          className="hover:border-b hover:border-b-slate-500 hover:text-slate-500"
        >
          Contact
        </Link>
      </div>
      </motion.div>
   
    </nav>
  );
};

export default MobileNav;
