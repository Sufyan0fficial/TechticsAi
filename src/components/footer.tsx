import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function Footer() {
  return (
    <div className="">
      <Container maxWidth="lg">
        <div className=" rounded-3xl bg-gradient-radial from-[#0242BA] to-[#001D56] p-12">
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
            <div className="lg:w-1/4  font-Michroma font-medium tracking-widest flex flex-col gap-4  text-sm md:w-1/2 w-full">
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
              <h4 className=" text-sm text-white font-medium font-Michroma uppercase ">
                Follow us
              </h4>
              <div className="flex gap-5 mt-6 ">
                <Link href="/">
                  <div className="md:w-[65px] md:h-[65px] w-[50px] h-[50px] relative">
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
                  <div className="md:w-[65px] md:h-[65px] w-[50px] h-[50px] relative">
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
                  <div className="md:w-[65px] md:h-[65px] w-[50px] h-[50px] relative">
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
                  <div className="md:w-[65px] md:h-[65px] w-[50px] h-[50px] relative">
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
              <h4 className="font-Michroma  text-sm  uppercase font-thin">
                Join our newsletter
              </h4>
              <div className="flex md:flex-col items-baseline  gap-4  md:gap-0 md:items-end">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="py-3 bg-transparent pl-4 border-[1px] border-white focus:outline-none w-full flex-shrink-[0.7]"
                />
                <button className="uppercase text-white bg-gradient-to-br from-[#0056F8] to-[#45E7FF] md:px-8 px-6 md:py-2    py-3 mt-4 font-Montserrat tracking-widest rounded-sm ">
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
              <h3 className="font-Michroma text-[#54E8FF] w-full md:w-1/2 lg:w-1/3 md:text-start text-center">
                +92 302 5193299
              </h3>
              <h3 className="font-Michroma text-white w-full md:w-1/2 lg:w-1/3 text-center ">
                contactus @techtics.ai
              </h3>
              <h3 className="font-Michroma text-[#54E8FF] w-full md:w-1/2 lg:w-1/3 text-center md:text-start lg:text-center">
                NFC Society, Lahore
              </h3>
            </div>
            <div className="relative w-full h-10  md:my-3 mt-0">
              <Image src="/divider.svg" alt="divider" fill />
            </div>
            <div className="flex flex-wrap w-full text-sm ">
              <h3 className="font-Montserrat  w-full md:w-1/2 lg:w-1/3 md:text-start text-center">
                Designed by: Vpixel Turkey
              </h3>
              <h3 className="font-Montserrat w-full md:w-1/2 lg:w-1/3 text-center ">
                © 2024 Techtics.ai All Rights Reserved.
              </h3>
              <Link
                href="/"
                className="font-Montserrat  w-full md:w-1/2 lg:w-1/3 text-center md:text-start lg:text-center hover:text-[#54E8FF]"
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
