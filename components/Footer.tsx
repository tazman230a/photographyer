import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="flex flex-1 sm:flex-col justify-between m-10 px-[2rem] mb-6 py-11 items-center">
      <Socials />  
      <h1 className="text-slate-500 mr-11 sm:flex-row">&copy; 2025 Eric Mesiyah McGinnis</h1>
    </div>
  );
};

export default Footer;
