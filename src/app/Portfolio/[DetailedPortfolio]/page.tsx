import { Container } from "@mui/material";
import React from "react";
import mainimg from "../../../../public/detailedportfolioheroimg.svg";
import Image from "next/image";
import Law from "../../../../public/lawimg.svg";
import nextlogo from "../../../../public/nextlogo.svg";
import innovative from "../../../../public/innovativelogo.svg";
import neuro from "../../../../public/neurologo.svg";
import divider from "../../../../public/divider4.svg";

function DetailedPortfolio() {
  return (
    <div>
      <Container maxWidth="xl">
        <div>
          {/* hero section */}
          <div
            className="flex flex-col justify-center pl-20"
            style={{
              backgroundImage: `url(${mainimg.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "calc(100vh - 96px)",
            }}
          >
            <div>
              <h2 className="text-left text-[#2589D3]">Portfolio</h2>
              <h2 className="text-left text-white leading-tight mt-6">
                Natural Language <br />
                Processing
              </h2>
            </div>
          </div>

          {/* case studies */}
          <div className="flex flex-col items-center mt-20">
            <h2 className="text-[#007ADD]">Case studies</h2>
            <p className="text-center text-[#B4B4B4] w-3/4 mt-3">
              Vivamus neque nibh, pellentesque sed felis a, egestas maximus
              mauris. Nam quam arcu, suscipit fermentum gravida vel, vestibulum
              in quam. Vestibulum tincidunt eleifend ante, ac egestas magna
              aliquam et. Nam at ipsum feugiat erat mattis facilisis a quis sem.
              Suspendisse mattis pellentesque arcu, id tincidunt metus imperdiet
              a. Maecenas non scelerisque sapien. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.{" "}
            </p>
          </div>

          {/* Taxation and Law */}
          <div className="mt-36 flex justify-center gap-16">
            {/* 1st container */}
            <div className="lg:w-[45%] w-full ">
              <div>
                <div className="flex gap-6 mb-3  items-end justify-center">
                  <div className="relative w-[115px] h-[109px]">
                    <Image
                      src={Law}
                      alt="law image"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-center object-contain"
                    />
                  </div>
                  <div>
                    <h3>taxation & law</h3>
                    <p>
                      <span className="text-[#3DD7FE] pr-2 mt-4">
                        Law Master
                      </span>
                      LLM Based Taxation Agent
                    </p>
                  </div>
                </div>
                <div className="relative w-full h-[19px]">
                  <Image
                    src={divider}
                    alt="divider"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-center object-contain"
                  />
                </div>
                <div className="mt-5  flex justify-center">
                  <p className="w-[70%] text-center">
                    Effective tool for locating the latest and pertinent rules
                    from multiple gazettes with an{" "}
                    <span className="text-[#3DD7FE]">accuracy of over 85%</span>
                  </p>
                </div>
                <div></div>

                <div></div>
              </div>
              <div className="mt-12">
                <div className="uppercase text-[#D1FFFF] font-semibold mb-8 tracking-widest text-center text-xl">
                  Technologies used
                </div>
                <div className="flex flex-wrap gap-y-6 justify-center gap-6">
                  <div className="w-[28%]  relative h-[50px]">
                    <Image
                      src={neuro}
                      alt="neuro image"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-center"
                    />
                  </div>
                  <div className="w-[28%]  relative h-[50px]">
                    <Image
                      src={innovative}
                      alt="neuro image"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-center"
                    />
                  </div>
                  <div className="w-[28%]  relative h-[50px]">
                    <Image
                      src={nextlogo}
                      alt="neuro image"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-center"
                    />
                  </div>
                  <div className="w-[28%]  relative h-[50px]">
                    <Image
                      src={neuro}
                      alt="neuro image"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-center"
                    />
                  </div>
                  <div className="w-[28%]  relative h-[50px]">
                    <Image
                      src={innovative}
                      alt="neuro image"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-center"
                    />
                  </div>
                  <div className="w-[28%]  relative h-[50px]">
                    <Image
                      src={nextlogo}
                      alt="neuro image"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* image container */}
            <div className="w-[45%] h-[560px] relative aspect-square">
              <Image
                src={mainimg}
                alt="image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-right object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default DetailedPortfolio;
