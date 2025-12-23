import AdsViewer from "@/components/portfolio/AdsViewer";
import OurWork from "@/components/portfolio/OurWork";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <div className="h-dvh"></div> */}
      <div className="relative">
        <AdsViewer />
        <div className="h-dvh"></div>
      </div>
      <OurWork />
    </div>
  );
};

export default page;
