"use client"; // Make sure this is at the top

import React, { useState, useEffect, Suspense } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const Typewriter = React.lazy(() =>
  import("react-simple-typewriter").then((mod) => ({ default: mod.Typewriter }))
);

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/rittik-chauhan-556a28284/",
    icon: CiLinkedin,
  },
  {
    href: "https://github.com/Rittikwebdes",
    icon: FaGithubSquare,
  },
  {
    href: "https://www.facebook.com/rittik.chauhan.50/",
    icon: FaFacebookSquare,
  },
];

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [heroContent, setHeroContent] = useState("");

  useEffect(() => {
    // Fetch data from content.json
    const fetchData = async () => {
      const response = await fetch("/content.json"); // Adjust the path if necessary
      const data = await response.json();
      console.log(data);
      setHeroContent(data.HERO_CONTENT); // Assuming HERO_CONTENT is the field name in your JSON
    };

    fetchData();
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    if (!currentTarget) return;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 20;
    const y = ((clientY - top) / height - 0.5) * 20;
    setPosition({ x, y });
  };

  return (
    <div className="md:my-[180px] my-[100px]">
      <div className="flex flex-wrap md:justify-around justify-center items-center md:space-y-0 space-y-5 md:ml-0 ml-3">
        {/* Left Side Section */}
        <div className="text-center max-w-[450px] p-3 space-y-5 rounded-lg">
          <h1 className="text-4xl md:text-6xl text-white">Rittik Chauhan</h1>
          <h1 className="text-white text-2xl md:text-3xl">
            I am{" "}
            <span className="text-green-500 font-bold">
              <Suspense fallback={<span>Loading...</span>}>
                <Typewriter
                  words={[
                    "Full Stack Developer (MERN)",
                    "Full Stack Developer (NextJS)",
                    "WordPress Developer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </Suspense>
            </span>
          </h1>
          <p className="text-white text-md md:text-lg">{heroContent}</p>
          <div className="flex justify-around items-center">
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
              {socialLinks.map(({ href, icon: Icon }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="p-2 text-4xl bg-black text-white hover:bg-white hover:text-black rounded-full hover:scale-105 duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Code Editor Section */}
        <motion.div
  onMouseMove={handleMouseMove}
  onMouseLeave={() => setPosition({ x: 0, y: 0 })}
  style={{ perspective: 1000 }}
  className="rounded-lg px-4 sm:px-8" // Added responsive padding
>
  <motion.div
    style={{ x: position.x, y: position.y }}
    transition={{ type: "spring", stiffness: 100, damping: 10 }}
    className="backdrop-blur-3xl border-1  shadow-slate-500 rounded-lg shadow-sm p-4 sm:p-6 md:p-8 max-w-full sm:max-w-lg" // Centered on small devices
  >
    {/* Header part with buttons */}
    <div className="flex items-center space-x-2 mb-4">
      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
    </div>

    {/* Code block */}
    <pre className="text-sm md:text-base text-gray-300">
      <code>
        {`const coder = {`}
        <br />
        &nbsp;&nbsp;{`name: 'Rittik Chauhan',`}
        <br />
        &nbsp;&nbsp;
        {`skills: ['MERN', 'NEXTJS , 'WORDPRESS'],`}
        <br />

     
        &nbsp;&nbsp;{`hardWorker: true,`}
        <br />
        &nbsp;&nbsp;{`quickLearner: true,`}
        <br />
        &nbsp;&nbsp;{`problemSolver: true,`}
        <br />
        &nbsp;&nbsp;{`hireable: function() {`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{`return (`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.hardWorker &&`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.problemSolver &&`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.skills.length >= 5;`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{`);`}
        <br />
        &nbsp;&nbsp;{`}`}
        <br />
        {`};`}
      </code>
    </pre>
  </motion.div>
</motion.div>

      </div>
    </div>
  );
};

export default Home;
