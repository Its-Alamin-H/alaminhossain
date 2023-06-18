import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { BsArrowRightSquare } from "react-icons/Bs";
import { AiFillThunderbolt } from "react-icons/ai";

import {
  profileImgCircle,
  CSS,
  HTML,
  ReactL,
  Next,
  Redux,
  NodeJS,
  Express,
  PostgreSQL,
  MongoDB,
  GraphQL,
  JavaScriptL,
  TypeScript,
  Python,
} from "@/public/assets";

const About = () => {
  return (
    <section id="about" className="max-w-containerSmall h-screen mx-auto mdl:px-10 py-96 lgl:py-32 flex flex-col gap-8 justify-center">
      <div className="flex items-center gap-10 pt-20 sml:pt-5">
        <SectionTitle titleNumber="0.1" titleName="About me" />
      </div>

      {/* CONTENT CONTAINER - GRID */}
      <div className="grid grid-cols-6 auto-rows-auto">
        {/* Text Portion */}
        <div className="row-span-2 col-start-1 col-end-5 text-base text-textDark font-medium max-mdl:col-span-full">
          <div className="mdl:w-11/12 text-xs sm:text-sm sml:text-base">
            {/* Floating image for tablets and Mobile devices */}
            <div className="pl-5 py-6 float-right">
              <div className="relative">
                <Image
                  className="mdl:hidden top-0 left-0 rounded-full w-24 sm:w-32 sml:w-40 md:w-48 border-2 border-textGreen"
                  src={profileImgCircle}
                  alt="profileImgCircle"
                />
                {/* <Image
                  className="rounded-lg h-full object-cover"
                  src={myporfile}
                  alt="myporfile"
                /> */}

                {/* background-blur-effect */}
                <div className=" mdl:hidden absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 sml:w-40 sml:h-40 md:w-48 md:h-48 bg-textGreen/20 rounded-full hover:bg-transparent duration-300 "></div>
              </div>
            </div>

            <p>
              Hello! My name is Alamin Hossain and I am a <span className="text-textGreen">full stack developer</span> with a passion for
              learning and problem solving. I bring a wealth of enthusiasm and expertise to every project I undertake.
              <br /> <br />
              I am extremely motivated to constantly develop my skills and grow professionally. I have Knowledge and a huge interest in the world of {" "}
              Cryptocurrency and <span className="text-textGreen"> Web3.</span>. I have been learning about cryptocurrencies since 2017 and have had the opportunity 
              to work on a range of <span className="text-textGreen">crypto projects.</span>
              <br /> <br />
              My interest in programming started when I was working for {" "}
              <span className="text-textGreen">Web3 projects</span> as a Community Manager. Since then I started learning about Programing and I am continuously expanding my knowledge in 
               <span className="text-textGreen"> AI/ML development</span> through self-learning and actively engaging in the open-source community.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="row-start-1 row-end-3 col-start-5 col-end-7 grid place-items-center relative group max-mdl:hidden">
          {/* Image container */}
          <div className="absolute w-52 h-52 lgl:w-80 lgl:h-80 -left-6 -top-6 rounded-full">
            {/* Actual Profile Pic */}
            <Image
              className="z-30 rounded-full absolute w-52 h-52 lgl:w-80 lgl:h-80 fill object-cover border-2 border-textGreen"
              src={profileImgCircle}
              alt="profilepicture"
            />

            {/* background-blur-effect */}
            <div className="z-30 hidden mdl:inline-block absolute w-52 h-52 lgl:w-80 lgl:h-80 bg-textGreen/20 rounded-full top-0 left-0 group-hover:bg-transparent duration-300 "></div>

            {/* Animated Circle */}
            <div className="z-10 left-6 top-6 hidden absolute mdl:inline-block w-52 h-52 lgl:w-80 lgl:h-80 border-2 border-textGreen rounded-full group-hover:-translate-x-6 group-hover:-translate-y-6 transition-transform duration-100"></div>
          </div>
        </div>

        {/* Skill Logo's */}
        <div className="row-start-3 col-span-full pt-5">
          <p className="pb-5 font-codeFont text-textDark font-bold underline underline-offset-1">
            The Technologies I am most profficient & passionate about:
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 ga-2 mt-6">
            <li className="flex items-center gap-2"> 
               <span className="text-textGreen">
                <AiFillThunderbolt/>
               </span>
                Python
            </li>
            <li className="flex items-center gap-2"> 
               <span className="text-textGreen">
                <AiFillThunderbolt/>
               </span>
               Flask
            </li>
            <li className="flex items-center gap-2"> 
               <span className="text-textGreen">
                <AiFillThunderbolt/>
               </span>
               PyTorch
            </li>
            <li className="flex items-center gap-2"> 
               <span className="text-textGreen">
                <AiFillThunderbolt/>
               </span>
               JavaScript
            </li>
            <li className="flex items-center gap-2"> 
               <span className="text-textGreen">
                <AiFillThunderbolt/>
               </span>
               Node.js
            </li>
            <li className="flex items-center gap-2"> 
               <span className="text-textGreen">
                <AiFillThunderbolt/>
               </span>
               Tailwindcss
            </li>
            <li className="flex items-center gap-2"> 
               <span className="text-textGreen">
                <AiFillThunderbolt/>
               </span>
                HTML5
            </li>
            <li className="flex items-center gap-2"> 
               <span className="text-textGreen">
                <AiFillThunderbolt/>
               </span>
                CSS3
            </li>
          </ul>




          <ul className="flex flex-row flex-wrap gap-4 ml-3 mt-1">
            {/* JavaScriptLogo */}
            <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className="rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={JavaScriptL}
                alt="JavaScript"
                title="JavaScript"
              />
            </li>
            {/* TypeScript Logo */}
            {/* <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className="rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={TypeScript}
                alt="TypeScript"
                title="TypeScript"
              />
            </li> */}
            {/* Python Logo */}
            <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className="rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={Python}
                alt="Python"
                title="Python"
              />
            </li>
            {/* HTML Logo */}
            <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className="rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={HTML}
                alt="HTML5"
                title="HTML5"
              />
            </li>
            {/* CSS */}
            <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image className="rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse" src={CSS} alt="CSS3" title="CSS3" />
            </li>
          </ul>
          <ul className="flex flex-row flex-wrap gap-4 ml-3 mt-5">
            {/* React Logo */}
            {/* <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className="rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={NodeJS}
                alt="NodeJS"
                title="NodeJS"
              />
            </li> */}
            {/* Next */}
            {/* <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className="rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={Next}
                alt="NextJS"
                title="NextJS"
              />
            </li> */}
            {/* Redux */}
            {/* <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image className="w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse" src={Redux} alt="Redux" title="Redux" />
            </li> */}
            {/* NodeJS */}
            {/* <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image className="w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse" src={NodeJS} alt="NodeJS" title="NodeJS" />
            </li> */}
            {/* Express */}
            {/* <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className="rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={Express}
                alt="ExpressJS"
                title="ExpressJS"
              />
            </li> */}
          </ul>
          <ul className="flex flex-row flex-wrap gap-4 ml-3 mt-5">
            {/* PostgreSQL */}
            {/* <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className="w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={PostgreSQL}
                alt="PostgreSQL"
                title="PostgreSQL"
              />
            </li> */}
            {/* MongoDB */}
            {/* <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className="rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={MongoDB}
                alt="MongoDB"
                title="MongoDB"
              />
            </li> */}
            {/* GraphQL */}
            {/* <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image className=" w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse" src={GraphQL} alt="GraphQL" title="GraphQL" />
            </li> */}
          </ul>
        </div>
        {/* <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl: p1-0">
             <Image
                className="rounded-lg h-full object-cover"
                 src={profileImgCircle}
                 alt="profileImgCircle"
              />
            <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/
               20 rounded-md top-left-0 group-hover: bg-transparent duration-300"></div>
            </div>
            <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen
                         rounded-md group-hover: -translate-x-2 group-hover: -translate-y-2
                          transition-transform duration-300"></div>
             </div>
         </div> */}
      </div>
    </section>
  );
};

export default About;

//I need to do something about the photo being warped in mobile view
