import React from 'react'
import { motion } from 'framer-motion';
import { BsArrowRightShort } from "react-icons/bs";


const TeamLead = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2, delay: 0.1}}
    className='w-full'    
    >
      {/* JOB TITLE & COMPANY */}
      <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
        Community Manager
        <span className='text-sm mt-1 font-medium text-textGreen'>
           @Cardax
        </span>
      </h3>
      
      {/* Working Dates */}
      <p>May 2021 - Jun 2023</p>

      {/* INTRODUCTION */}
      <p className='mt-3 text-base font-light flex gap-2 text-textDark'><strong>
      Cardax is a Private, Non-custodial, and Multi-chain DEX.
      </strong></p>

      {/* Bullet Points */}
      <ul className='mt-4 flex flex-col gap-3 text-textDark'>
        
        <li className='text-base flex gap-2'>
          <span className='text-textGreen mt-1'> 
            <BsArrowRightShort />
          </span> 
          In charge of community management on Telegram and Discord.
        </li>

        <li className='text-base flex gap-2'>
          <span className='text-textGreen mt-1'> 
            <BsArrowRightShort />
          </span> 
          Create and curate engaging content, including images, videos, and blog posts, to drive audience engagement and increase website traffic.
        </li>

        <li className='text-base flex gap-2 '>
          <span className='text-textGreen mt-1'> 
            <BsArrowRightShort />
          </span> 
          Work closely with the marketing team to align social media initiatives with broader marketing objectives and campaigns.
        </li>

      </ul>

    </motion.div>
  )
}

export default TeamLead;
