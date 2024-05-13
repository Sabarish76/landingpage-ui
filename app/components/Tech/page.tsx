import React from "react";
import Mobile from "../../images/app.png";
import Web from "../../images/web.png";
import Digital from "../../images/digital.png";
import Content from "../../images/content.png";
import Tech1 from "../../images/tech1.png";
import Tech2 from "../../images/tech2.png";
import Tech3 from "../../images/tech3.png";
import Tech4 from "../../images/tech4.png";
import Tech5 from "../../images/tech5.png";
import Tech6 from "../../images/tech6.png";
import Tech7 from "../../images/tech7.png";
import Image from "next/image";

type Props = {};

const Tech = (props: Props) => {
  return (
    <div className="px-8 lg:px-24 py-6">
      <section>
        <h1 className="text-3xl font-bold text-center">
          Trustable 1000+ Technolgies Provide
        </h1>
        <div className="bg-slate-100 w-full h-fit justify-center items-center flex flex-col gap-7 p-5 lg:flex-row my-5">
          <Image src={Tech1} alt="tech" />
          <Image src={Tech2} alt="tech" />
          <Image src={Tech3} alt="tech" />
          <Image src={Tech4} alt="tech" />
          <Image src={Tech5} alt="tech" />
          <Image src={Tech6} alt="tech" />
          <Image src={Tech7} alt="tech" />
        </div>
      </section>
      <section className="grid lg:grid-cols-2 py-16">
        <div>
          <div className="lg:flex gap-24">
            {" "}
            <div className="flex items-center gap-6 bg-white rounded-md shadow-lg p-10">
              <div>
                <Image src={Mobile} alt="mobile" />
              </div>
              <div>
                <p className="font-bold text-blue-300">
                  Mobile
                  <br /> Applications
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 bg-white rounded-md shadow-lg p-10">
              <div>
                <Image src={Web} alt="mobile" />
              </div>
              <div>
                <p className="font-bold text-blue-300">
                  Web
                  <br /> Applications
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex gap-24 py-7">
            {" "}
            <div className="flex items-center gap-6 bg-white rounded-md shadow-lg p-12">
              <div>
                <Image src={Digital} alt="mobile" className="w-24" />
              </div>
              <div>
                <p className="font-bold text-blue-300">
                  Digital
                  <br />
                  Strategy
                </p>
              </div>
            </div>
            <div className="flex items-center gap-7 bg-white rounded-md shadow-lg p-12">
              <div>
                <Image src={Content} alt="mobile" className="w-24" />
              </div>
              <div>
                <p className="font-bold text-blue-300">
                  Content
                  <br /> Creative
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 lg:p-24">
          <h1 className="font-bold text-3xl">Sabarish Haridas</h1>
          <p className="py-3 text-slate-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            soluta error laborum cupiditate magni veniam harum quasi accusantium
            natus facere.
          </p>
          <button className="text-white bg-blue-500  hover:bg-blue-800 focus:ring-4 mt-5 top-3 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2">
            Rigister
          </button>
        </div>
      </section>
    </div>
  );
};

export default Tech;
