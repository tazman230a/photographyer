"use client"

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

const About = () => {

  return (
    <section className="">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 2,
          ease: "easeIn",
        }}
        className="container mx-auto h-full relative"
      >
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-24">
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <Image
              src="/assets/759800739.png"
              alt="camera"
              width={500}
              height={500}
            />
          </div>
          {/* text */}
          <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              At Eric McGinnis Photography, our mission is to capture the
              breathtaking beauty of Maui and the cherished moments of your life
              through the lens of our cameras. We believe that every photograph
              tells a story,
              <br />
              <br />
              and we are dedicated to creating timeless images that reflect the
              unique spirit of each individual and the stunning landscapes of
              Maui. Our goal is to provide an exceptional photography experience
              that not only meets but exceeds your expectations, leaving you
              with memories you will treasure forever.
            </p>

            <Link href={"/portfolio"} className="btn w-[15rem] bg-slate-500">
              View my work
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
