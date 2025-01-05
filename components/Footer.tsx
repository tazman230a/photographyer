import React from "react";
import Socials from "./Socials";


const Footer = () => {
  return (
    <div className="flex flex-row justify-between m-10 px-[5rem] mb-6 pb-11 items-center">
      <Socials />  
      <h1 className="text-slate-500 mr-11">&copy; Eric Mesiyah McGinnis</h1>
    </div>
  );
};

export default Footer;
