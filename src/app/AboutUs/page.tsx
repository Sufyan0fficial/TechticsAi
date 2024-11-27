import React from "react";
import heroimage from "../../../public/aboutusmain.svg";
import { Container } from "@mui/material";
import divider1 from "../../../public/divider1.svg";
import divider2 from "../../../public/divider2.svg";
import divider3 from "../../../public/divider3.svg";
import Image from "next/image";
import LeaveaReply from "@/components/LeaveaReply";
import SwiperCarousel from "@/components/TeamSwiperCarousel";
import AboutusComp from "@/components/AboutusComp";
import OurProcess from "@/components/OurProcess";

function AboutUs() {
  return (
    <div>
      {/* hero section */}
      <div
        style={{
          backgroundImage: `url(${heroimage.src})`,
          //   height: "calc(100vh - 96px)",
          height: "1080px",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex justify-center items-start  overflow-hidden "
      >
        <div className="flex flex-col justify-center items-center gap-8 relative mt-[242px]">
          <div className="font-Michroma lg:text-4xl md:text-2xl text-lg uppercase  text-center semibold tracking-tight">
            Transform From <br />{" "}
            <span className="text-[#3CD3FE]">disruption to innovation</span>
          </div>
          <p className="font-Montserrat text-sm md:text-base lg:text-lg font-medium text-center max-w-[70ch] px-6">
            Welcome to Techtics.ai, your premier destination for cutting-edge AI
            solutions. With expertise in Computer Vision, Image Processing,
            Natural Language Processing, Generative AI, Data Analytics, and
            Pattern Recognition...
          </p>
          {/* <button className="bg-gradient-to-br from-[#0056F8] to-[#45E7FF] text-white font-Montserrat font-semibold tracking-widest rounded-sm px-10 py-3 uppercase mb-4">
            Start Exploring
          </button> */}
          {/* <div className="flex justify-center w-full  items-center ">
              <div
                style={{
                  backgroundImage: `url('/robohand.svg')`,
                  width: "327px",
                  height: "252px",
                  backgroundPosition: "bottom",
                  backgroundSize: "contain",
                  mixBlendMode: "screen",
                }}
                className="absolute   "
              ></div>
            </div> */}
        </div>
      </div>
      <Container maxWidth="xl">
        {/* About us section */}
        <div className="mb-52">
          <AboutusComp />
        </div>

        {/* Our Process section */}
        <OurProcess />

        {/* Process Timeline */}
        <div className="lg:mt-60 mt-36  mb-36">
          <h2>Process Timeline</h2>
          <div className="flex  lg:mt-36 mt-16 flex-wrap xl:flex-nowrap gap-6 items-center justify-center">
            <div className="w-[265px]  flex-shrink-0 xl:flex-shrink ">
              <h3 className=" text-[#54E8FF] leading-tight text-center ">
                Discovery <br />
                Workshop
              </h3>
              <div className="relative w-full h-[19px] my-3">
                <Image
                  src={divider1}
                  alt="divider"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain object-left "
                />
              </div>
              <p className="font-extrabold  tracking-widest text-center">
                1-2 WEEKS
              </p>
            </div>
            <div className=" w-[337px]  flex-shrink-0 xl:flex-shrink">
              <h3 className="text-center text-[#54E8FF] leading-tight">
                Proof of <br />
                Concept
              </h3>
              <div className="relative w-full h-[19px] my-3">
                <Image
                  src={divider2}
                  alt="divider"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain object-left "
                />
              </div>
              <p className="font-extrabold text-center tracking-widest">
                6-10 WEEKS
              </p>
            </div>
            <div className="w-full  md:w-[537px] flex-shrink-0 xl:flex-shrink">
              <h3 className="text-center text-[#54E8FF] leading-tight">
                Development <br />& Deployment
              </h3>
              <div className="relative w-full h-[19px] my-3">
                <Image
                  src={divider3}
                  alt="divider"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain object-left"
                />
              </div>
              <p className="font-extrabold text-center tracking-widest">
                7-10 MONTHS
              </p>
            </div>
            <div className="w-[350px]   flex-shrink-0 xl:flex-shrink">
              <h3 className="text-center text-[#54E8FF] leading-tight ">
                After Go <br />
                Live Support
              </h3>
              <div className="relative w-full h-[19px] my-3">
                <Image
                  src={divider2}
                  alt="divider"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain object-left "
                />
              </div>
              <p className="font-extrabold text-center tracking-widest">
                2-4 WEEKS
              </p>
            </div>
          </div>
        </div>

        {/* Meet our best team */}

        <div>
          <h2>Meet our Best Team</h2>
          <SwiperCarousel />
        </div>

        {/* Leave a reply  */}
        <div className="pb-20">
          <LeaveaReply />
        </div>
      </Container>
    </div>
  );
}

export default AboutUs;
