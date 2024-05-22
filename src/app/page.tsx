import Design from "@/components/Bussiness/Design";
import Comment from "@/components/Comments/Comment";

import Company from "@/components/CompanyIntro/Company";
import Finance from "@/components/Finance/Finance";
import Footer from "@/components/Footer/Footer";

import Introduction from "@/components/Introdution/Introduction";

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
      <div className="absolute w-screen h-screen top-[780%]">
        <Comment />
      </div>
      <div className="absolute w-screen h-[140%] pb-[100px] top-[950%]">
        <Footer />
      </div>
    </div>
  );
};

export default page;
