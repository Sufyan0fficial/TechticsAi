"use client";

import frame from "../../public/profileframe.svg";
import profile1 from "../../public/profile1.svg";
import profile2 from "../../public/profile2.svg";
import profile3 from "../../public/profile3.svg";
import Image, { StaticImageData } from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: "500",
  variable: "--font-poppins",
});

interface Type {
  name: string;
  desc: string;
  img: StaticImageData;
}

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "@/components/teamcarousel.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Container } from "@mui/material";

const Data: Type[] = [
  {
    name: "Meicca Dena",
    desc: "Chief Creative Officer",
    img: profile1,
  },
  {
    name: "Meicca Dena",
    desc: "Chief Creative Officer",
    img: profile2,
  },
  {
    name: "Meicca Dena",
    desc: "Chief Creative Officer",
    img: profile3,
  },
  {
    name: "Meicca Dena",
    desc: "Chief Creative Officer",
    img: profile1,
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
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          speed={800}
          className="mySwiper my-20 "
          breakpointsBase="window"
          breakpoints={{
            0: {
              slidesPerView: 1, // 1 slide on small screens
            },
            768: {
              slidesPerView: 2, // 2 slides on medium screens
              spaceBetween: 20,
              initialSlide: 1,
            },
            1024: {
              slidesPerView: 3, // 2 slides on medium screens
              spaceBetween: 30,
              initialSlide: 2,
            },
          }}
        >
          <div>
            {Data.map((profile, index) => (
              <SwiperSlide className="" key={index}>
                <div
                  style={{
                    backgroundImage: `url(${frame.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                  }}
                  className="w-full h-[429px]  flex flex-col items-center justify-between mt-40 mb-24 shrink-0 "
                >
                  <div className="relative w-[308px] h-[495px] -mt-[165px]  shrink-0 ">
                    <Image
                      src={profile.img}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-center object-cover"
                    />
                  </div>
                  <div className={`mb-5 ${poppins.className}`}>
                    <div
                      className={`text-center font-bold tracking-wide  text-black text-xl`}
                    >
                      {profile.name}
                    </div>
                    <div className="text-center text-black ">
                      {profile.desc}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </Container>
    </>
  );
}
