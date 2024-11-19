"use client";

import { Container } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../public/Techticslogo.svg";
import Link from "next/link";

function Header() {
  const [isscroll, setisscroll] = useState(false);
  const [clicked, setclicked] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setisscroll(true);
      } else {
        setisscroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`h-24 flex items-center sticky inset-0 cursor-pointer z-10 ${
        clicked &&
        "!items-start min-h-screen py-6 bg-gradient-to-b from-[#060A30] to-[#0416FE] !fixed z-20"
      }  ${isscroll ? "bg-[#060A30]" : "bg-transparent"}`}
      onMouseEnter={() => setisscroll(true)}
      onMouseLeave={() => {
        if (window.scrollY < 60) {
          setisscroll(false);
        }
      }}
      style={{
        transition: "background-color 0.7s",
      }}
    >
      <Container maxWidth="lg">
        <div className="flex justify-between items-center h-full">
          <div className="w-[200px] md:w-[300px] h-[49px] relative">
            <Image
              src={logo}
              alt="Logo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-center object-contain"
            />
          </div>
          <div className="font-Montserrat font-semibold text-base text-white uppercase  gap-6 justify-center items-center flex-grow tracking-widest lg:flex hidden">
            <Link
              href="/AboutUs"
              className="hover:text-[#45E7FF] transition-colors duration-500"
            >
              About us
            </Link>
            <Link
              href="/Services"
              className="hover:text-[#45E7FF] transition-colors duration-500"
            >
              Services
            </Link>
            <Link
              href="/Portfolio"
              className="hover:text-[#45E7FF] transition-colors duration-500"
            >
              Portfolio
            </Link>
            <Link
              href="/"
              className="hover:text-[#45E7FF] transition-colors duration-500"
            >
              Blogs
            </Link>
          </div>
          <button className="font-Montserrat font-semibold text-base text-black bg-gradient-to-r from-[#FEFC45] to-[#41FE51] text-center w-[215px] h-[50px] rounded-md uppercase tracking-widest hidden lg:block hover:from-white hover:to-white ">
            Consult us
          </button>
          <div className="block lg:hidden relative md:w-14 md:h-14 w-10 h-10">
            {clicked ? (
              <Image
                src="/closeicon.png"
                alt="menubar"
                fill
                onClick={() => setclicked((pre) => !pre)}
              />
            ) : (
              <Image
                src="/menubar.png"
                alt="menubar"
                fill
                onClick={() => setclicked((pre) => !pre)}
              />
            )}
          </div>

          {/* {clicked && (
            <div className="fixed left-0 top-[96px] h-screen w-full border lg:hidden flex  justify-center bg-red-500">
              <div className="text-white font-bold text-4xl  ">Hello world</div>
            </div>
          )} */}
        </div>
        {clicked && (
          <div className="flex flex-col gap-6 font-Montserrat text-white text-xl tracking-widest font-extrabold items-center justify-center mt-20 md:mt-28 md:text-2xl lg:hidden">
            <Link href="/" className="uppercase hover:text-[#45E7FF]">
              About us
            </Link>
            <Link href="/" className="uppercase hover:text-[#45E7FF]">
              Services
            </Link>
            <Link href="/" className="uppercase hover:text-[#45E7FF]">
              Portfolio
            </Link>
            <Link href="/" className="uppercase hover:text-[#45E7FF]">
              Blogs
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Header;
