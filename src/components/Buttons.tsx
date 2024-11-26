"use client";

import React, { useState } from "react";
import "@/components/button.css";

export default function ExploreButton() {
  const [clicked, setclicked] = useState(false);

  return (
    <div>
      <button
        className="explorebutton button py-4 px-8  inline-block"
        onClick={() => setclicked(true)}
      >
        Start Exploring {!clicked && <span className="explore-icon">🚀</span>}
      </button>
    </div>
  );
}
