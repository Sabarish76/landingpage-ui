import React from "react";
import { BiSupport } from "react-icons/bi";
import { TiChartBarOutline } from "react-icons/ti";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { TbBrandCoreos } from "react-icons/tb";
import { LiaLastfm } from "react-icons/lia";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="px-8 py-6 lg:px-24">
      <h1 className="text-3xl font-bold text-center">
        Why Choose Our It Agency
      </h1>
      <section className="py-5">
        <div className="grid lg:grid-cols-3 gap-8 w-[95%]">
          <div className=" bg-white rounded-lg shadow-2xl">
            <BiSupport className="mx-auto text-4xl mt-8" />
            <h1 className="text-center py-3 mt-3 text-2xl font-bold">
              Support
            </h1>
            <p className="w-48 text-center mx-auto py-3 text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              illo?
            </p>
          </div>
          <div className=" bg-white rounded-lg shadow-2xl">
            <TiChartBarOutline className="mx-auto text-4xl mt-8" />
            <h1 className="text-center py-3 mt-3 text-2xl font-bold">
              Technology & Design
            </h1>
            <p className="w-48 text-center mx-auto py-3 text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              illo?
            </p>
          </div>
          <div className=" bg-white rounded-lg shadow-2xl">
            <MdSpaceDashboard className="mx-auto text-4xl mt-8" />
            <h1 className="text-center py-3 mt-3 text-2xl font-bold">
              OnBoard
            </h1>
            <p className="w-48 text-center mx-auto py-3 text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              illo?
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 w-[95%] py-6">
          <div className=" bg-white rounded-lg shadow-2xl">
            <AiOutlineProduct className="mx-auto text-4xl mt-8" />
            <h1 className="text-center py-3 mt-3 text-2xl font-bold">
              Product
            </h1>
            <p className="w-48 text-center mx-auto py-3 text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              illo?
            </p>
          </div>
          <div className=" bg-white rounded-lg shadow-2xl">
            <TbBrandCoreos className="mx-auto text-4xl mt-8" />
            <h1 className="text-center py-3 mt-3 text-2xl font-bold">
              Quality
            </h1>
            <p className="w-48 text-center mx-auto py-3 text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              illo?
            </p>
          </div>
          <div className=" bg-white rounded-lg shadow-2xl">
            <LiaLastfm className="mx-auto text-4xl mt-8" />
            <h1 className="text-center py-3 mt-3 text-2xl font-bold">Result</h1>
            <p className="w-48 text-center mx-auto py-3 text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              illo?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
