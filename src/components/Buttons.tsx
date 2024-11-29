"use client";

import React, { useState } from "react";
import "@/components/button.css";

export default function ExploreButton() {
  const [clicked, setclicked] = useState(false);

  return (
    <div>
      <button
        className="explorebutton button lg:text-[19px] text-sm  py-[14px] px-5 lg:px-8 lg:py-6  inline-block"
        onClick={() => setclicked(true)}
      >
        Start Exploring {!clicked && <span className="explore-icon">🚀</span>}
      </button>
    </div>
  );
}
