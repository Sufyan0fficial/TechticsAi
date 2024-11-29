import Image from "next/image";
import React from "react";
import mainimg from "../../public/hometeamimg.png";
import Link from "next/link";
import "@/components/button.css";
import AnimatedWrapper from "./MotionWrapper";

function AboutusComp() {
  return (
    <div className="rounded-[40px] bg-gradient-to-r from-[#0056F8] to-[#45E7FF] flex flex-wrap justify-center overflow-hidden">
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start px-10 md:px-20 gap-8 my-20 ">
        <AnimatedWrapper
          from="bottom"
          duration={0.7}
          initialY={20}
          amount={0.5}
        >
          <h2 className="text-white text-left">About US</h2>
        </AnimatedWrapper>
        <AnimatedWrapper
          from="bottom"
          duration={0.7}
          initialY={20}
          amount={0.6}
        >
          <p className="text-black text-center lg:text-left ">
            At Techtics.ai, we are dedicated to providing innovative and
            tailored artificial intelligence solutions that empower businesses
            to thrive in the digital era. With expertise spanning Computer
            Vision, Natural Language Processing, Generative AI, Image
            Processing, Data Analytics, and Pattern Recognition, we craft
            cutting-edge technologies to address complex challenges and drive
            impactful results.
          </p>
        </AnimatedWrapper>

        <AnimatedWrapper from="bottom" duration={0.7} initialY={40}>
          <Link href="/Contactus">
            <button className="button genbutton py-4 px-8 hover:border !tracking-widest uppercase">
              Know More
            </button>
          </Link>
        </AnimatedWrapper>
      </div>

      <AnimatedWrapper
        from="bottom"
        amount={0.5}
        ease="easeInOut"
        className="lg:w-1/2 relative w-full aspect-video xl:aspect-video lg:aspect-[1/0.5]"
      >
        <Image
          src={mainimg}
          alt="Main Image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center rounded-3xl"
        />
      </AnimatedWrapper>
    </div>
  );
}

export default AboutusComp;
