"use client";

import { Container } from "@mui/material";
import React, { useRef } from "react";
import heroimage from "../../../public/heroimage.svg";

import PortfoliomainSection from "@/components/PortfoliomainSections";
import brain from "../../../public/brain.svg";
import vision from "../../../public/eye.svg";
import Analytics from "../../../public/Dataanalytics.svg";
import otherproduct from "../../../public/otherproduct.svg";
import LeaveaReply from "@/components/LeaveaReply";
import img1 from "../../../public/NLP.png";
import img2 from "../../../public/portfolioimg2.png";
import img3 from "../../../public/portfolioimg3.png";
import img4 from "../../../public/portfolioimg4.png";
import { useInView } from "motion/react";
import AnimatedWrapper from "@/components/MotionWrapper";
import Link from "next/link";
import ExploreButton from "@/components/Buttons";
import "@/components/button.css";

function Portfolio() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const isinView1 = useInView(ref1, { amount: 0.1 });
  const isinView2 = useInView(ref2, { amount: 0.1 });
  const isinView3 = useInView(ref3, { amount: 0.1 });
  const isinView4 = useInView(ref4, { amount: 0.1 });

  return (
    <div
      className={`${isinView1 && "bg-blue-700"} ${isinView2 && "bg-teal-500"} ${
        isinView3 && "bg-green-900"
      } ${
        isinView4 && "bg-inherit "
      } transition-colors duration-500 animate-in`}
    >
      <Container maxWidth="xl">
        {/* hero section */}
        <div
          style={{
            backgroundImage: `url(${heroimage.src})`,
            // height: "calc(100vh - 96px)",
            height: "860px",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex justify-center items-start rounded-3xl overflow-hidden flex-col "
        >
          <div className="flex flex-col justify-end items-center gap-8 relative  h-1/2 w-full">
            <AnimatedWrapper from="left" delay={0.3} duration={1.3}>
              <div className="font-Michroma lg:text-4xl md:text-2xl text-lg uppercase  text-center semibold tracking-tight">
                advanced ai & <br /> data technology
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper from="top" duration={1.3}>
              <p className="font-Montserrat text-sm md:text-base lg:text-lg font-medium text-center max-w-[70ch] px-6">
                Welcome to Techtics.ai, your premier destination for
                cutting-edge AI solutions. With expertise in Computer Vision,
                Image Processing, Natural Language Processing, Generative AI,
                Data Analytics, and Pattern Recognition...
              </p>
            </AnimatedWrapper>

            {/* Custom Button */}
            <AnimatedWrapper from="bottom" delay={0.4} duration={1.3}>
              <Link href="/Services">
                <ExploreButton />
              </Link>
            </AnimatedWrapper>
          </div>

          <div className="flex justify-center w-full  items-center h-1/2 ">
            <AnimatedWrapper
              from="bottom"
              className=" h-full flex justify-center w-full  items-center"
              delay={0.7}
              duration={1.3}
            >
              <div
                style={{
                  backgroundImage: `url('/robohand.svg')`,
                  // width: "327px",
                  // height: "252px",
                  // backgroundPosition: "bottom",
                  backgroundSize: "contain",
                  mixBlendMode: "screen",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-1/2 min-[700px]:w-1/3  lg:w-[22%] aspect-square "
              ></div>
            </AnimatedWrapper>
          </div>
        </div>

        {/* team reserch credentials */}
        <div>
          <h2 className="mb-10 lg:mb-20 mt-36">
            AI Teams Research Credentials
          </h2>
          <div className="flex flex-wrap justify-center gap-y-6">
            <div className="lg:w-1/4 w-1/2   flex flex-col items-center flex-shrink-0">
              {/* <div className="w-3/4 md:w-1/2 lg:w-3/4 aspect-square  relative ">
                <Image
                  src={manager}
                  alt="manager"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-center object-cover rounded-full bg-[#B0F4FF]"
                />
              </div> */}
              <div className="flex flex-col items-center  w-full lg:mt-10 mt-2 py-6 border-r border-r-[#FFFFFF]">
                <h2 className="text-white">15+</h2>
                <div className="uppercase text-[#B4B4B4] tracking-wider">
                  awards
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 w-1/2   flex flex-col items-center">
              {/* <div className="w-3/4 md:w-1/2 lg:w-3/4 aspect-square  relative ">
                <Image
                  src={manager}
                  alt="manager"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-center object-cover rounded-full bg-[#B0F4FF]"
                />
              </div> */}
              <div className="flex flex-col items-center  w-full lg:mt-10 mt-2 py-6 lg:border-r lg:border-r-[#FFFFFF]">
                <h2 className="text-[#B0F4FF]">10+</h2>
                <div className="uppercase tracking-wider font-semibold">
                  phds
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 w-1/2    flex flex-col items-center">
              {/* <div className="w-3/4 md:w-1/2 lg:w-3/4 aspect-square  relative ">
                <Image
                  src={manager}
                  alt="manager"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-center object-cover rounded-full bg-[#B0F4FF]"
                />
              </div> */}
              <div className="flex flex-col items-center  w-full lg:mt-10 mt-2 py-6 border-r border-r-[#FFFFFF]">
                <h2 className="text-white">2+</h2>
                <div className="uppercase text-[#B4B4B4] tracking-wider">
                  Patents
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 w-1/2    flex flex-col items-center">
              {/* <div className="w-3/4 md:w-1/2 lg:w-3/4 aspect-square  relative ">
                <Image
                  src={manager}
                  alt="manager"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-center object-cover rounded-full bg-[#B0F4FF]"
                />
              </div> */}
              <div className="flex flex-col items-center  w-full lg:mt-10 mt-2 py-6 ">
                <h2 className="text-white">200+</h2>
                <div className="uppercase text-[#B4B4B4] tracking-wider text-center">
                  Research Articles
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wrapper */}
        <div className="flex flex-col gap-28 lg:gap-0 mb-28 lg:mb-0 mt-36">
          {/* NLP */}
          <div className="mb-[27rem] lg:mb-72 mt-10 relative " ref={ref1}>
            <PortfoliomainSection
              heading="Natural Language Processing"
              body="Explore new horizons with our advanced NLP and Generative AI projects, revolutionizing language understanding and content generation for boundless possibilities."
              iconimg={brain}
              mainimg={img1}
              custombutton="portfoliobutton1 button"
            />
          </div>

          {/* Computer vision */}
          <div className="mb-[27rem] lg:mb-72 mt-10 relative" ref={ref2}>
            <PortfoliomainSection
              heading="Computer Vision"
              body="Discover groundbreaking advancements in our Computer Vision and Image Processing initiatives, revealing concealed insights and utilizing visual intelligence for advantageous actionable results."
              iconimg={vision}
              mainimg={img2}
              custombutton="button portfoliobutton2"
            />
          </div>

          {/* Data Analytics */}
          <div className="mb-[27rem] lg:mb-72 mt-10 relative" ref={ref3}>
            <PortfoliomainSection
              heading="Data Analytics"
              body="Unleash the potential of your data with our state-of-the-art Analytics and Visualization projects, empowering informed decision-making through valuable insights"
              iconimg={Analytics}
              mainimg={img3}
              custombutton="button portfoliobutton3"
            />
          </div>

          {/* Other Products */}
          <div className="mb-[27rem] lg:mb-72 mt-10 relative" ref={ref4}>
            <PortfoliomainSection
              heading="Other Products"
              body="We offer ourselves as Technology Partner for Product Development. Our existing products are Retail Viewlytics Pro, AgriWheels, LogiBot: LLM based Chatbot"
              iconimg={otherproduct}
              mainimg={img4}
              custombutton="button portfoliobutton4"
            />
          </div>
        </div>

        {/* Leave a reply */}
        <div className="mb-36">
          <LeaveaReply />
        </div>
      </Container>
    </div>
  );
}

export default Portfolio;
