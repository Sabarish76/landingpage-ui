import React from "react";
import Image from "next/image";
import Project1 from "../../images/project1.png";
import Project2 from "../../images/project2.png";
import Project3 from "../../images/project3.png";
import Project4 from "../../images/project4.png";

type Props = {};

const Service = (props: Props) => {
  return (
    <div className="px-8 py-12 lg:px-24">
      <section>
        <h1 className="text-3xl font-bold text-center">Our Services</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 py-7 text-slate-400">
          <p className="text-blue-500">Mobile Application</p>
          <p>Web Application</p>
          <p>UI & UX Design</p>
          <p>Content Creation</p>
          <p>Graphic Design</p>
        </div>
        <div className="flex flex-col items-center lg:flex-row justify-around leading-9 lg:pr-10">
          <Image src={Project1} alt="project" className="w-52 py-3" />
          <Image src={Project2} alt="project" className="w-52 py-3" />
          <Image src={Project3} alt="project" className="w-52 py-3" />
          <Image src={Project4} alt="project" className="w-52 py-3" />
        </div>
      </section>
    </div>
  );
};

export default Service;
