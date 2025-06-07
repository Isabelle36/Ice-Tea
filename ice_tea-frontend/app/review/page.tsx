import SignupFormDemo from '@/components/signup-form-demo';
import React from 'react'

const page = () => {
  return (
    <div className="relative flex bg-[#110921] flex-col h-screen overflow-x-hidden font-[family-name:var(--font-bricolage-grotesque)]">
      <div className="sm:w-[150px] sm:h-[150px] sm:mt-[25%] sm:ml-[-10%] md:w-[300px] md:h-[300px]  blur-[50px] bg-[#1a304bc5] absolute left-[-10%]  md:mt-[12%] rotate-45 z-0"></div>
      <div className="sm:w-[260px] sm:h-[260px]  md:w-[200px] md:h-[200px] sm:mt-[130%] md:mt-[109%] lg:mt-[39%]  blur-[50px]  bg-[#2D0A44] absolute sm:right-[-42%] md:right-[-7%]  rounded-full rotate-[-30deg] z-0"></div>
      <h1 className="text-3xl text-white text-center">Your Review Matters</h1>
      <SignupFormDemo/>
    </div>
  )
}

export default page;
