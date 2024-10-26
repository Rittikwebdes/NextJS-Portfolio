"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";

const About = () => {
  const [aboutText, setAboutText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/content.json"); // Adjust path if necessary
        const data = await response.json();
        setAboutText(data.ABOUT_TEXT); // Assuming ABOUT_TEXT is a key in your JSON
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-10 md:mb-[100px]">
      <h1 className="text-6xl text-center font-bold text-white">About Me</h1>
      <div className="md:space-y-0 space-y-5 flex flex-wrap items-center md:justify-around justify-center p-5 mt-[20px] text-white">
        <div>
          <Image
            src={require("../../public/Rittik.jpg")} // Ensure this path is correct
            alt="Profile Picture"
            priority
            className="md:w-[500px] w-[300px]  rounded-full"
          />
        </div>
        <div>
          <p className="text-lg mb-6 max-w-[320px] md:max-w-2xl text-center">{aboutText}</p>
          <div className="flex justify-center gap-8 items-center">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/917876630370?text=Hello!%20I%20want%20to%20hire%20you%20for%20my%20company.%20Can%20we%20talk%20for%20a%20while?",
                  "_blank"
                )
              }
              className="text-white text-xl bg-green-600 rounded-full px-4 py-2 hover:scale-105 duration-300"
            >
              HIRE ME
            </button>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/rittik-chauhan-556a28284/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <CiLinkedin className="p-2 text-4xl bg-black text-white hover:bg-white hover:text-black rounded-full hover:scale-105 duration-300" />
              </a>
              <a
                href="https://github.com/Rittikwebdes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithubSquare className="p-2 text-4xl bg-black text-white hover:bg-white hover:text-black rounded-full hover:scale-105 duration-300" />
              </a>
              <a
                href="https://www.facebook.com/rittik.chauhan.50/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
              >
                <FaFacebookSquare className="p-2 text-4xl bg-black text-white hover:bg-white hover:text-black rounded-full hover:scale-105 duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
