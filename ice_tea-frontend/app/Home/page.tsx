"use client";
import { CardStack } from "@/components/ui/card-stack";
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
        <button className="whiteshimmerbtn  mt-[2%]" type="button">
          <style jsx>{`
            .whiteshimmerbtn {
              min-width: 130px;
              height: 40px;
              color: #121111;
              padding: 1px 10px;
              cursor: pointer;
              transition: all 0.3s ease;
              position: relative;
              display: inline-block;
              outline: none;
              border-radius: 25px;
              border: none;
              background: linear-gradient(45deg, #ffffff, #e9ecef);
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              z-index: 1;
              overflow: hidden;
            }

            .whiteshimmerbtn:before {
              content: "";
              position: absolute;
              top: -50%;
              left: -50%;
              width: 200%;
              height: 200%;
              background: linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0)
              );
              transform: rotate(45deg);
              transition: all 0.5s ease;
              z-index: -1;
            }

            .whiteshimmerbtn:hover:before {
              top: -100%;
              left: -100%;
            }

            .whiteshimmerbtn:after {
              border-radius: 25px;
              position: absolute;
              content: "";
              width: 0;
              height: 100%;
              top: 0;
              z-index: -1;
              box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
                7px 7px 20px 0px rgba(0, 0, 0, 0.1),
                4px 4px 5px 0px rgba(0, 0, 0, 0.1);
              transition: all 0.3s ease;
              background: linear-gradient(45deg, #f8f9fa, #ced4da);
              right: 0;
            }

            .whiteshimmerbtn:hover:after {
              width: 100%;
              left: 0;
            }

            .whiteshimmerbtn:active {
              top: 2px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
              background: linear-gradient(45deg, #ffffff, #e9ecef);
            }

            .whiteshimmerbtn span {
              position: relative;
              z-index: 2;
            }
          `}</style>

          <span className="text-sm font-medium">
            Download VS Code Extension
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
