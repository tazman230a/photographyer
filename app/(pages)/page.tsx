'use client'

import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section className="no-scrollbar w-full  max-xl:max-h-screen max-xl:overflow-y-scroll">
      <Header />
      <div className="w-full mx-auto relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 2,
          ease: "easeIn",
        }}
        className="flex flex-col sm:flex-row mx-auto h-full relative"
      >
        <div className="ml-[6rem]">
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={{
              duration: 2.5,
              ease: "anticipate",
            }}
          >
            <h1 className="text-[54px] lg:text-[108px] font-bold capitalize leading-[120%] tracking-[-0.05em] pt-[29px]">
              photographer
              <br />& film maker
            </h1>
            <p className="text-[26px] lg:text-[36px] mb-4 lg:mb-12">
              Los Angeles, CA.
            </p>
            <Link href={"/contact"} className="btn w-[15rem] bg-slate-500">
              Book Now
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{
            duration: 2,
            ease: "circIn",
          }}
          className=""
        >
          <Image
            src="/assets/2eric.png"
            alt="photograph"
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>
      </div>
       
    </section>
  );
};

export default Home;
