"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="no-scrollbar w-full max-xl:max-h-screen max-xl:overflow-y-scroll">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{
          duration: 3,
          ease: "backInOut",
        }}
        className=" flex flex-row justify-between"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{
            duration: 2,
            ease: "linear",
          }}
        >
          <Image
            src="/assets/759800739.png"
            alt="camera"
            width={500}
            height={500}
            className="m-[5rem]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{
            duration: 2,
            
          }}
          className="m-[5rem]"
        >
          <h1 className="h1">About me</h1>
          <p className="mb-12 max-w-md">
            At Eric McGinnis Photography, our mission is to capture the
            breathtaking beauty of Maui and the cherished moments of your life
            through the lens of our cameras. We believe that every photograph
            tells a story,
            <br />
            <br />
            and we are dedicated to creating timeless images that reflect the
            unique spirit of each individual and the stunning landscapes of
            Maui. Our goal is to provide an exceptional photography experience
            that not only meets but exceeds your expectations, leaving you with
            memories you will treasure forever.
          </p>
          <Link href="/portfolio" className="btn w-[15rem] bg-slate-500">
            View my works
          </Link>
        </motion.div>
      </motion.div>
      <Footer />
    </section>
  );
};

export default About;
