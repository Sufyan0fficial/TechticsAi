import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import heroimage from "../../public/heroimage.svg";
import chatimg from "../../public/chatimage.svg";
import brainlikeimg from "../../public/brainlikeimg.svg";
import product from "../../public/product.svg";
import blueprint from "../../public/blueprint.svg";
import accelerator from "../../public/accelerator.svg";
import Cplusplus from "../../public/c++.svg";
import ShadcnCarousel from "./Carousel";
import AboutusComp from "./AboutusComp";
import ExploreButton from "./Buttons";
import Link from "next/link";
import AnimatedWrapper from "./MotionWrapper";

function Home() {
  return (
    <div className="overflow-hidden">
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
        {/* Unlock power of your brand */}

        <div className="mb-16 lg:mb-44 mt-10 relative">
          <h2 className="mb-10">Unlock the power of your brand</h2>

          <AboutusComp />
        </div>

        {/* team section */}
        <div className="flex flex-col gap-6 pt-36 lg:pt-0 ">
          <AnimatedWrapper
            from="bottom"
            initialY={30}
            amount={0.3}
            opacity={0.5}
          >
            <h2 className="font-Michroma text-[#45E7FF]  uppercase text-center">
              Highly Regarded Team
            </h2>
          </AnimatedWrapper>
          <AnimatedWrapper
            from="bottom"
            initialY={20}
            amount={0.5}
            opacity={0.5}
          >
            <p className="font-Montserrat md:text-lg text-sm text-white text-center ">
              We stand prepared to address your business challenges.
            </p>
          </AnimatedWrapper>
          <div className="flex flex-wrap justify-center items-stretch gap-10 md:gap-0 md:mt-6 mt-2 ">
            <AnimatedWrapper
              className="lg:w-1/3 md:w-1/2 w-full  flex justify-center items-center flex-col md:gap-10 gap-6 "
              from="left"
              initialX={-50}
            >
              <div
                className="lg:w-[200px] lg:h-[200px] md:w-[170px] md:h-[170px] w-[120px] h-[120px] flex justify-center items-center "
                style={{
                  backgroundImage: `url('/frame.svg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative w-[78px] lg:h-[108px]  md:h-[85px] h-[62px]">
                  <Image
                    src="/award.svg"
                    alt="award"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-center object-contain"
                  />
                </div>
              </div>
              <div className="w-full">
                <h1 className="font-Michroma lg:text-4xl md:text-2xl text-lg  text-[#5EF5FF] text-center w-full font-light">
                  50+
                </h1>
                <p className="font-Montserrat text-whtie font-semibold  uppercase tracking-widest md:mt-3 mt-2 text-center w-full md:text-2xl ">
                  Active users
                </p>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper
              className="lg:w-1/3 md:w-1/2 w-full  flex justify-center items-center flex-col md:gap-10 gap-6 "
              from="left"
              initialX={-50}
              delay={0.5}
            >
              <div
                className="lg:w-[200px] lg:h-[200px] md:w-[170px] md:h-[170px] w-[120px] h-[120px] flex justify-center items-center"
                style={{
                  backgroundImage: `url('/frame.svg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative w-[140px] lg:h-[154px]  md:h-[75px] h-[52px] ">
                  <Image
                    src="/graduated.svg"
                    alt="graduated"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-center object-contain"
                  />
                </div>
              </div>
              <div className="w-full">
                <h1 className="font-Michroma lg:text-3xl md:text-2xl text-lg  text-[#5EF5FF] text-center w-full ">
                  10+ PHDS
                </h1>
                <p className="font-Montserrat text-whtie font-semibold  uppercase tracking-widest md:mt-3 mt-2 text-center w-full md:text-2xl ">
                  Subject Matter Experts
                </p>
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper
              className="lg:w-1/3 md:w-1/2 w-full  flex justify-center items-center flex-col md:gap-10 gap-6 md:mt-10 lg:mt-0"
              from="left"
              initialX={-50}
              delay={1}
            >
              <div
                className="lg:w-[200px] lg:h-[200px] md:w-[170px] md:h-[170px] w-[120px] h-[120px] flex justify-center items-center"
                style={{
                  backgroundImage: `url('/frame.svg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative w-[97px] lg:h-[79px]  md:h-[68px] h-[47px]">
                  <Image
                    src="/diamond.svg"
                    alt="award"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-center object-contain"
                  />
                </div>
              </div>
              <div className="w-full">
                <h1 className="font-Michroma lg:text-4xl md:text-2xl text-lg  text-[#5EF5FF] text-center w-full">
                  150M+
                </h1>
                <p className="font-Montserrat text-whtie font-semibold  uppercase tracking-widest md:mt-3 mt-2 text-center w-full md:text-2xl ">
                  Image Generated
                </p>
              </div>
            </AnimatedWrapper>
          </div>
        </div>

        {/* business solutions */}
        <div className="md:mb-36 md:mt-48 my-32">
          <AnimatedWrapper
            from="bottom"
            initialY={20}
            amount={0.5}
            opacity={0.5}
          >
            <h2 className="font-Michroma text-[#45E7FF]  uppercase text-center">
              Business Solutions
            </h2>
          </AnimatedWrapper>
          <div className="flex flex-wrap justify-center items-center   ">
            <AnimatedWrapper
              from="bottom"
              initialY={30}
              amount={0.5}
              opacity={0.5}
            >
              <h3 className="font-Michroma w-full text-center uppercase mt-16 mb-2 md:hidden ">
                <span className="text-[#45E7FF]">Natural Language</span> <br />
                <span>Processing</span>
              </h3>
            </AnimatedWrapper>

            <div className="flex items-center justify-between w-full md:mt-20 ">
              <AnimatedWrapper
                className="md:w-1/3 w-1/2 flex md:justify-center justify-start items-center"
                from="left"
                initialX={-40}
                amount={0.5}
              >
                <div
                  className="lg:w-[220px] lg:h-[220px] md:w-[180px] md:h-[180px] w-[160px] h-[160px] flex justify-center items-center"
                  style={{
                    backgroundImage: `url('/boxframe.svg')`,
                    backgroundSize: "cover",

                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="relative lg:w-[110px] lg:h-[110px] md:w-[85px] md:h-[85px] w-[70px] h-[70px] ">
                    <Image
                      src="/brain.svg"
                      alt="brain"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-center object-contain "
                    />
                  </div>
                </div>
              </AnimatedWrapper>
              <AnimatedWrapper
                from="bottom"
                initialY={20}
                amount={0.5}
                delay={0.6}
                className="md:w-1/3"
              >
                <h3 className="font-Michroma   text-center uppercase  hidden md:block">
                  <span className="text-[#45E7FF]">Natural Language</span>{" "}
                  <br />
                  <span>Processing</span>
                </h3>
              </AnimatedWrapper>
              <AnimatedWrapper
                className="md:w-1/3 w-1/2 flex md:justify-center justify-end  items-center"
                from="right"
                initialY={40}
                amount={0.5}
                delay={0.3}
              >
                <div
                  className="lg:w-[220px] lg:h-[220px] md:w-[180px] md:h-[180px] w-[160px] h-[160px] flex justify-center items-center"
                  style={{
                    backgroundImage: `url('/boxframe.svg')`,
                    backgroundSize: "cover",

                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="relative lg:w-[110px] lg:h-[110px] md:w-[85px] md:h-[85px] w-[70px] h-[70px] ">
                    <Image
                      src="/eye.svg"
                      alt="eye image"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-center object-contain "
                    />
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
            <ul className="flex justify-center items-center flex-wrap list-disc md:mt-6 text-xs md:text-sm 2xl:text-base">
              <li className="font-Montserrat font-medium md:w-1/2 w-full text-center md:text-end  md:pr-6 list-inside">
                Hampden-Sydney College in Virginia
              </li>

              <li className="font-Montserrat font-medium md:w-1/2 w-full text-center md:text-start list-inside md:pl-4">
                Hampden-Sydney College in Virginia
              </li>
              <li className="font-Montserrat font-medium md:w-1/2 w-full  text-center list-inside md:text-end md:pr-6">
                Hampden-Sydney College in Virginia
              </li>
              <li className="font-Montserrat font-medium md:w-1/2 w-full text-center md:text-start list-inside md:pl-4">
                Hampden-Sydney College in Virginia
              </li>
            </ul>
            <AnimatedWrapper
              className="md:w-1/3 flex justify-center items-center  md:mt-16 w-full"
              from="bottom"
              delay={0.3}
            >
              <div
                className="lg:w-[220px] lg:h-[220px] md:w-[180px] md:h-[180px] w-[160px] h-[160px]  flex justify-center items-center"
                style={{
                  backgroundImage: `url('/boxframe.svg')`,
                  backgroundSize: "cover",

                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="relative lg:w-[110px] lg:h-[110px] md:w-[85px] md:h-[85px] w-[70px] h-[70px] ">
                  <Image
                    src="/cloud.svg"
                    alt="cloud memory"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-center object-contain "
                  />
                </div>
              </div>
            </AnimatedWrapper>
            <div></div>
          </div>
        </div>

        {/* Engagement Models */}
        <div className="">
          <AnimatedWrapper
            from="bottom"
            initialY={20}
            amount={0.5}
            opacity={0.5}
          >
            <h2>Engagement Models</h2>
          </AnimatedWrapper>
          <div className="flex flex-col 2xl:gap-y-6 lg:gap-y-4 md:gap-y-5 md:mt-20 mt-10 ">
            <div className="flex md:flex-row flex-col md:justify-between w-full gap-6">
              <AnimatedWrapper
                from="left"
                className="w-full md:w-1/2 flex justify-center  md:items-start items-center gap-6 "
              >
                <div>
                  <h3 className="text-[#54E8FF]">Consultancy</h3>
                  <ul className="list-disc list-inside text-xs md:text-sm 2xl:text-base">
                    <li>Hampden-Sydney College in Virginia</li>
                    <li>Hampden-Sydney College in Virginia</li>
                  </ul>
                </div>
                <div
                  style={{
                    backgroundImage: `url('/frame.svg')`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                  className=" flex justify-center items-center lg:w-[200px] lg:h-[200px] md:w-[170px] md:h-[170px] w-[120px] h-[120px]"
                >
                  <div className="relative w-[125px] lg:h-[94px] md:h-[70px] h-[50px]">
                    <Image
                      src={chatimg}
                      alt="chatimage"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              </AnimatedWrapper>
              <AnimatedWrapper
                from="right"
                delay={0.5}
                className="w-full md:w-1/2 flex flex-row-reverse justify-center  md:items-start items-center gap-6"
              >
                <div>
                  <h3 className="text-[#54E8FF] ">Products</h3>
                  <ul className="list-disc list-inside text-xs md:text-sm 2xl:text-base ">
                    <li>Hampden-Sydney College in Virginia</li>
                    <li>Hampden-Sydney College in Virginia</li>
                  </ul>
                </div>
                <div
                  style={{
                    backgroundImage: `url('/framereverse.svg')`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                  className=" flex justify-center items-center lg:w-[200px] lg:h-[200px] md:w-[170px] md:h-[170px] w-[120px] h-[120px] "
                >
                  <div className="relative w-[125px] lg:h-[94px] md:h-[70px] h-[50px]">
                    <Image
                      src={product}
                      alt="chatimage"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
            <AnimatedWrapper
              // scale={1.2}
              amount={0.8}
              from="bottom"
              className="w-full flex justify-center items-center animate-pulse"
            >
              <div className="relative w-[250px] h-[250px] md:h-[px] lg:w-[280px] lg:h-[300px] min-[1400px]:h-[406px] md:-mt-9 -mb-6  lg:-mt-0 mt-10 ">
                <Image
                  src={brainlikeimg}
                  alt="brainimg"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-center object-contain  "
                />
              </div>
            </AnimatedWrapper>
            <div className="flex flex-col md:flex-row w-full md:-mt-[70px] min-[1400px]:-mt-96 gap-6">
              <AnimatedWrapper
                from="left"
                delay={0.3}
                className="w-full md:w-1/2 flex md:justify-start justify-center md:items-start items-center gap-6 "
              >
                <div>
                  <h3 className="text-[#54E8FF]">Accelerator</h3>
                  <ul className="list-disc list-inside text-xs md:text-sm 2xl:text-base">
                    <li>Hampden-Sydney College in Virginia</li>
                    <li>Hampden-Sydney College in Virginia</li>
                  </ul>
                </div>
                <div
                  style={{
                    backgroundImage: `url('/frame.svg')`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                  className=" flex justify-center items-center lg:w-[200px] lg:h-[200px] md:w-[170px] md:h-[170px] w-[120px] h-[120px]"
                >
                  <div className="relative w-[125px] lg:h-[94px] md:h-[70px] h-[50px]">
                    <Image
                      src={accelerator}
                      alt="chatimage"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              </AnimatedWrapper>

              <AnimatedWrapper
                from="right"
                delay={0.6}
                className="w-full md:w-1/2 flex flex-row-reverse md:justify-start md:items-start items-center justify-center gap-6  "
              >
                <div>
                  <h3 className="text-[#54E8FF]">Blueprint</h3>
                  <ul className="list-disc list-inside text-xs md:text-sm 2xl:text-base">
                    <li>Hampden-Sydney College in Virginia</li>
                    <li>Hampden-Sydney College in Virginia</li>
                  </ul>
                </div>
                <div
                  style={{
                    backgroundImage: `url('/framereverse.svg')`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                  className=" flex justify-center items-center lg:w-[200px] lg:h-[200px] md:w-[170px] md:h-[170px] w-[120px] h-[120px]"
                >
                  <div className="relative w-[125px] lg:h-[94px] md:h-[70px] h-[50px]">
                    <Image
                      src={blueprint}
                      alt="blueprint"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
          <div></div>
        </div>

        {/* Our Clients  */}
        <div className="mt-40 mb-36 md:mb-28 min-[1400px]:mt-72 ">
          <AnimatedWrapper from="bottom">
            <h2 className="text-white md:mb-16 mb-10">Our Partner / Clients</h2>
          </AnimatedWrapper>
          <div className="flex md:gap-6 gap-4 justify-center lg:gap-10 2xl:gap-14 flex-wrap items-center ">
            <div className="relative w-[83px] lg:h-[96px] md:h-[70px] h-[60px]  ">
              <Image
                src={Cplusplus}
                alt="C++img"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain object-center"
              />
            </div>
            <div className="relative w-[83px] lg:h-[96px] md:h-[70px] h-[60px]">
              <Image
                src={Cplusplus}
                alt="C++img"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain object-center"
              />
            </div>
            <div className="relative w-[83px] lg:h-[96px] md:h-[70px] h-[60px]">
              <Image
                src={Cplusplus}
                alt="C++img"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain object-center"
              />
            </div>
            <div className="relative w-[83px] lg:h-[96px] md:h-[70px] h-[60px]">
              <Image
                src={Cplusplus}
                alt="C++img"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain object-center"
              />
            </div>
            <div className="relative w-[83px] lg:h-[96px] md:h-[70px] h-[60px]">
              <Image
                src={Cplusplus}
                alt="C++img"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain object-center"
              />
            </div>
            <div className="relative w-[83px] lg:h-[96px] md:h-[70px] h-[60px]">
              <Image
                src={Cplusplus}
                alt="C++img"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain object-center"
              />
            </div>
            <div className="relative w-[83px] lg:h-[96px] md:h-[70px] h-[60px]">
              <Image
                src={Cplusplus}
                alt="C++img"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain object-center"
              />
            </div>
            <div className="relative w-[83px] lg:h-[96px] md:h-[70px] h-[60px]">
              <Image
                src={Cplusplus}
                alt="C++img"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain object-center"
              />
            </div>
            <div className="relative w-[83px] lg:h-[96px] md:h-[70px] h-[60px]">
              <Image
                src={Cplusplus}
                alt="C++img"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>

        {/* Clients Reviews */}
        <div className="mb-20  ">
          <AnimatedWrapper from="bottom">
            <h2 className="text-white pb-14">Our clients journey with us</h2>
          </AnimatedWrapper>
          <ShadcnCarousel />
        </div>
      </Container>
    </div>
  );
}

export default Home;
