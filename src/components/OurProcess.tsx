"use client";

import React, { useRef } from "react";
import circleframe from "../../public/circleframe.svg";
import bulb from "../../public/bulbimg.svg";
import recycle from "../../public/recycleimg.svg";
import headphone from "../../public/headphone.svg";
import chatbot from "../../public/chatimage.svg";
import Image from "next/image";
import { useScroll, useTransform, motion } from "motion/react";
function OurProcess() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });
  const bordercircling = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, 1]);

  return (
    <div
      className="pt-36 lg:pt-0  min-h-[400vh] flex justify-center items-start"
      ref={ref}
    >
      <motion.div
        className="w-full sticky top-0 "
        style={{}}
        whileInView={{
          scale: 0.7,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        viewport={{
          amount: 0.5,
        }}
      >
        {/* 1st section */}
        <div className="flex lg:flex-row flex-col lg:justify-between lg:items-start gap-6 lg:gap-0 xl:-mb-24  ">
          <div className="lg:w-max w-full flex flex-col items-center lg:items-start ">
            <h3 className="text-[#54E8FF]">Discovery WorkShop</h3>
            <p className="text-center lg:text-left max-w-[30ch]  ">
              Discussion of use case in joint sessions with the clients tech and
              commercial teams.
            </p>
          </div>
          <div className="lg:w-max w-full flex flex-col items-center lg:items-start ">
            <h3 className="text-[#54E8FF]">Proof of Concept</h3>
            <p className="max-w-[30ch] text-center lg:text-left ">
              A Pilot-project enabling the process of solution development.
            </p>
          </div>
        </div>
        {/* image section */}
        <div className="flex justify-center items-start my-14 lg:my-4 ">
          <div
            className="md:w-1/2 w-[60%] aspect-square "
            style={{
              backgroundImage: `url(${circleframe.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute w-full h-full  "
              style={{
                rotate: "-90deg",
              }}
            >
              <motion.circle
                cx="50"
                cy="50"
                r="50"
                stroke="red"
                strokeWidth="1"
                fill="none"
                pathLength={bordercircling}
              />
            </motion.svg>
            {/* <div className="w-max flex justify-center items-center border">
                <h2>Our process</h2>
              </div> */}
            <div className="flex flex-col justify-between  h-full">
              <div className="flex justify-between">
                <div className="relative w-1/3 aspect-square ">
                  <Image
                    src={chatbot}
                    alt="chat image"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-center object-contain"
                  />
                </div>
                <div className="relative w-1/3 aspect-square">
                  <Image
                    src={recycle}
                    alt="chat image"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-center object-contain"
                  />
                </div>
              </div>
              <div className=" flex justify-center items-center border-l-2 md:border-l-2 lg:border-l-4 border-l-pink-600 ">
                <h2>
                  Our <br className="md:hidden" /> process
                </h2>
              </div>
              <div className="flex justify-between">
                <div className="relative w-1/3 aspect-square ">
                  <Image
                    src={headphone}
                    alt="chat image"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-center object-contain"
                  />
                </div>
                <div className="relative w-1/3 aspect-square ">
                  <Image
                    src={bulb}
                    alt="chat image"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-center object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd section */}
        <div className="flex lg:flex-row flex-col lg:justify-between lg:items-start gap-6 lg:gap-0 xl:-mt-36">
          <div className="lg:w-max w-full flex flex-col items-center lg:items-start">
            <h3 className="text-[#54E8FF]">
              After Go <br className="hidden lg:block" /> live support
            </h3>
            <p className="text-center lg:text-left max-w-[30ch]">
              Maintenance and support of the deployed porject.
            </p>
          </div>
          <div className="lg:w-max w-full flex flex-col items-center lg:items-start">
            <h3 className="text-[#54E8FF]">
              Development
              <br className="md:hidden lg:block" /> & Deployment
            </h3>
            <p className="max-w-[30ch] text-center lg:text-left">
              Implementation, delivery compliance, user experience and
              integration of solution.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default OurProcess;
