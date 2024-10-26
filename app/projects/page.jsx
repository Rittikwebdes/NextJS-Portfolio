"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

const Projects = () => {
  const [projects, setProjects] = useState([]); // State to hold the projects data
  const [error, setError] = useState(null); // State to hold any error

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/content.json"); // Ensure the path is correct
        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await res.json();
        setProjects(data.PROJECTS); // Set projects state
      } catch (error) {
        console.error(error);
        setError(error.message); // Set error state
      }
    };

    fetchProjects();
  }, []); // Empty dependency array means this effect runs once when component mounts

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>; // Display error message
  }

  return (
    <div className="md:my-[150px] my-[120px] md:mx-8 mx-5">
      <h1 className="text-center my-9 text-4xl text-white">Projects</h1>
      <div className="flex flex-wrap justify-center items-center gap-8 md:space-y-0 space-y-9">
        {projects.map((item) => (
          <div key={item.id} className="space-y-6 backdrop-blur-3xl p-5 rounded-lg">
            <Link href={`/projects/${item.id}`}>
              <div className="relative w-64 h-40">
                <Image
                  src={item?.image}
                  alt={item.title} // Use title for alt text
                  fill
                  style={{ objectFit: 'cover' }}
                  quality={100}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Link>
            <p className="text-white text-center">{item.title}</p>
            <div className="flex flex-wrap justify-around text-white items-center">
              <a href={item.Githublink} target="_blank" rel="noopener noreferrer">
                <FaCode className="text-4xl rounded-full hover:text-black hover:bg-white duration-300 hover:scale-105 bg-green-600 p-2" />
              </a>
              <a href={item.LiveLink} target="_blank" rel="noopener noreferrer">
                <MdLiveTv className="text-4xl rounded-full hover:text-black hover:bg-white duration-300 hover:scale-105 bg-green-600 p-2" />
              </a>
            </div>
            <div className="flex justify-center pb-6">
              <Link href={`/projects/${item.id}`} className="bg-blue-600 text-white text-center p-2 rounded-full w-full">
                SEE MORE...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
