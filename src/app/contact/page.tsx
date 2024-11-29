import { Container } from "@mui/material";
import React from "react";
import heroimage from "../../../public/heroimage.svg";
import finger from "../../../public/fingertouch.svg";
import location from "../../../public/locationicon.svg";
import phone from "../../../public/phoneicon.svg";
import Image from "next/image";
import AnimatedWrapper from "@/components/MotionWrapper";
import Link from "next/link";
import ExploreButton from "@/components/Buttons";

function ContactUs() {
  return (
    <div>
      <Container maxWidth="xl">
        <div>
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

          {/* Lets get in touch */}
          <div className="flex my-36 flex-col lg:flex-row gap-10 lg:justify-between ">
            {/* Detail Section */}
            <div className="xl:w-[50%] lg:w-[45%] w-full   flex flex-col items-center lg:items-start flex-shrink px-4 lg:px-0 xl:pl-24">
              <div>
                <div className="mb-20">
                  <AnimatedWrapper from="bottom" initialY={50}>
                    <h2 className="text-white text-left">Lets Get in touch</h2>
                  </AnimatedWrapper>
                  <p className="text-[#B4B4B4] mt-4 max-w-[60ch]">
                    Avoids pleasure itself, because it is pleasure, but because
                    those who do not know how to pursue pleasure rationally
                    encounter
                  </p>
                </div>
                <div className="flex flex-col gap-10">
                  <div className="flex gap-6 items-start">
                    <div className="relative w-[29px] h-[44px]">
                      <Image
                        src={finger}
                        alt="chatus img"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain object-center"
                      />
                    </div>
                    <AnimatedWrapper from="left">
                      <h3 className="lg:text-xl md:text-lg ">Chat to us</h3>
                      <p className="text-[#B4B4B4] mt-2">
                        contactus@techtics.ai
                      </p>
                    </AnimatedWrapper>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="relative w-[29px] h-[44px]">
                      <Image
                        src={location}
                        alt="chatus img"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain object-center"
                      />
                    </div>
                    <AnimatedWrapper from="left" amount={0.5}>
                      <h3 className="lg:text-xl md:text-lg ">
                        Visit our Office Branch
                      </h3>
                      <p className="text-[#B4B4B4] mt-2">NFC Society, Lahore</p>
                    </AnimatedWrapper>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="relative w-[29px] h-[44px]">
                      <Image
                        src={phone}
                        alt="chatus img"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain object-center animate-pulse duration-1000"
                      />
                    </div>
                    <AnimatedWrapper from="left" amount={1}>
                      <h3 className="lg:text-xl md:text-lg ">CALL US</h3>
                      <p className="text-[#B4B4B4] mt-2">+92 334 4598931</p>
                    </AnimatedWrapper>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <AnimatedWrapper
              from="bottom"
              amount={0.4}
              duration={1.5}
              scale={0.9}
              className="xl:w-[50%] lg:w-[50%] w-full hover:border-4 border-yellow-400 "
            >
              <div
                className="w-full p-12 mt-16 lg:mt-0"
                style={{
                  background:
                    "linear-gradient(130.86deg, #FFFFFF 26.72%, #FEFC30 79.18%, #41FE51 96.97%)",
                }}
              >
                <div className="mb-14">
                  <h3 className="text-black ">
                    Got Ideas/ We&apos;ve Got the skills <br />
                    le&apos;ts work together.
                  </h3>
                  <p className="text-black mt-4 ">
                    Tell us More about Yourself!
                  </p>
                </div>
                <form action="" className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="text-black focus:outline-none border border-black w-full px-6 py-3 placeholder-black bg-transparent"
                  ></input>
                  <input
                    type="text"
                    placeholder="Your Mobile No."
                    className=" text-black focus:outline-none border border-black w-full px-6 py-3 placeholder-black bg-transparent"
                  ></input>
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="text-black focus:outline-none border border-black w-full px-6 py-3 placeholder-black bg-transparent"
                  ></input>
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    className="text-black focus:outline-none border border-black w-full px-6 py-3 placeholder-black bg-transparent"
                  ></textarea>
                  <button className="uppercase bg-[#111058] tracking-widest w-full text-center py-4 hover:bg-[#3734c8] transition-colors duration-500 ease-in-out">
                    Submit
                  </button>
                </form>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactUs;
