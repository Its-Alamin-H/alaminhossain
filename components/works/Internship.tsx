import React from 'react'
import { motion } from 'framer-motion';
import { BsArrowRightShort } from "react-icons/bs";


const Internship = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2, delay: 0.1}}
    className='w-full'    
    >
      {/* JOB TITLE & COMPANY */}
      <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
      Moderator
        <span className='text-sm mt-1 font-medium text-textGreen'>
          @TokenMind 
        </span>
      </h3>
      
      {/* Working Dates */}
      <p>Jul 2021 - Sep 2021</p>

      {/* INTRODUCTION */}
      <p className='mt-3 text-base font-light flex gap-2 text-textDark'><strong>
      TokenMinds is a full stack blockchain project development agency.
      </strong></p>

      {/* Bullet Points */}
      <ul className='mt-4 flex flex-col gap-3 text-textDark'>
        
        <li className='text-base flex gap-2'>
          <span className='text-textGreen mt-1'> 
            <BsArrowRightShort />
          </span> 
          Manage client’s blockchain communities.
        </li>

        <li className='text-base flex gap-2'>
          <span className='text-textGreen mt-1'> 
            <BsArrowRightShort />
          </span> 
          Technical assistance for client’s blockchain communities.
        </li>

        <li className='text-base flex gap-2 '>
          <span className='text-textGreen mt-1'> 
            <BsArrowRightShort />
          </span> 
          Banned scammers/spammers/fudders to make chat clean and get a
          good response from the community.
        </li>

      </ul>

    </motion.div>
  )
}

export default Internship;
