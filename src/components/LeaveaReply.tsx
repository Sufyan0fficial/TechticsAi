import React from "react";
import AnimatedWrapper from "./MotionWrapper";

function LeaveaReply() {
  return (
    <AnimatedWrapper
      ease="easeInOut"
      scale={0.8}
      delay={0.5}
      duration={0.5}
      from="bottom"
    >
      <div
        className="rounded-3xl bg-[#001D56] xl:px-36 md:py-36 md:px-20 px-10 py-20 hover:border-4 transition-all duration-75 "
        style={{
          background:
            "radial-gradient(46.18% 91.07% at 52.56% -38.46%, #0242BA 0%, #001D56 100%)",
        }}
      >
        <h2 className="text-white text-left">Leave a reply</h2>
        <div className="flex lg:flex-row flex-col gap-4 mt-16">
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-6 py-3 focus:outline-none border border-white bg-transparent placeholder-white "
            />
            <input
              type="text"
              placeholder="Your Mobile No."
              className="w-full pl-6 py-3 focus:outline-none border border-white bg-transparent placeholder-white"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="w-full pl-6 py-3 focus:outline-none border border-white bg-transparent placeholder-white"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <textarea
              rows={6}
              className="focus:outline-none border border-white p-6 placeholder-white bg-transparent w-full "
            >
              Your Message
            </textarea>
          </div>
        </div>
        <button className="font-semibold button genbutton tracking-widest uppercase px-14 py-4 lg:text-[19px]  rounded-sm mt-6 lg:mt-2">
          Submit
        </button>
      </div>
    </AnimatedWrapper>
  );
}

export default LeaveaReply;
