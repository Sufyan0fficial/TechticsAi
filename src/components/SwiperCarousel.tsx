"use client";

import NLP from "../../public/NLP.svg";
import MachineL from "../../public/MachineLearning.svg";
import Appdev from "../../public/MobileAppdev.svg";
import UIUX from "../../public/UIUX.svg";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Data = [
  {
    img: NLP,
    services: "NLP",
    desc: "NLP drives language understanding, AIs cornerstone.",
  },
  {
    img: MachineL,
    services: "Machine Learning",
    desc: "Machine Learning powers AI innovations, constantly evolving.",
  },
  {
    img: Appdev,
    services: "Mobile App Development",
    desc: "Mobile App Development Mobile App blends AI seamlessly, enhancing usability.",
  },
  {
    img: UIUX,
    services: "UI/UX",
    desc: "UI/UX expertly crafts user-friendly and visually appealing interfaces.",
  },
  {
    img: NLP,
    services: "Digital Marketing",
    desc: "Digital marketing boosts online presence effectively.",
  },
  {
    img: Appdev,
    services: "Custom Software Development",
    desc: "Custom software development tailors solutions precisely.",
  },
];

export default function SwiperCarousel() {
  return (
    <>
      <Container maxWidth="xl" className="lg:mt-20">
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={30}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          speed={800}
          className="mySwiper lg:!pb-20 !pb-14  "
          breakpointsBase="window"
          breakpoints={{
            0: {
              slidesPerView: 1, // 1 slide on small screens
              spaceBetween: 10,
            },
            678: {
              slidesPerView: 1.5, // 2 slides on medium screens
              spaceBetween: 20,
              initialSlide: 1,
            },
            1024: {
              slidesPerView: 2, // 2 slides on medium screens
              spaceBetween: 30,
              initialSlide: 2,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 40,
              initialSlide: 2,
            },
          }}
        >
          <div>
            {Data.map((profile, index) => (
              <SwiperSlide
                className=" !flex flex-col justify-center items-center h-full  mt-20 "
                key={index}
              >
                <Link href="/Services" className=" flex flex-col items-center">
                  <div className="relative  w-[402px] aspect-square  rounded-lg border border-[#FFFFFF66]">
                    <Image
                      src={profile.img}
                      alt={profile.services}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center rounded-lg"
                    />
                  </div>
                  <div className="uppercase text-xl text-center mt-5  mb-1 font-Michroma">
                    {profile.services}
                  </div>
                  <div className="text-center">{profile.desc}</div>
                </Link>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </Container>
    </>
  );
}
