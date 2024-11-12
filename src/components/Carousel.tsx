import * as React from "react";

import quotationmark from "../../public/quotationmark.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import manger from "../../public/manager.jpg";

interface CommentType {
  comment: string;
  name: string;
  designation: string;
  img: StaticImageData;
}

export default function CarouselDemo() {
  const content: CommentType[] = [
    {
      comment:
        "At vero eos et accusamus et iusto  odio  dignissimos  ducimus  qui blandit iis praesentium voluptatum  deleniti atque  corrupti  quos  dolores  et quas molestias  excepturi sint occaecati  cupiditate non  provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.",
      name: "Marley Higgins",
      designation: "Manager",
      img: manger,
    },
    {
      comment:
        "At vero eos et accusamus et iusto  odio  dignissimos  ducimus  qui blandit iis praesentium voluptatum  deleniti atque  corrupti  quos  dolores  et quas molestias  excepturi sint occaecati  cupiditate non  provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.",
      name: "Marley Higgins",
      designation: "Manager",
      img: manger,
    },
    {
      comment:
        "At vero eos et accusamus et iusto  odio  dignissimos  ducimus  qui blandit iis praesentium voluptatum  deleniti atque  corrupti  quos  dolores  et quas molestias  excepturi sint occaecati  cupiditate non  provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.",
      name: "Marley Higgins",
      designation: "Manager",
      img: manger,
    },
  ];
  return (
    <div className="flex justify-center items-center ">
      <Carousel className="w-[80%] ">
        <CarouselContent>
          {content.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col justify-center items-center gap-6"
            >
              <div className="relative lg:w-[212px] h-[32px] md:w-[180px] w-[150px]">
                <Image
                  src={quotationmark}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain object-center"
                />
              </div>
              <div className="italic text-center !font-light  ">
                {item.comment}
              </div>
              <div className="flex justify-center items-center gap-5">
                <div
                  className="w-[105px] lg:h-[105px] md:h-[85px] h-[75px]  flex justify-center items-center "
                  style={{
                    backgroundImage: `url('/frame.svg')`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* <div className="relative w-[75px] h-[70px]">
                    <Image
                      src={item.img}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div> */}
                </div>
                <div>
                  <h3 className=" text-[#5EF5FF] uppercase tracking-wide font-Montserrat font-semibold leading-tight ">
                    {item.name}
                  </h3>
                  <div>{item.designation}</div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
