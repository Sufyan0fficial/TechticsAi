import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";

function Home() {
  return (
    <div>
      <Container maxWidth="xl">
        {/* hero section */}

        <div
          style={{
            backgroundImage: `url('/heroimage.svg')`,
            height: "calc(100vh - 96px)",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex justify-center items-center rounded-3xl overflow-hidden "
        >
          <div className="flex flex-col justify-center items-center gap-8 relative ">
            <div className="font-Michroma lg:text-4xl md:text-2xl text-lg uppercase  text-center semibold tracking-tight">
              advanced ai & <br /> data technology
            </div>
            <p className="font-Montserrat text-sm md:text-base lg:text-lg font-medium text-center lg:px-28 px-6">
              Welcome to Techtics.ai, your premier destination for cutting-edge
              AI solutions. With expertise in Computer Vision, Image Processing,
              Natural Language Processing, Generative AI, Data Analytics, and
              Pattern Recognition...
            </p>
            <button className="bg-gradient-to-br from-[#0056F8] to-[#45E7FF] text-white font-Montserrat font-semibold tracking-widest rounded-sm px-10 py-3 uppercase mb-4">
              Start Exploring
            </button>
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
                className="absolute  border "
              ></div>
            </div> */}
          </div>
        </div>

        {/* team section */}
        <div className="flex flex-col gap-6 my-20">
          <h2 className="font-Michroma text-[#45E7FF] lg:text-4xl md:text-2xl text-lg uppercase text-center">
            Highly Regarded Team
          </h2>
          <p className="font-Montserrat md:text-lg text-sm text-white text-center ">
            We stand prepared to address your business challenges.
          </p>
          <div className="flex flex-wrap justify-center items-stretch gap-10 md:gap-0 md:mt-6 mt-2 ">
            <div className="lg:w-1/3 md:w-1/2 w-full  flex justify-center items-center flex-col md:gap-10 gap-6 ">
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
                <h1 className="font-Michroma lg:text-4xl md:text-2xl text-lg  text-[#5EF5FF] text-center w-full">
                  50+
                </h1>
                <p className="font-Montserrat text-whtie font-semibold  uppercase tracking-widest md:mt-3 mt-2 text-center w-full md:text-2xl ">
                  Active users
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full  flex justify-center items-center flex-col md:gap-10 gap-6 ">
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
                <h1 className="font-Michroma lg:text-4xl md:text-2xl text-lg  text-[#5EF5FF] text-center w-full">
                  10+ PHDS
                </h1>
                <p className="font-Montserrat text-whtie font-semibold  uppercase tracking-widest md:mt-3 mt-2 text-center w-full md:text-2xl ">
                  Subject Matter Experts
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full  flex justify-center items-center flex-col md:gap-10 gap-6 md:mt-10 lg:mt-0">
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
            </div>
          </div>
        </div>

        {/* business solutions */}
        <div className="my-20">
          <h2 className="font-Michroma text-[#45E7FF] lg:text-4xl md:text-2xl text-lg uppercase text-center">
            Business Solutions
          </h2>
          <div className="flex flex-wrap justify-center items-center   ">
            <h3 className="font-Michroma w-full text-center uppercase mt-16 mb-2 md:hidden">
              <span className="text-[#45E7FF]">Natural Language</span> <br />
              <span>Processing</span>
            </h3>
            <div className="flex items-center justify-between w-full md:mt-20 ">
              <div className="md:w-1/3 w-1/2 flex md:justify-center justify-start items-center">
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
              </div>
              <h3 className="font-Michroma lg:text-2xl md:text-lg  text-center uppercase md:w-1/3 hidden md:block">
                <span className="text-[#45E7FF]">Natural Language</span> <br />
                <span>Processing</span>
              </h3>
              <div className="md:w-1/3 w-1/2 flex md:justify-center justify-end  items-center">
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
              </div>
            </div>
            <ul className="md:flex justify-center items-center flex-wrap list-disc mt-6 hidden">
              <li className="font-Montserrat font-medium w-1/2 text-end  pr-6 list-inside">
                Hampden-Sydney College in Virginia
              </li>

              <li className="font-Montserrat font-medium w-1/2 list-inside pl-4">
                Hampden-Sydney College in Virginia
              </li>
              <li className="font-Montserrat font-medium w-1/2  list-inside text-end pr-6">
                Hampden-Sydney College in Virginia
              </li>
              <li className="font-Montserrat font-medium w-1/2 list-inside pl-4">
                Hampden-Sydney College in Virginia
              </li>
            </ul>
            <div className="md:w-1/3 flex justify-center items-center  md:mt-20 w-full">
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
                    src="/brain.svg"
                    alt="brain"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-center object-contain "
                  />
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
