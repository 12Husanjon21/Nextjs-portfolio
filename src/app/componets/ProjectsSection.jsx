import React from "react";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <div id="projects" className="py-10 sm:py-16 px-8 sm:px-12">
      <h1 className="text-center text-4xl font-bold mt-4 mb-8 text-gray-50 md:mb-12">
        My Projects
      </h1>
      {/* <div className="flex justify-center gap-2 py-6 text-white items-center">
        <button className="border-2 px-6 py-3 cursor-pointer rounded-full text-xl border-gray-600 hover:border-gray-50 active:border-green-500">
          All
        </button>
        <button className="border-2 px-6 py-3 cursor-pointer rounded-full text-xl border-gray-600 hover:border-gray-50 active:border-green-500">
          Web
        </button>
        <button className="border-2 px-6 py-3 cursor-pointer rounded-full text-xl border-gray-600 hover:border-gray-50 active:border-green-500">
          Mobile
        </button>
      </div> */}
      <div className="flex gap-10 min-w-full min-h-full mb-24 justify-center wrapping">
        <div>
          <div className="relative group flex-1">
            <Image
              id="projectImg"
              className="cursor-pointer shadow-md hover:opacity-55"
              src="/GemeGeek.png"
              width={400}
              height={400}
              alt="Game Geek"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href="https://github.com/12Husanjon21/store_headphones"
                className="text-white mb-2 font-bold  cursor-pointer"
                target="_blank"
              >
                View Code
              </a>
              <a
                href="https://store-headphones.netlify.app"
                className="text-white font-bold  cursor-pointer"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>
          <p className="mt-6 text-xl">Headphones Store</p>
        </div>
        <div>
          <div className="relative group">
            <Image
              id="projectImg"
              className="cursor-pointer hover:opacity-55"
              src="/TalkSite.png"
              width={400}
              height={400}
              alt="Postly"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href="https://github.com/12Husanjon21/routing-onnext"
                className="text-white mb-2 font-bold  cursor-pointer"
                target="_blank"
              >
                View Code
              </a>
              <a
                href="https://nextjs-app59.netlify.app"
                className="text-white font-bold  cursor-pointer"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>
          <p className="mt-6 text-xl">Talk Business</p>
        </div>

        <div>
          <div className="relative group">
            <Image
              id="projectImg"
              className="cursor-pointer hover:opacity-55"
              src="/Selhono.png"
              width={400}
              height={400}
              alt="Todo App"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href="https://github.com/12Husanjon21/SELHONO"
                className="text-white mb-2 font-bold  cursor-pointer"
                target="_blank"
              >
                View Code
              </a>
              <a
                href="https://cerulean-twilight-73f7be.netlify.app"
                className="text-white font-bold  cursor-pointer"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>
          <p className="mt-6 text-xl">Selhono</p>
        </div>
      </div>
    </div>
  );
}
