"use client";
import React, { useState } from "react";
import Image from "next/image";

const data = {
  Skills: ["HTML", "Css", "js", "Git", "Github"],
  Education: ["Najot ta'lim", "Secondary school"],
  Certificates: ["Najot ta'lim Frontend Developer"],
};

const list = Object.keys(data);

export default function About() {
  const [active, setActive] = useState("");
  return (
    <section
      id="about"
      className="pt-8 sm:pt-28 mb-24 sm:mx-24 md:mx-18 gap-x-20 grid grid-cols-1 md:grid-cols-2 mx-12"
    >
      <div className="col-span-1">
        <Image
          src={"/computer.jpg"}
          width={500}
          height={500}
          alt="Computer"
        ></Image>
      </div>
      <div className=" md:mt-0 text-left flex flex-col h-full">
        <h1 className="text-4xl font-medium mb-10">About Me</h1>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          tenetur cum laboriosam tempora, nisi beatae vero maiores optio sed
          rerum sunt fuga eaque similique. Sed quasi tempora vero veniam ad,
          recusandae voluptates ipsam? Ex nostrum fugit vitae nulla,
          reprehenderit fuga sunt odio commodi voluptate minima dicta, porro
          facere deserunt. Modi, et itaque. Possimus voluptas sint quasi rerum
          nemo! Aliquid dignissimos omnis placeat esse voluptatibus laudantium
          non molestias ea ex cupiditate.
        </p>
        <ul className="flex gap-5">
          {list.map((l, index) => (
            <li key={index}>
              <button
                className={`text-gray-400 font-bold ${
                  active === l ? " mb-6 text-gray-50" : ""
                }`}
                onClick={() => setActive(l)}
              >
                <p>{l}</p>
                <div
                  className={` ${
                    active === l
                      ? "h-1 w-full bg-gradient-to-br rounded-md from-green-600 to-cyan-600"
                      : ""
                  }`}
                ></div>
              </button>
            </li>
          ))}
        </ul>
        <ul>
          {active &&
            data[active].map((s, index) => (
              <li className="list-disc" key={index}>
                {s}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
