import Image from "next/image";
import React from "react";
import mainimg from "../../public/hometeamimg.png";

function AboutusComp() {
  return (
    <div className="rounded-[40px] bg-gradient-to-r from-[#0056F8] to-[#45E7FF] flex flex-wrap justify-center">
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start px-10 md:px-20 gap-8 my-20 ">
        <h2 className="text-white text-left">About US</h2>
        <p className="text-black text-center lg:text-left ">
          At Techtics.ai, we are dedicated to providing innovative and tailored
          artificial intelligence solutions that empower businesses to thrive in
          the digital era. With expertise spanning Computer Vision, Natural
          Language Processing, Generative AI, Image Processing, Data Analytics,
          and Pattern Recognition, we craft cutting-edge technologies to address
          complex challenges and drive impactful results.
        </p>
        <button
          className="uppercase font-Montserrat tracking-widest text-sm text-black px-10 py-3 rounded-md  font-semibold w-max bg-[#45E7FF]


"
          // style={{
          //   background:
          //     "linear-gradient(112.97deg, #45E7FF 47.37%, #0056F8 163.04%)",
          // }}
        >
          Know more
        </button>
      </div>
      <div className="lg:w-1/2 w-full relative aspect-video xl:aspect-video lg:aspect-[1/0.5]">
        <Image
          src={mainimg}
          alt="Main Image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center rounded-3xl"
        />
      </div>
    </div>
  );
}

export default AboutusComp;
