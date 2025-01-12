"use client"

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const Portfolio = () => {
  return (
    <section className="container">
      <div className="mx-auto h-full relative">
        <Header />
        <motion.div
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-50%" }}
          transition={{
            duration: 2.5,
            ease: "anticipate",
          }}
          className="mx-[7rem] py-11  flex flex-row justify-between"
        >
          <div className="mt-11 space-x-2">
            <h1 className="h1 pb-5">Portfolio</h1>
            <p className="mb-12 text-3xl max-w-sm">
              Here’s a glimpse of our work. Give us a call today.
            </p>
            <Link href={"/contact"} className="btn w-[15rem] bg-slate-500">
              Book Me
            </Link>
          </div>

          <div className="grid grid-cols-2 pl-[10rem] lg:gap-2 ">
            <div className="">
              <Image
                src="/assets/1.png"
                alt="user"
                width={300}
                height={300}
                className="object-cover rounded-md h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              />
            </div>
            <div>
              <Image
                src="/assets/2.png"
                alt="user"
                width={300}
                height={300}
                className="object-cover rounded-md h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              />
            </div>
            <div>
              <Image
                src="/assets/3.png"
                alt="user"
                width={300}
                height={300}
                className="object-cover rounded-md h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              />
            </div>
            <div>
              <Image
                src="/assets/4.png"
                alt="user"
                width={300}
                height={300}
                className="object-cover rounded-md h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </section>
  );
};

export default Portfolio;
