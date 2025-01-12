import Link from "next/link";
import React from "react";
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from "react-icons/im";

const socials = () => {
  return (
    <div className="flex flex-row px-[4rem] ml-15 text-slate-600 size-6">
      <Link
        href="https://www.facebook.com"
        target="_blank"
        className="px-[1rem] hover:text-blue-500"
      >
        <ImFacebook />
      </Link>
      <Link
        href="https://www.twitter.com"
        target="_blank"
        className="px-[1rem] hover:text-blue-500"
      >
        <ImTwitter />
      </Link>
      <Link
        href="https://www.pinterest.com"
        target="_blank"
        className="px-[1rem] hover:text-blue-500"
      >
        <ImPinterest />
      </Link>
      <Link
        href="https://www.instagram.com"
        target="_blank"
        className="px-[1rem] hover:text-blue-500"
      >
        <ImInstagram />
      </Link>
      <Link
        href="https://www.youtube.com"
        target="_blank"
        className="px-[1rem] hover:text-blue-500"
      >
        <ImYoutube />
      </Link>
    </div>
  );
};

export default socials;
