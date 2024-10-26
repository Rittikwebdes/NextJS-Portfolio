"use client"
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer flex md:flex-row flex-col md:space-y-0 space-y-[-35px] md:justify-between justify-center  backdrop-blur-2xl text-neutral-content items-center md:px-[60px] px-2 py-2">
      <div>Copyright © 2024 - All right reserved</div>
      <div>Made with &#x2764;</div>
      <div className="flex flex-wrap ga-3">
      <a href="https://www.linkedin.com/in/rittik-chauhan-556a28284/">
                <CiLinkedin className="p-2 text-4xl bg-black text-white hover:bg-white hover:text-black rounded-full hover:scale-105 duration-300" />
              </a>{" "}
              <a href="https://github.com/Rittikwebdes">
                <FaGithubSquare className="p-2 text-4xl bg-black text-white hover:bg-white hover:text-black rounded-full hover:scale-105 duration-300" />
              </a>{" "}
              <a href="https://www.facebook.com/rittik.chauhan.50/">
                <FaFacebookSquare className="p-2 text-4xl bg-black text-white hover:bg-white hover:text-black rounded-full hover:scale-105 duration-300" />
              </a>{" "}
      </div>
      </div>
    </div>
  );
};

export default Footer;
