import React from "react";
import mainimg from "../../../public/servicesmainimg.svg";
import { Container } from "@mui/material";
import Image from "next/image";
import SwiperCarousel from "@/components/SwiperCarousel";
import projectlogo from "../../../public/projectbaselogo.svg";
import frame from "../../../public/framereverse.svg";
import brain from "../../../public/brain.svg";
import vision from "../../../public/eye.svg";
import memory from "../../../public/blueprint.svg";
import LeaveaReply from "@/components/LeaveaReply";
import servicesengagingimg from "../../../public/servicesengagingimg.jpg";
import product from "../../../public/product.svg";
import AnimatedWrapper from "@/components/MotionWrapper";

function Services() {
  return (
    <div className="overflow-hidden">
      {/* hero section */}
      <div
        style={{
          backgroundImage: `url(${mainimg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "1080px",
          backgroundRepeat: "no-repeat",
        }}
        className="flex justify-center "
      >
        <h2 className="flex flex-col md:flex-row justify-between items-center md:mt-80 w-full mt-32 h-[480px] md:h-max">
          <AnimatedWrapper
            from="left"
            className="w-full md:w-1/3 xl:text-right "
          >
            Unlock power
          </AnimatedWrapper>

          <AnimatedWrapper
            from="right"
            delay={0.3}
            className="text-white w-full md:w-1/3 xl:text-left"
          >
            of your brand
          </AnimatedWrapper>
        </h2>
      </div>

      <div className="bg-gradient-to-b to-[#0412CB] from-[#02061B]">
        <Container maxWidth="xl">
          {/* Custom IT Solutions */}
          <div className="flex flex-col gap-6  lg:pt-0 -mt-36 pt-10">
            <AnimatedWrapper from="bottom" initialY={50} opacity={0.3}>
              <h2 className="font-Michroma text-[#45E7FF]  uppercase text-center">
                custom IT solutions for your business
              </h2>
            </AnimatedWrapper>
            <p className="font-Montserrat md:text-lg text-sm text-white text-center mt-4 mb-10">
              We deal with all aspects of professional IT services
            </p>

            <div className="flex flex-wrap justify-center items-stretch gap-10 md:gap-6  md:mt-8 mt-10 ">
              <AnimatedWrapper
                from="left"
                initialX={-50}
                className="lg:w-[30%] md:w-[45%] w-full  flex justify-center items-center flex-col md:gap-10 gap-6 "
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
                <div className="w-full ">
                  <h1 className="font-Michroma lg:text-4xl md:text-2xl text-lg  text-[#5EF5FF] text-center w-full font-light uppercase">
                    felxibility
                  </h1>
                  <p className=" tracking-tight md:mt-3 mt-2 text-center px-16 md:px-0 w-full  text-wrap md:text-lg text-base">
                    Flexibility on a budget allows smart financial management
                    and adaptability
                  </p>
                </div>
              </AnimatedWrapper>
              <AnimatedWrapper
                from="left"
                initialX={-50}
                delay={0.5}
                className="lg:w-1/3 md:w-1/2 w-full  flex justify-center items-center flex-col md:gap-10 gap-6 "
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
                  <h1 className="font-Michroma lg:text-3xl md:text-2xl text-lg  text-[#5EF5FF] text-center w-full uppercase">
                    support
                  </h1>
                  <p className=" tracking-tight md:mt-3 mt-2 text-center px-16 md:px-0 md:w-full   md:text-lg text-base">
                    Ongoing support ensures sustained performance, addressing
                    evolving needs effectively.
                  </p>
                </div>
              </AnimatedWrapper>
              <AnimatedWrapper
                from="left"
                initialX={-50}
                delay={1}
                className="lg:w-1/3 md:w-1/2 w-full  flex justify-center items-center flex-col md:gap-10 gap-6 md:mt-10 lg:mt-0"
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
                <div className="w-full ">
                  <h1 className="font-Michroma lg:text-4xl md:text-2xl text-lg  text-[#5EF5FF] text-center w-full uppercase">
                    security
                  </h1>
                  <p className=" tracking-tight md:mt-3 mt-2 text-center px-16 md:px-0 md:w-full   md:text-lg text-base">
                    Data security and compliance ensure privacy, trust, and
                    regulatory adherence
                  </p>
                </div>
              </AnimatedWrapper>
            </div>
          </div>

          {/* IT SERVICES */}
          <div className="mt-36 md:mt-40 lg:mt-56">
            <AnimatedWrapper from="bottom">
              <h2 className="text-white -mb-8 md:mb-0 md:mt-">IT Services</h2>
            </AnimatedWrapper>
            <SwiperCarousel />
          </div>

          {/* CREATIVE AND CONSULTING */}
          <div className="mt-40 md:mt-44  ">
            <AnimatedWrapper from="bottom">
              <h2 className="text-white -mb-5 ">Creative and Consulting</h2>
            </AnimatedWrapper>
            <SwiperCarousel />
          </div>

          {/* Engage with us  */}

          <div className="mt-40">
            <AnimatedWrapper
              from="bottom"
              initialY={30}
              amount={0.5}
              opacity={0.5}
            >
              <h2>Engage with us</h2>
            </AnimatedWrapper>
            <div className="flex flex-col lg:flex-row lg:gap-16 gap-8 mt-10 md:mt-20">
              <AnimatedWrapper
                from="left"
                amount={0.4}
                className="lg:w-1/2  w-full aspect-square md:aspect-[1/0.7]   relative"
              >
                <Image
                  src={servicesengagingimg}
                  alt="Robohand image"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center rounded-2xl border border-[#F4F4F4]"
                />
              </AnimatedWrapper>
              <div className="lg:w-1/2 w-full flex flex-col lg:justify-center lg:gap-16 gap-4">
                <AnimatedWrapper
                  from="bottom"
                  className="flex justify-center gap-8 items-center  "
                >
                  <div
                    className="lg:w-1/3 w-1/4 aspect-square flex justify-center items-center"
                    style={{
                      backgroundImage: `url(${frame.src})`,
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="w-[70%] aspect-square relative">
                      <Image
                        src={projectlogo}
                        alt="projectlogo"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain object-center"
                      />
                    </div>
                  </div>

                  <div>
                    <h3>project based</h3>
                    <p className="text-[#B4B4B4]">
                      Vivamus neque nibh, pellentesque sed felis
                    </p>
                  </div>
                </AnimatedWrapper>
                <AnimatedWrapper
                  from="bottom"
                  className="flex justify-center  gap-8 items-center flex-row-reverse lg:flex-row text-right lg:text-left"
                >
                  <div
                    className="lg:w-1/3 w-1/4 aspect-square flex justify-center items-center"
                    style={{
                      backgroundImage: `url(${frame.src})`,
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="w-[60%] aspect-square relative">
                      <Image
                        src={product}
                        alt="projectlogo"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain object-center"
                      />
                    </div>
                  </div>

                  <div>
                    <h3>project based</h3>
                    <p className="text-[#B4B4B4]">
                      Vivamus neque nibh, pellentesque sed felis
                    </p>
                  </div>
                </AnimatedWrapper>
              </div>
            </div>
          </div>

          {/* Our Portfolio */}

          <div className="mt-44 ">
            <div
              className="rounded-3xl pt-20 pb-60"
              style={{
                background: `linear-gradient(90deg, #0056F8 0%, #45E7FF 100%)`,
              }}
            >
              <div className=" flex flex-col items-center">
                <AnimatedWrapper from="left" ease="easeInOut" duration={1.2}>
                  <h2 className="text-white">Our portfolio</h2>
                </AnimatedWrapper>

                <AnimatedWrapper
                  from="right"
                  duration={1.2}
                  delay={0.4}
                  className="text-black text-center w-[60%] md:mt-4 mt-2 text-xs md:text-sm lg:text-base"
                >
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage.
                </AnimatedWrapper>
              </div>
            </div>
            <div className="flex  w-full justify-center  gap-x-7 gap-y-16 flex-wrap">
              <AnimatedWrapper
                from="bottom"
                amount={0.5}
                duration={1.3}
                className="lg:w-[30%] md:w-[45%] w-[90%] aspect-[1/0.7] -mt-32  rounded-xl flex flex-col items-center justify-between bg-[#D1FFFF] p-6 pb-8 "
              >
                <div className="relative w-[40%] aspect-square -mt-20 ">
                  <Image
                    src={brain}
                    alt="brain"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain object-center"
                  />
                </div>
                <div className="flex justify-center items-center flex-col ">
                  <h4 className="text-center lg:text-xl md:text-lg uppercase text-[#012A7B] font-Michroma mb-4 mt-8">
                    Natural Language <br />
                    Processing
                  </h4>
                  <button
                    className="uppercase text-[#001D56] px-10 text-sm py-3 rounded-sm tracking-widest font-semibold "
                    style={{
                      background: `linear-gradient(112.97deg, #45E7FF 47.37%, #0056F8 113.72%)`,
                    }}
                  >
                    Read More
                  </button>
                </div>
              </AnimatedWrapper>
              <AnimatedWrapper
                from="bottom"
                amount={0.8}
                duration={1.4}
                // delay={0.5}
                className="lg:w-[30%] md:w-[45%] w-[90%] aspect-[1/0.7] md:-mt-32  rounded-xl flex flex-col items-center justify-between bg-[#D1FFFF] p-6 pb-8"
              >
                <div className="relative w-[40%] aspect-square -mt-20 ">
                  <Image
                    src={vision}
                    alt="brain"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain object-center"
                  />
                </div>
                <div className="flex justify-center items-center flex-col ">
                  <h4 className="text-center lg:text-xl md:text-lg uppercase text-[#012A7B] font-Michroma mb-4 mt-8">
                    Computer <br />
                    Vision
                  </h4>
                  <button
                    className="uppercase text-[#001D56] px-10 text-sm py-3 rounded-sm tracking-widest font-semibold "
                    style={{
                      background: `linear-gradient(112.97deg, #45E7FF 47.37%, #0056F8 113.72%)`,
                    }}
                  >
                    Read More
                  </button>
                </div>
              </AnimatedWrapper>
              <AnimatedWrapper
                from="bottom"
                amount={1}
                duration={1.5}
                // delay={0.4}
                className="lg:w-[30%] md:w-[45%] w-[90%] aspect-[1/0.7] lg:-mt-32  rounded-xl flex flex-col items-center justify-between bg-[#D1FFFF] p-6 pb-8"
              >
                <div className="relative w-[40%] aspect-square -mt-20 ">
                  <Image
                    src={memory}
                    alt="brain"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain object-center"
                  />
                </div>
                <div className="flex justify-center items-center flex-col ">
                  <h4 className="text-center lg:text-xl md:text-lg uppercase text-[#012A7B] font-Michroma mb-4 mt-8">
                    Data Analytics <br />& Others
                  </h4>
                  <button
                    className="uppercase text-[#001D56] px-10 text-sm py-3 rounded-sm tracking-widest font-semibold "
                    style={{
                      background: `linear-gradient(112.97deg, #45E7FF 47.37%, #0056F8 113.72%)`,
                    }}
                  >
                    Read More
                  </button>
                </div>
              </AnimatedWrapper>
            </div>
          </div>

          {/* Leave a reply */}
          <div className="mt-44 md: mb-72">
            <LeaveaReply />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Services;
