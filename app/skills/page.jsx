"use client";
import { RiReactjsLine, RiJavascriptLine, RiBootstrapLine, RiTailwindCssLine, RiNodejsLine, RiNextjsLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { motion } from "framer-motion";
import { useMemo } from "react";

const Skills = () => {
  // Memoized skill icons array
  const skillIcons = useMemo(() => [
    { Icon: RiJavascriptLine, color: "#f0db4f", name: "Javascript", duration: 5 },
    { Icon: RiReactjsLine, color: "#61dbfb", name: "React", duration: 5 },
    { Icon: RiNodejsLine, color: "#3c873a", name: "NodeJS", duration: 4 },
    { Icon: RiBootstrapLine, color: "#3B71CA", name: "Bootstrap", duration: 5 },
    { Icon: RiTailwindCssLine, color: "#f44336", name: "TailwindCSS", duration: 5 },
    { Icon: DiMongodb, color: "#21313C", name: "MongoDB", duration: 5 },
    { Icon: SiExpress, color: "#3C873A", name: "ExpressJS", duration: 5 },
    { Icon: RiNextjsLine, color: "#e91e63", name: "NextJS", duration: 5 },
    { Icon: FaWordpress, color: "#21759b", name: "WordPress", duration: 5 },
  ], []);

  // Memoize the iconVariants function
  const iconVariants = useMemo(() => ({
    initial: { y: -10 },
    animate: (duration) => ({
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    }),
  }), []);

  return (
    <div className="md:my-[182px] my-[150px]">
      <h1 className="my-20 text-center text-white text-4xl">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {skillIcons.map(({ Icon, color, name, duration }, index) => (
          <motion.div
            key={index}
            variants={iconVariants} // Use the same variant for all
            initial="initial"
            animate="animate"
            custom={duration} // Pass duration as custom prop
            className="rounded-2xl border-4 border-neutral-800 p-4 relative group"
          >
            <div>
              <Icon className="text-6xl transition-opacity duration-300" style={{ color }} />
            </div>
            <span className="absolute top-[-35px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-3xl text-white text-xl rounded p-3">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
