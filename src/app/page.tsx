import Association from "@/components/Association";
import Design from "@/components/Bussiness/Design";
import CompanyIntro from "@/components/CompanyIntro";
import Company from "@/components/CompanyIntro/Company";
import Finance from "@/components/Finance/Finance";

import GraphContainer from "@/components/GraphContainer";
import Intro from "@/components/Intro";
import Introduction from "@/components/Introdution/Introduction";
import Lottery from "@/components/Lottery";
import Status from "@/components/Status";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <div>
        <Introduction />

        <Company />
      </div>
      <div className="absolute w-screen h-screen top-[370%]">
        <Design />
      </div>
      <div className="absolute w-screen h-screen top-[530%]">
        <Finance />
      </div>
    </div>
  );
};

export default page;
