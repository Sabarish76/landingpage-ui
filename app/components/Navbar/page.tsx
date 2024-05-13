"use client";
import clsx from "clsx";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

type Props = {};

const Navbar = (props: Props) => {
  const [isopen, Setisopen] = useState(false);
  return (
    <>
      <nav className="flex justify-between px-8 items-center py-6 lg:px-24">
        <section className="">
          <div className="flex items-center gap-5  lg:gap-40">
            <IoMenu
              className="text-3xl cursor-pointer lg:hidden"
              onClick={() => Setisopen(true)}
            />
            <h1 className="text-2xl">IT AGENCY</h1>
            <div className=" items-center gap-10 hidden lg:flex">
              <p>Home</p>
              <p>About Us</p>
              <p>Contact</p>
              <p>Service</p>
            </div>
          </div>
        </section>
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isopen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute top-0 left-0 h-screen p-8 gap-8 z-50 flex">
            <IoClose
              onClick={() => Setisopen(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />
            <p>Home</p>
            <p>About Us</p>
            <p>Contact</p>
            <p>Service</p>
          </section>
        </div>
        <section className="">
          <button className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 mt-3 lg:mt-0 top-3 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2">
            Rigister
          </button>
        </section>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
