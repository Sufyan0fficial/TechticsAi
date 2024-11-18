"use client";

// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// // Import required modules
// import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

// import Image from "next/image";
import brain from "../../public/brain.svg";
import recycle from "../../public/recycleimg.svg";
import bulb from "../../public/bulbimg.svg";
import award from "../../public/award.svg";
import blueprint from "../../public/blueprint.svg";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

// const Data = [
//   { img: brain },
//   { img: recycle },
//   { img: bulb },
//   { img: award },
//   { img: blueprint },
// ];

// export default function SwiperCarousel() {
//   return (
//     <>
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         spaceBetween={30}
//         slidesPerView={3}
//         centeredSlides={true}
//         centeredSlidesBounds={true}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: false,
//         }}
//         pagination={{
//           dynamicBullets: true,
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Autoplay]}
//         autoplay={{ delay: 3000 }}
//         className="swiper w-full border"
//         breakpoints={{
//           0: {
//             slidesPerView: 1, // 1 slide on small screens
//             spaceBetween: 10,
//           },
//           640: {
//             slidesPerView: 2, // 2 slides on medium screens
//             spaceBetween: 20,
//           },
//           1024: {
//             slidesPerView: 3, // 2 slides on medium screens
//             spaceBetween: 30,
//           },
//         }}
//       >
//         <div>
//           {Data.map((profile, index) => (
//             <SwiperSlide
//               key={index}
//               className="w-max rounded-lg border-2 border-black flex justify-center items-center my-24  p-10  "
//               style={{
//                 background:
//                   "linear-gradient(336.7deg, #FFFFFF -4.68%, #56FFFF 93.89%)",
//               }}
//             >
//               <div className="w-[260px] h-[225px] relative">
//                 <Image
//                   src={profile.img}
//                   fill
//                   alt="image"
//                   className="object-contain object-center"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </div>
//       </Swiper>
//     </>
//   );
// }

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
    img: brain,
    services: "NLP",
    desc: "NLP drives language understanding, AIs cornerstone.",
  },
  {
    img: recycle,
    services: "Machine Learning",
    desc: "Machine Learning powers AI innovations, constantly evolving.",
  },
  {
    img: bulb,
    services: "Mobile App Development",
    desc: "Mobile App Development Mobile App blends AI seamlessly, enhancing usability.",
  },
  {
    img: award,
    services: "UI/UX",
    desc: "UI/UX expertly crafts user-friendly and visually appealing interfaces.",
  },
  {
    img: blueprint,
    services: "Digital Marketing",
    desc: "Digital marketing boosts online presence effectively.",
  },
  {
    img: blueprint,
    services: "Custom Software Development",
    desc: "Custom software development tailors solutions precisely.",
  },
  {
    img: blueprint,
    services: "DevOps & Cloud Solutions",
    desc: "DevOps & Cloud Solutions optimize operations, scalability.",
  },
  {
    img: blueprint,
    services: "ChatBot Developments",
    desc: "As AI Conversational Advances, Chatbots Continue to Evolve.",
  },
  {
    img: blueprint,
    services: "Blockchain Services",
    desc: "Blockchain secures transactions, disrupts industries positively.",
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
          className="mySwiper lg:!pb-20 !pb-14  "
          breakpointsBase="window"
          breakpoints={{
            0: {
              slidesPerView: 1, // 1 slide on small screens
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2, // 2 slides on medium screens
              spaceBetween: 30,
              initialSlide: 1,
            },
            1024: {
              slidesPerView: 4, // 2 slides on medium screens
              // spaceBetween: 40,
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
                <div
                  className="aspect-square w-full min-h-full !flex  flex-col justify-center  items-center rounded-lg p-10 relative "
                  style={{
                    background:
                      "linear-gradient(336.7deg, #FFFFFF -4.68%, #56FFFF 93.89%)",
                  }}
                >
                  <div className="w-2/3 aspect-square relative ">
                    <Image
                      src={profile.img}
                      fill
                      alt="image"
                      className="object-contain object-center "
                    />
                  </div>
                  <Link
                    href="/Services"
                    className={`uppercase text-black tracking-widest underline absolute bottom-8 w-full text-center ${roboto.variable} hover:text-pink-500`}
                  >
                    View Details
                  </Link>
                </div>
                <div className="uppercase text-xl text-center mt-3 mb-1 font-Michroma">
                  {profile.services}
                </div>
                <div className="text-center">{profile.desc}</div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </Container>
    </>
  );
}
