"use client";
import { CardStack } from "@/components/ui/card-stack";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/modern-ui/avatar";
import Marquee from "react-fast-marquee";
import { AvatarGroup } from "@/components/modern-ui/avatar-group";
import React from "react";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import FooterThird from "@/components/serenity-ui/Footer";
import Link from "next/link";

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
      author: {
        name: "raginghotplate",
        handle: "",
        avatar:
        "/Images/hotplate.jpg"
      },
      text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
      href: "",
    },
    {
      author: {
        name: "Iddu",
        handle: "",
        avatar:
        "/Images/iddu.jpg"
      },
      text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
      href: "",
    },
    {
      author: {
        name: "karan",
        handle: "",
        avatar:
        "/Images/inumaki.jpg"
      },
      text: "Baby Gurll integration is flawless. We've reduced our development time by 60% since implementing this solution.",
      href: "",
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
              Used by
              <span className="font-bold text-white pl-1 pr-1"> 100+ </span>
              developers
            </span>
          </div>
        </div>
      </div>
      <h2 className="text-white flex justify-center mt-[20%] text-5xl font-bold">What the <span className="ml-1 mr-2 text-cyan-300">Otaku Coders</span> Are Raving About Us</h2>
      <span className="text-3xl flex text-white mt-3 justify-center">Themes With <span className="ml-1 mr-1 text-purple-400">Vibes</span></span>
      <div className="relative z-10 mt-40 mb-44">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[400px] bg-gradient-to-r from-[#110921] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[400px] bg-gradient-to-r from-[#110921] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[400px] bg-gradient-to-r from-[#110921] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[400px] bg-gradient-to-l from-[#110921] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[400px] bg-gradient-to-l from-[#110921] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[400px] bg-gradient-to-l from-[#110921] to-transparent z-20" />
        <Marquee pauseOnHover={true} gradient={false} loop={0} speed={80} autoFill={true}>
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div key={idx} className="mx-4 w-[320px]">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="flex mb-40 justify-center space-x-4 gap-4 mt-8">
        <Link target="_blank" href="https://x.com/iceteaThemes">
        <button className="group p-1.5 pl-3 pr-3 flex gap-3 justify-center shadow-md cursor-pointer hover:bg-purple-500/85 rounded-md bg-purple-500/80 transition-all duration-300">
          <span className="text-white font-sm">Follow us on Twitter</span>
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
        </Link> 
        <Link target="_blank" href="https://github.com/Isabelle36/Ice-Tea">
          <button className="group p-1.5 pl-3 pr-3 flex gap-3 justify-center shadow-xs cursor-pointer hover:border-white/15 hover:bg-white/7 rounded-md bg-white/5 border border-white/10">
            <span className="text-white font-sm ">Star us on Github</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide text-yellow-400 group-hover:text-yellow-300 group-hover:scale-110 group-hover:rotate-3 group-hover:fill-amber-300 transition-all duration-300 my-auto inline-flex lucide-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </button>
        </Link>
      </div>
      <FooterThird ></FooterThird>
    </div>
  );
};

export default Home;
