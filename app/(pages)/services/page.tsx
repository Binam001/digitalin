import Packages from "@/components/services/Packages";
import SeoComparison from "@/components/services/SeoComparison";
import ServiceSection from "@/components/services/ServiceSection";
import React from "react";

const page = () => {
  return (
    <div>
      <ServiceSection />
      <Packages />
      <SeoComparison />
    </div>
  );
};

export default page;
