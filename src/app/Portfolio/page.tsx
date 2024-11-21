import { Container } from "@mui/material";
import React from "react";
import Image from "next/image";
import heroimage from "../../../public/heroimage.svg";

import Aboutussection from "@/components/Aboutussection";
import brain from "../../../public/brain.svg";
import vision from "../../../public/eye.svg";
import Analytics from "../../../public/Dataanalytics.svg";
import otherproduct from "../../../public/otherproduct.svg";
import LeaveaReply from "@/components/LeaveaReply";
import img1 from "../../../public/portfolioimg1.jpg";
import img2 from "../../../public/portfolioimg2.jpg";
import img3 from "../../../public/portfolioimg3.jpg";
import img4 from "../../../public/portfolioimg4.jpg";

function Portfolio() {
  return (
    <div>
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
            <div className="font-Michroma lg:text-4xl md:text-2xl text-lg uppercase  text-center semibold tracking-tight">
              advanced ai & <br /> data technology
            </div>
            <p className="font-Montserrat text-sm md:text-base lg:text-lg font-medium text-center max-w-[70ch] px-6">
              Welcome to Techtics.ai, your premier destination for cutting-edge
              AI solutions. With expertise in Computer Vision, Image Processing,
              Natural Language Processing, Generative AI, Data Analytics, and
              Pattern Recognition...
            </p>
            <button className="bg-gradient-to-br from-[#0056F8] to-[#45E7FF] text-white font-Montserrat font-semibold tracking-widest rounded-sm px-10 py-3 uppercase mb-4">
              Start Exploring
            </button>
          </div>

          <div className="flex justify-center w-full  items-center h-1/2">
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
              className="w-1/2 min-[700px]:w-1/3  lg:w-1/4 aspect-square "
            ></div>
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
                <div className="uppercase text-[#B4B4B4] tracking-wider">
                  Research Articles
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wrapper */}
        <div className="flex flex-col gap-28 lg:gap-0 mb-28 lg:mb-0 mt-36">
          {/* NLP */}
          <div className="mb-[27rem] lg:mb-72 mt-10 relative">
            <Aboutussection
              heading="Natural Language Processing"
              body="Explore new horizons with our advanced NLP and Generative AI projects, revolutionizing language understanding and content generation for boundless possibilities."
              iconimg={brain}
              mainimg={img1}
            />
          </div>

          {/* Computer vision */}
          <div className="mb-[27rem] lg:mb-72 mt-10 relative">
            <Aboutussection
              heading="Computer Vision"
              body="Discover groundbreaking advancements in our Computer Vision and Image Processing initiatives, revealing concealed insights and utilizing visual intelligence for advantageous actionable results."
              iconimg={vision}
              mainimg={img2}
            />
          </div>

          {/* Data Analytics */}
          <div className="mb-[27rem] lg:mb-72 mt-10 relative">
            <Aboutussection
              heading="Data Analytics"
              body="Unleash the potential of your data with our state-of-the-art Analytics and Visualization projects, empowering informed decision-making through valuable insights"
              iconimg={Analytics}
              mainimg={img3}
            />
          </div>

          {/* Other Products */}
          <div className="mb-[27rem] lg:mb-72 mt-10 relative">
            <Aboutussection
              heading="Other Products"
              body="We offer ourselves as Technology Partner for Product Development. Our existing products are Retail Viewlytics Pro, AgriWheels, LogiBot: LLM based Chatbot"
              iconimg={otherproduct}
              mainimg={img4}
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
