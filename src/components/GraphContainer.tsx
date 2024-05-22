import React from "react";
import { Graphs } from "./_db";
import BarChart from "./Graph";

const GraphContainer: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-[34px]">
      <div className="flex justify-between items-center">
        <div className="text-[#27438C] text-[21px] font-[600]">
          Компанийн <span className="text-[#1DAFEC]">танилцуулга</span>
        </div>
        <div className="text-[#27438C] text-[14px]">(сая төгрөг)</div>
      </div>

      <div className="flex flex-col gap-[24px] md:flex-row">
        {Graphs.map((graph, index) => (
          <div
            key={index}
            className="bg-white w-full md:w-[33%] py-[10px] drop-shadow-xl rounded-lg px-[5px]"
          >
            <BarChart
              title={graph.title}
              labels={graph.labels}
              data={graph.datas}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphContainer;
