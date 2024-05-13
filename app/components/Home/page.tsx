import Image from "next/image";
import React from "react";
import Background from "../../images/bg.png";

type Props = {};

const Main = (props: Props) => {
  return (
    <>
      <div className="px-8 lg:px-24 py-6 lg:flex justify-between ">
        <section className="py-20 lg:py-36 lg:w-2/4">
          <p className="font-bold text-4xl leading-10">
            Introducing To Digital Education System And its Benefits For The
            Students
          </p>
          <br />
          <p className=" text-slate-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi,
            accusamus? Totam, cupiditate eos. Reiciendis quidem et culpa velit
            magni repellendus.
          </p>
          <button className="text-white bg-blue-500  hover:bg-blue-800 focus:ring-4 mt-5 top-3 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2">
            Rigister
          </button>
        </section>
        <section>
          <Image src={Background} alt="bg" className="lg:py-16" />
        </section>
      </div>
    </>
  );
};

export default Main;
