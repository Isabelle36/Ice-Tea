"use client";
import { CardStack } from "@/components/ui/card-stack";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/modern-ui/avatar";
import { AvatarGroup } from "@/components/modern-ui/avatar-group";
import React from "react";


const Home = () => {
  const cards = [
    {
      id: 0,
      name: "",
      designation: "",
      content: (
        <img
          src="Images/Sakura.png"
          alt="saku"
          className="sm:h-[195px] sm:w-[333px] md:h-[196px] md:w-[334px] lg:h-[386px] lg:w-[584px] rounded-md"
        ></img>
      ),
    },
    {
      id: 1,
      name: "",
      designation: "",
      content: (
        <img
          src="Images/Miku.png"
          alt="miku"
          className="sm:h-[195px] sm:w-[333px] md:h-[196px] md:w-[334px] lg:h-[386px] lg:w-[584px] rounded-md "
        ></img>
      ),
    },
    {
      id: 2,
      name: "",
      designation: "",
      content: (
        <img
          src="Images/Gojo Freeze.png"
          alt="gojo"
          className="sm:h-[195px] sm:w-[333px] md:h-[196px] md:w-[334px] lg:h-[386px] lg:w-[584px] rounded-md "
        ></img>
      ),
    },
    {
      id: 3,
      name: "",
      designation: "",
      content: (
        <img
          src="Images/Polar.png"
          alt="polar"
          className="sm:h-[195px] sm:w-[333px] md:h-[196px] md:w-[334px] lg:h-[386px] lg:w-[584px] rounded-md "
        ></img>
      ),
    },
  ];

  const testimonials = [
    {
      image: "https://via.placeholder.com/150",
      text: "Using this component library has significantly speed up our development process. The quality and ease of integration are remarkable!",
      name: "David Smith",
      username: "@davidsmith",
      social: "https://i.imgur.com/VRtqhGC.png",
    },
    {
      image: "https://via.placeholder.com/150",
      text: "I love  how intuitive and well-documented this component library is. It has significantly improved our UI consistency across projects.",
      name: "James Wilson",
      username: "@jameswilson",
      social: "https://i.imgur.com/VRtqhGC.png",
    },
    {
      image: "https://via.placeholder.com/150",
      text: "Using this library has been a game-changer for our product development.",
      name: "Michael Davis",
      username: "@michaeldavis",
      social: "https://i.imgur.com/VRtqhGC.png",
    },
    {
      image: "https://via.placeholder.com/150",
      text: "The components are highly responsive and work seamlessly across different devices and screen sizes.",
      name: "Emily Chen",
      username: "@emilychen",
      social: "https://i.imgur.com/VRtqhGC.png",
    },
  ];

  return (
    <div className="relative flex bg-[#110921] flex-col h-screen overflow-x-hidden font-[family-name:var(--font-bricolage-grotesque)]">
      <div className="sm:w-[150px] sm:h-[150px] sm:mt-[25%] sm:ml-[-10%] md:w-[300px] md:h-[300px]  blur-[50px] bg-[#1a304bc5] absolute left-[-10%]  md:mt-[12%] rotate-45 z-0"></div>
      <div className="sm:w-[260px] sm:h-[260px]  md:w-[200px] md:h-[200px] sm:mt-[130%] md:mt-[109%] lg:mt-[39%]  blur-[50px]  bg-[#2D0A44] absolute sm:right-[-42%] md:right-[-7%]  rounded-full rotate-[-30deg] z-0"></div>
      <div className="relative sm:flex sm:justify-center">
        <div className="sm:mt-[100%] sm:mx-auto md:ml-[52%] lg:ml-[59%] md:mt-[24%] z-10 lg:mt-[10%]">
          <CardStack items={cards} />
        </div>
      </div>
      <div className="z-10 sm:ml-[10%] sm:mt-[-135%] md:mt-[-26%] lg:mt-[-10%] md:ml-[5%] lg:ml-[7%] space-y-2">
        <h1 className="sm:text-4xl md:text-5xl lg:text-7xl text-white">
          Code in Style
        </h1>
        <h2 className="sm:text-xl md:text-xl lg:text-3xl text-white/80 ">
          <span className="text-purple-400">Anime</span>-Inspired Themes That
          <br></br> Bring Your Editor to Life!
        </h2>
        <div className="inline-flex mt-[2%] space-x-6">
          <a target="_blank">
            <button className="group p-1.5 pl-3 pr-3 flex gap-3 justify-center shadow-xs cursor-pointer hover:border-white/15 hover:bg-white/7 rounded-md bg-white/5 border border-white/10">
              <span className="text-white font-sm ">VsCode Extension</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide text-purple-400 group-hover:text-cyan-300 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300  my-auto lucide-zap-icon inline-flex lucide-zap"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
            </button>
          </a>

          <button className="group p-1.5 pl-3 pr-3 flex gap-3 justify-center shadow-md cursor-pointer hover:bg-purple-500/85 rounded-md bg-purple-500/80 transition-all duration-300">
            <span className="text-white font-sm">Leave a Review</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide text-white group-hover:translate-x-1 transition-all duration-300 my-auto inline-flex lucide-move-right-icon lucide-move-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="mt-[2%] flex space-x-3">
          <AvatarGroup limit={5}>
            <Avatar>
              <AvatarImage src="/Images/hotplate.jpg" alt="hot" />
              <AvatarFallback>HOT</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="/Images/iddu.jpg" alt="iddu" />
              <AvatarFallback>ID</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="/Images/inumaki.jpg" alt="inu" />
              <AvatarFallback>IN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="/Images/jinx.jpg" alt="jin" />
              <AvatarFallback>JI</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="/Images/itadori.jpg" alt="ita" />
              <AvatarFallback>IT</AvatarFallback>
            </Avatar>
          </AvatarGroup>
          <div className="flex items-center ml-3">
            <span className="text-md text-white/70">
              Used by{" "}
              <span className="font-bold text-white pl-1 pr-1"> 100+ </span>{" "}
              developers
            </span>
          </div>
        </div>
      </div>
          </div>
  );
};

export default Home;
