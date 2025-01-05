import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section className="section">
      <div>
        <Header />
        <div className="m-[5rem] flex flex-row">
          <div className="">
            <h1 className="text-[5rem] font-bold">Contact me</h1>
            <p className="mb-12 text-[2rem]">
              I would love to get suggestion from you.
            </p>
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  className="border border-slate-400 rounded-lg h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="border border-slate-400 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              <textarea
                className="border border-slate-400 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                placeholder="Your message"
              />
              <Link href={"mailto:gnmike404@gmail.com"} className="btn w-[15rem] bg-slate-500">
                Sent it
              </Link>
            </form>
          </div>

          <div className="pl-[8rem]">
            <Image
              src="/assets/carmera1.png"
              alt="camera"
              width={500}
              height={500}
              className="m-[5rem]"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
