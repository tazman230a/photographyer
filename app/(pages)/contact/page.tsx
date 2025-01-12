"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section className="container ml-10">
      <div>
        <Header />
        <motion.div
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-50%" }}
          transition={{
            duration: 2,
            ease: "linear",
          }}
          className="m-[5rem] px-3 flex flex-row"
        >
          <div className="sm:text-sm">
            <h1 className="text-[4rem] font-primary font-bold text-slate-400] py-8">
              Contact
            </h1>
            <p className="mb-12 text-[2rem] font-primary font-semibold text-slate-700">
              Get in touch
            </p>
            <form className="flex flex-col gap-y-4 ">
              <div className="flex gap-x-10">
                <input
                  className="border border-slate-400 rounded-lg h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] px-2"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="border border-slate-400 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] px-5"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              <textarea
                className="border border-slate-400 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                placeholder="Your message"
              />
              <Link
                href={"mailto:gnmike404@gmail.com"}
                className="btn w-[15rem] bg-slate-500"
              >
                Sent it
              </Link>
            </form>
          </div>

          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={{
              duration: 2.5,
              ease: "linear",
            }}
            className="pl-[8rem]"
          >
            <Image
              src="/assets/carmera1.png"
              alt="camera"
              width={500}
              height={500}
              className="m-[5rem]"
            />
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
