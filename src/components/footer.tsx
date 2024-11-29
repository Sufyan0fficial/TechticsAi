import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "@/components/button.css";

function Footer() {
  return (
    <div className="mb-20">
      <Container maxWidth="xl">
        <div
          className=" rounded-3xl  p-12"
          style={{
            background:
              "radial-gradient(46.18% 91.07% at 52.56% -38.46%, #0242BA 0%, #001D56 100%)",
          }}
        >
          {" "}
          <div className="flex justify-center items-center">
            <div className="relative md:w-[500px] md:h-[50px] w-[300px] h-[45px]  py-20">
              <Image
                src="/textlogo.svg"
                alt="logo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain object-center"
              />
            </div>
          </div>
          <div className="mt-6 flex items-start  md:justify-between justify-center gap-10 md:gap-0 flex-wrap">
            <div className="lg:w-1/4  font-Michroma font-medium tracking-widest flex flex-col gap-4  text-sm md:text-lg lg:text-xl md:w-1/2 w-full">
              <Link
                href="/"
                className="text-white hover:text-[#45E7FF] transition-colors duration-300 uppercase"
              >
                About US
              </Link>
              <Link
                href="/"
                className="text-white hover:text-[#45E7FF] transition-colors duration-300 uppercase"
              >
                Services
              </Link>
              <Link
                href="/"
                className="text-white hover:text-[#45E7FF] transition-colors duration-300 uppercase"
              >
                Portfolio
              </Link>
              <Link
                href="/"
                className="text-white hover:text-[#45E7FF] transition-colors duration-300 uppercase"
              >
                Blogs
              </Link>
            </div>
            <div className="lg:flex-grow flex flex-col items-start md:items-center md:w-1/2 w-full">
              <h4 className=" text-white font-medium font-Michroma uppercase text-sm md:text-lg lg:text-xl">
                Follow us
              </h4>
              <div className="flex gap-5 mt-6 md:mt-10 ">
                <Link href="/">
                  <div className="md:w-[75px] md:h-[75px] w-[50px] h-[50px] relative">
                    <Image
                      src="/instagram.svg"
                      alt="instagram"
                      fill
                      sizes=""
                      className="object-center object-contain"
                    />
                  </div>
                </Link>
                <Link href="/">
                  <div className="md:w-[75px] md:h-[75px] w-[50px] h-[50px] relative">
                    <Image
                      src="/facebook.svg"
                      alt="facebook"
                      fill
                      sizes=""
                      className="object-center object-contain"
                    />
                  </div>
                </Link>
                <Link href="/">
                  <div className="md:w-[75px] md:h-[75px] w-[50px] h-[50px] relative">
                    <Image
                      src="/twitter.svg"
                      alt="twitter"
                      fill
                      sizes=""
                      className="object-center object-contain"
                    />
                  </div>
                </Link>
                <Link href="/">
                  <div className="md:w-[75px] md:h-[75px] w-[50px] h-[50px] relative">
                    <Image
                      src="/youtube.svg"
                      alt="youtube"
                      fill
                      sizes=""
                      className="object-center object-contain"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/4 flex flex-col md:gap-4 gap-2 md:w-1/2  w-full  md:mt-10 lg:mt-0">
              <h4 className="font-Michroma   uppercase font-thin  mb-1 text-sm md:text-lg lg:text-xl">
                Join our newsletter
              </h4>
              <div className="flex md:flex-col items-baseline  gap-4  md:gap-0 md:items-end">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="py-3 bg-transparent pl-4 border-[1px] border-white focus:outline-none w-full flex-shrink-[0.7]"
                />
                <button className=" button genbutton md:px-8 px-6 md:py-2 uppercase py-3 mt-4 font-Montserrat ">
                  Send
                </button>
              </div>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "#54E8FF",
                        },
                      }}
                    />
                  }
                  label="I agree with terms & conditions"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "15px",
                      letterSpacing: "0.5px",
                    },
                  }}
                />
              </FormGroup>
            </div>

            <div className="flex flex-wrap w-full md:mt-10 mt-6 ">
              <h3 className="font-Michroma text-[#54E8FF] w-full md:w-1/2 lg:w-1/3 md:text-start text-center lg:text-center text-sm md:text-lg lg:text-xl">
                +92 302 5193299
              </h3>
              <h3 className="font-Michroma text-white w-full md:w-1/2 lg:w-1/3 text-center text-sm md:text-lg lg:text-xl">
                contactus @techtics.ai
              </h3>
              <h3 className="font-Michroma text-[#54E8FF] w-full md:w-1/2 lg:w-1/3 text-center md:text-start lg:text-center text-sm md:text-lg lg:text-xl">
                NFC Society, Lahore
              </h3>
            </div>
            <div className="relative w-full h-10  md:my-3 mt-0">
              <Image src="/divider.svg" alt="divider" fill />
            </div>
            <div className="flex flex-wrap w-full text-sm ">
              <h3 className="font-Montserrat  w-full md:w-1/2 lg:w-1/3 md:text-start lg:text-center text-center text-lg">
                Designed by: Vpixel Turkey
              </h3>
              <h3 className="font-Montserrat w-full md:w-1/2 lg:w-1/3 text-center text-lg">
                © 2024 Techtics.ai All Rights Reserved.
              </h3>
              <Link
                href="/"
                className="font-Montserrat  w-full md:w-1/2 lg:w-1/3 text-center md:text-start lg:text-center hover:text-[#54E8FF] text-lg"
              >
                Terms & Conditions | Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
