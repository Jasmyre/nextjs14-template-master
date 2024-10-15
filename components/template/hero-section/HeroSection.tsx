import React from "react";
import "@/app/globals.css";
import { TypoH1, TypoP } from "../../Typography";

export const HeroSectionBlissBrew = () => {
  return (
    <div
      id="hero_section"
      className="z-[-1] relative before:absolute before:w-full before:h-full before:bg-black/[0.75] before:top-0 before:left-0 min-h-[90vh] bg-center bg-cover bg-[url('/hero_image.png')] "
    >
      <div
        id="hero_section_wrapper"
        className="text-center container max-w-screen-xl mx-auto z-[9999] flex flex-col justify-end items-center relative h-[90vh] pb-20"
      >
        <h1 className="font-bold text-6xl text-white my-6">
          Every Sip is a Moment of Bliss
        </h1>
        <p className="text-white text-2xl">
          A cozy coffee shop in downtown where you can enjoy high-quality
          beverages and snacks in a relaxing environment.
        </p>
      </div>
    </div>
  );








  
};

const HeroSection = () => {
  return (
    <div
      id="Hero_section"
      className="scroll-m-20 border-b bg-box"
    >
      <div
        id="hero_section_wrapper"
        className="container max-w-screen-lg mx-auto min-h-[85vh] px-6 py-20 text-center flex flex-col justify-center items-center"
      >
        <TypoH1 className="animate-[float-up_both_1s_ease]">
          Dep<strong className="text-primary">ED</strong> Department of Education.
        </TypoH1>
        <TypoP className="animate-[float-up_both_1s_ease]">
        Through various initiatives, the department strives to improve teaching methodologies, curriculum development, and infrastructure, ultimately contributing to the nation's educational advancement.
        </TypoP>
      </div>
    </div>
  );
};

export default HeroSection;
