import React from "react";
import { motion } from "framer-motion";
import { BsArrowRightShort } from "react-icons/Bs";

const Freelance = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 0.1 }} className="w-full">
      {/* JOB TITLE & COMPANY */}
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Founder of
        <span className="text-sm mt-1 font-medium text-textGreen">@The Moon'z boy'z</span>
      </h3>

      {/* Working Dates */}
      <p>May 2018 - Present</p>

      {/* INTRODUCTION */}
      <p className="mt-3 text-base font-light flex gap-2 text-textDark">
        <strong>
        A group of friends came together to establish TMBs, a venture capital focused on cryptocurrencies.
        </strong>
      </p>

      {/* Bullet Points */}
      <ul className="mt-4 flex flex-col gap-3 text-textDark">
        <li className="text-base flex gap-2">
          <span className="text-textGreen mt-1">
            <BsArrowRightShort />
          </span>
          We analyze new crypto projects to make investment.
        </li>

        <li className="text-base flex gap-2">
          <span className="text-textGreen mt-1">
            <BsArrowRightShort />
          </span>
          we regularly track and analyze the market conditions to stay up-to-date on industry trends.
        </li>

        <li className="text-base flex gap-2 ">
          <span className="text-textGreen mt-1">
            <BsArrowRightShort />
          </span>
          We help each other to make good decision.
        </li>
      </ul>
    </motion.div>
  );
};

export default Freelance;
