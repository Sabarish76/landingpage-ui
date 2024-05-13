import Image from "next/image";
import React from "react";
import Profile1 from "../../images/profile1.jpg";
import Profile2 from "../../images/profile2.jpg";
import Profile3 from "../../images/profile3.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Star from "../../images/star.png";

type Props = {};

const Tesimonials = (props: Props) => {
  return (
    <div className="px-8 py-16 lg:px-24">
      <section>
        <h1 className="text-3xl font-bold text-center">
          Feedback From Clients
        </h1>
        <div className="py-16">
          <div className="grid lg:grid-cols-3 w-[95%] gap-10">
            <div className=" bg-white shadow-xl rounded-lg px-3">
              <div className="flex items-center justify-between">
                {" "}
                <div className="flex gap-5 items-center">
                  <Image
                    src={Profile1}
                    alt="profile"
                    className="h-20 w-20 rounded-full"
                  />
                  <div>
                    <h1 className="font-bold text-xl">Alex</h1>
                    <p>Client</p>
                  </div>
                </div>
                <div>
                  <div>
                    <Image src={Star} alt="star" className="w-20" />
                  </div>
                </div>
              </div>
              <div className="py-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet ad quo, architecto minus omnis dignissimos sed
                  explicabo soluta modi ipsum quod. Facilis libero perferendis
                  dolores itaque dicta iure numquam temporibus?
                </p>
              </div>
            </div>
            <div className=" bg-white shadow-xl rounded-lg px-3">
              <div className="flex items-center justify-between">
                {" "}
                <div className="flex gap-5 items-center">
                  <Image
                    src={Profile2}
                    alt="profile"
                    className="h-20 w-20 rounded-full"
                  />
                  <div>
                    <h1 className="font-bold text-xl">Jessie</h1>
                    <p>Client</p>
                  </div>
                </div>
                <div>
                  <div>
                    <Image src={Star} alt="star" className="w-20" />
                  </div>
                </div>
              </div>
              <div className="py-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet ad quo, architecto minus omnis dignissimos sed
                  explicabo soluta modi ipsum quod. Facilis libero perferendis
                  dolores itaque dicta iure numquam temporibus?
                </p>
              </div>
            </div>
            <div className=" bg-white shadow-xl rounded-lg px-3">
              <div className="flex items-center justify-between">
                {" "}
                <div className="flex gap-5 items-center">
                  <Image
                    src={Profile3}
                    alt="profile"
                    className="h-20 w-20 rounded-full"
                  />
                  <div>
                    <h1 className="font-bold text-xl">Victor</h1>
                    <p>Client</p>
                  </div>
                </div>
                <div>
                  <div>
                    <Image src={Star} alt="star" className="w-20" />
                  </div>
                </div>
              </div>
              <div className="py-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet ad quo, architecto minus omnis dignissimos sed
                  explicabo soluta modi ipsum quod. Facilis libero perferendis
                  dolores itaque dicta iure numquam temporibus?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <button className="text-blue-500 bg-white p-4 border-2 border-slate-200">
            <FaArrowRight />
          </button>
          <button className="text-white bg-blue-500 p-4 border-2 border-slate-200">
            <FaArrowLeft />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Tesimonials;
