import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-16">
      <section className="w-full px-8 py-5 lg:px-24 bg-blue-100 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center gap-6">
          <p className="text-6xl">👋</p>
          <p className="font-bold text-4xl w-[50%]">
            The Best IT Agency Making Best IT Solutions
          </p>
        </div>
        <div>
          <button className="text-white bg-blue-500  hover:bg-blue-800 focus:ring-4 mt-5 top-3 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2">
            Rigister Now
          </button>
        </div>
      </section>
      <section className="w-full px-8 py-5 lg:px-24 bg-blue-500 text-white flex flex-col lg:flex-row items-center justify-between ">
        <div>
          {" "}
          <h1 className="text-2xl font-bold">IT AGENCY</h1>
          <p className="w-56 py-7">
            We gives you the blocks and components you need to create a truly
            Pofessional website
          </p>
          <div className="flex gap-5 text-2xl">
            <AiFillTwitterCircle />
            <MdOutlineFacebook />
            <ImLinkedin />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row py-10 lg:py-0  lg:gap-36">
          <div className="py-10 lg:py-0">
            <h1 className="text-xl font-bold">Services</h1>
            <div className="leading-8 pt-3">
              <p>Mobile Application</p>
              <p>Web Application</p>
              <p>UI & UX Design</p>
              <p>Content Creation</p>
              <p>Graphic Design</p>
            </div>
          </div>
          <div className="py-10 lg:py-0">
            <h1 className="text-xl font-bold">Help</h1>
            <div className="leading-8 pt-3">
              <p>Customer Support</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="py-10 lg:py-0">
            <h1 className="text-xl font-bold">About</h1>
            <div className="leading-8 pt-3">
              <p>Support</p>
              <p>Projects</p>
              <p>OnBoarding</p>
              <p>Quality</p>
              <p>Result</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
