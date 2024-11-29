import Image, { StaticImageData } from "next/image";
import mainImage from "../../public/mainImage2.svg";
import innovative from "../../public/innovativelogo.svg";
import neuro from "../../public/neurologo.svg";
import next from "../../public/nextlogo.svg";
import React from "react";
import Link from "next/link";
import AnimatedWrapper from "./MotionWrapper";
interface AboutsSectionType {
  heading: string;
  body: string;
  mainimg: StaticImageData;
  icon1: StaticImageData;
  icon2: StaticImageData;
  icon3: StaticImageData;
  bodycolor?: string;
  iconimg?: StaticImageData;
  href: string | URL;
  custombutton?: string;
}

PortfoliomainSection.defaultProps = {
  heading: "about us",
  body: "Welcome to Techtics.ai, your premier destination forcutting-edge AI solutions. With expertise in Computer Vision,Image Processing, Natural Language Processing, Generative AI,Data Analytics, and Pattern Recognition, we specialize indelivering tailored solutions to drive your business forward.",
  mainimg: mainImage,
  icon1: neuro,
  icon2: innovative,
  icon3: next,
  href: "/",
};

function PortfoliomainSection({
  heading,
  body,
  mainimg,
  icon1,
  icon2,
  icon3,
  bodycolor,
  iconimg,
  href,
  custombutton,
}: AboutsSectionType) {
  return (
    <div>
      <div
        className={`bg-transparent border-4  rounded-3xl  px-10  w-full xl:pt-32 xl:pb-32 ${
          iconimg ? "xl:pt-28 xl:pb-24 lg:pt-40  md:pt-28 pt-24 " : ""
        } lg:py-24 pt-16  pb-40 flex flex-col lg:relative md:w-[80%] lg:w-full `}
      >
        <div className="flex ">
          <div className="lg:w-[45%]  flex flex-col gap-10 items-center md:items-start mt-10  ">
            {iconimg && (
              <AnimatedWrapper
                from="bottom"
                className="md:w-[177px] w-[150px] h-[153px] absolute top-0 -mt-14  "
              >
                <div className="w-full h-full relative ">
                  <Image
                    src={iconimg}
                    alt="iconimg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-center object-contain"
                  />
                </div>
              </AnimatedWrapper>
            )}
            <AnimatedWrapper from="bottom" initialY={50}>
              <h3
                className="text-center md:text-left font-bold lg:text-4xl tracking-wider"
                style={{
                  lineHeight: 1.3,
                }}
              >
                {heading}
              </h3>
            </AnimatedWrapper>
            <AnimatedWrapper from="bottom" initialY={50} amount={0.5}>
              <div
                className={`text-center md:text-start pr-6 font-medium text-2xl  ${bodycolor}`}
              >
                {body}
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper from="bottom" amount={0.8} delay={0.3}>
              <Link href={href}>
                <button
                  className={`uppercase  ${custombutton} !text-white !font-Montserrat !tracking-widest !text-sm  !px-10 !py-5 !rounded-md  !font-semibold !w-max !border-2`}
                >
                  Know more
                </button>
              </Link>
            </AnimatedWrapper>
          </div>
        </div>
        <div className="lg:w-[50%] xl:w-[50%] md:w-[80%] w-full absolute lg:top-0 xl:mt-16 lg:mt-20  top-full right-0  md:-mt-32 xl:mr-14 lg:mr-6 px-4 md:px-0 -mt-24">
          <div className=" relative lg:h-[600px] h-[430px] w-full">
            <Image
              src={mainimg}
              alt="image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-center object-cover rounded-2xl"
            />
          </div>
          <div className="w-full md:pr-2 mt-6 lg:hidden flex flex-col md:items-end items-center justify-center ">
            <div
              className="uppercase text-[#FEFC51] tracking-widest mb-4 text-sm font-semibold"
              style={{
                wordSpacing: "3px",
              }}
            >
              We are Accredicted by
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-2">
              <div className="relative md:w-[100px] h-[50px] w-[70px]">
                <Image
                  src={icon1}
                  alt="neuroLogo"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain object-center"
                />
              </div>
              <div className="relative md:w-[100px] h-[50px] w-[70px] ">
                <Image
                  src={icon2}
                  alt="innovative"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain object-center"
                />
              </div>
              <div className="relative md:w-[100px] h-[50px] w-[70px] ">
                <Image
                  src={icon3}
                  alt="neuroLogo"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[40%] pl-12 mt-8 lg:block hidden ">
        <div
          className="uppercase text-[#FEFC51] tracking-widest mb-4 text-sm font-semibold"
          style={{
            wordSpacing: "3px",
          }}
        >
          We are Accredicted by
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-2">
          <div className="relative xl:w-[100px] h-[50px] lg:w-[80px] ">
            <Image
              src={icon1}
              alt="neuroLogo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain object-center"
            />
          </div>
          <div className="relative xl:w-[100px] h-[50px] lg:w-[80px] ">
            <Image
              src={icon2}
              alt="neuroLogo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain object-center"
            />
          </div>
          <div className="relative xl:w-[100px] h-[50px] lg:w-[80px] ">
            <Image
              src={icon3}
              alt="neuroLogo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfoliomainSection;
