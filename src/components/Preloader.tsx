import React from "react";
import Lottie from "lottie-react";
import animationData from "@/assets/preloader.json"; // <-- your Lottie file

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <Lottie animationData={animationData} loop={true} className="w-72 h-72" />
    </div>
  );
};

export default Preloader;
