"use client";
import { CardStack } from "@/components/ui/card-stack";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/modern-ui/avatar";
import Marquee from "react-fast-marquee";
import { AvatarGroup } from "@/components/modern-ui/avatar-group";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import FooterThird from "@/components/serenity-ui/Footer";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Lenis from "lenis";

const Home = () => {
  const cards = [
    {
      id: 0,
      name: "",
      designation: "",
      content: (
        <Image
          src="/Images/Sakura.png"
          alt="saku"
          width={584}
          height={386}
          className="sm:h-[195px] sm:w-[333px] md:h-[196px] md:w-[334px] lg:h-[386px] lg:w-[584px] rounded-md"
          priority
        />
      ),
    },
    {
      id: 1,
      name: "",
      designation: "",
      content: (
        <Image
          src="/Images/Miku.png"
          alt="miku"
          width={584}
          height={386}
          className="sm:h-[195px] sm:w-[333px] md:h-[196px] md:w-[334px] lg:h-[386px] lg:w-[584px] rounded-md"
          priority
        />
      ),
    },
    {
      id: 2,
      name: "",
      designation: "",
      content: (
        <Image
          src="/Images/Gojo Freeze.png"
          alt="gojo"
          width={584}
          height={386}
          className="sm:h-[195px] sm:w-[333px] md:h-[196px] md:w-[334px] lg:h-[386px] lg:w-[584px] rounded-md"
          priority
        />
      ),
    },
    {
      id: 3,
      name: "",
      designation: "",
      content: (
        <Image
          src="/Images/Polar.png"
          alt="polar"
          width={584}
          height={386}
          className="sm:h-[195px] sm:w-[333px] md:h-[196px] md:w-[334px] lg:h-[386px] lg:w-[584px] rounded-md"
          priority
        />
      ),
    },
  ];

  const testimonials = [
    {
      author: {
        name: "viraj ved",
        handle: "",
        avatar: "/Images/hotplate.jpg",
      },
      text: "I personally like Miku, Gives a retro vibes and evergarden feels more earthy cozy & homey Not much heavy on eyes",
      href: "",
    },
    {
      author: {
        name: "Iddu",
        handle: "",
        avatar: "/Images/iddu.jpg",
      },
      text: "The Gojo freeze, Miku and Polar i really liked these themes the rests are just not for me",
      href: "",
    },
    {
      author: {
        name: "karan",
        handle: "",
        avatar: "/Images/inumaki.jpg",
      },
      text: "The Naruto theme, i was founding it but it was just not the same but yours one is just exactly what i imagined it to be",
      href: "",
    },
    {
      author: {
        name: "Arya",
        handle: "",
        avatar: "/Images/pinkGirl.jpg",
      },
      text: "The sakura one is calm and it reminds me of spring and also dim not so bright which i like ",
      href: "",
    },
    {
      author: {
        name: "Sakshi",
        handle: "",
        avatar: "/Images/standing.jpg",
      },
      text: "I really like the vibes the themes give especially the miku one it's my favourite ,its kind of like cyberpunk",
      href: "",
    },
    {
      author: {
        name: "Sofia",
        handle: "",
        avatar: "/Images/staring.jpg",
      },
      text: "Evergarden just hits home it gives that feeling which makes one feel at ease and code",
      href: "",
    },
  ];


  useEffect(() => {
    const scroller = new Lenis();
    const rf = requestAnimationFrame(raf);
    function raf(time: DOMHighResTimeStamp) {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }

    return () => {
    cancelAnimationFrame(rf);
    scroller.destroy();
  };
  }, []);

  const fadeSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: fadeSectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7], [1, 1, 0.35]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.7], [1, 1, 0.92]);

  return (
    <div className="relative flex bg-[#110921] flex-col min-h-screen overflow-x-hidden font-[family-name:var(--font-bricolage-grotesque)]">
      <div className="sm:w-[150px] sm:h-[150px] sm:mt-[25%] sm:ml-[-10%] md:w-[300px] md:h-[300px]  blur-[50px] bg-[#1a304bc5] absolute left-[-10%]  md:mt-[12%] rotate-45 z-0"></div>
      <div className="sm:w-[260px] sm:h-[260px]  md:w-[200px] md:h-[200px] sm:mt-[130%] md:mt-[109%] lg:mt-[39%]  blur-[50px]  bg-[#2D0A44] absolute sm:right-[-42%] md:right-[-7%]  rounded-full rotate-[-30deg] z-0"></div>
      <motion.div
        ref={fadeSectionRef}
        style={{
          opacity,
          scale,
          transformOrigin: "top center",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="relative sm:flex sm:justify-center">
          <div className="sm:mt-[100%] sm:mx-auto md:ml-[52%] lg:ml-[59%] md:mt-[24%] z-10 lg:mt-[10%]">
            <CardStack items={cards} />
          </div>
        </div>
        <div className="z-10 sm:ml-[12%] sm:mt-[-135%] md:mt-[-26%] lg:mt-[-10%] md:ml-[5%] lg:ml-[7%] space-y-2">
          <h1 className="  sm:text-5xl md:text-5xl lg:text-7xl text-white">
            Code in Style
          </h1>
          <h2 className="sm:text-xl  md:text-xl lg:text-3xl text-white/80 ">
            <span className="text-purple-400 ">Anime</span>-Inspired Themes That
            <br></br> Bring Your Editor to Life!
          </h2>

          <div className="sm:flex-row sm:mt-5 sm:ml-[13%] sm:justify-center md:inline-flex mt-[2%] md:ml-0 space-x-6">
            <Link href="https://marketplace.visualstudio.com/items?itemName=AlfiNikhat.iced-tea" target="_blank">
              <button className="group sm:p-2 sm:pl-3 sm:pr-3 md:p-1 md:pl-1.5 md:pr-1  lg:p-1.5 lg:pl-3 lg:pr-3 flex gap-3 justify-center shadow-xs cursor-pointer hover:border-white/15 hover:bg-white/7 rounded-md bg-white/5 border border-white/10">
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
            </Link>

            <Link href="/review">
              <button className="group sm:p-2 sm:pl-3 sm:pr-7  lg:p-1.5 lg:pl-3 lg:pr-3 md:p-1 md:pl-1.5 md:pr-1 flex gap-3 justify-center shadow-md cursor-pointer hover:bg-purple-500/85 rounded-md bg-purple-500/80 transition-all duration-300">
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
                  className="lucide sm:translate-x-4 md:translate-x-0
               text-white md:group-hover:translate-x-1 sm:group-hover:translate-x-5 transition-all duration-300 my-auto inline-flex lucide-move-right-icon lucide-move-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
          <div className="mt-[16%] sm:ml-[-10%] md:ml-0 md:mt-[2%] flex space-x-3">
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
            <div className="flex items-center sm:ml-1.5 md:ml-3">
              <span className="sm:text-[15px] md:text-[16px] text-white/70">
                Used by
                <span className="font-bold text-white pl-1 pr-1"> 100+ </span>
                developers
              </span>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-white font-bold text-center px-2 sm:mt-80 md:mt-[321px] text-2xl sm:text-3xl md:text-4xl"
      >
        <span>
          What the <span className="text-cyan-300">Otaku Coders</span>
          <span className="block sm:inline"> Are Raving About Us</span>
        </span>
      </motion.h2>
      <span className="sm:text-sm md:text-2xl flex text-white mt-3 justify-center text-center px-2">
        Themes With <span className="ml-1 mr-1 text-purple-400">Vibes</span>
      </span>
      <div className="relative z-10 mt-16 mb-24 sm:mt-24 sm:mb-32">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[100px] sm:w-[200px] md:w-[300px] bg-gradient-to-r from-[#110921] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[100px] sm:w-[200px] md:w-[300px] bg-gradient-to-l from-[#110921] to-transparent z-20" />
        <Marquee
          pauseOnHover={true}
          gradient={false}
          loop={0}
          speed={60}
          autoFill={true}
          className="w-full"
        >
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div key={idx} className="mx-2 sm:mx-4 w-[260px] sm:w-[320px]">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Marquee>
      </div>
      {/* Social Buttons Section */}
      <div className="sm:flex-row mb-40 sm:mt-5 sm:ml-[13%] sm:justify-center md:inline-flex mt-[2%] md:ml-0 space-x-6">
        <Link target="_blank" href="https://x.com/iceteaThemes">
          <button className="group ml-[10%] md:ml-0 p-1.5 pl-3 pr-3 flex gap-3 justify-center shadow-md cursor-pointer hover:bg-purple-500/85 rounded-md bg-purple-500/80 transition-all duration-300">
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
          <button className="group ml-[14%] md:ml-0  p-1.5 pl-3 pr-3 flex gap-3 justify-center shadow-xs cursor-pointer hover:border-white/15 hover:bg-white/7 rounded-md bg-white/5 border border-white/10">
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
      <FooterThird />
    </div>
  );
};

export default Home;
