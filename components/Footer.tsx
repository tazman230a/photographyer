import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="w-full py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
            &copy; 2025 Eric Mesiyah McGinnis
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          <Socials />
        </div>

        <div>
          <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
