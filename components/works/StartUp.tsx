import React from 'react'
import { motion } from 'framer-motion';
import { BsArrowRightShort } from "react-icons/bs";


const StartUp = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2, delay: 0.1}}
    className='w-full'    
    >
      {/* JOB TITLE & COMPANY */}
      <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
         Freelancer
        <span className='text-sm mt-1 font-medium text-textGreen'>
          @Upwork 
        </span>
      </h3>
      
      {/* Working Dates */}
      <p>Jan 2019 - present</p>

      {/* INTRODUCTION */}
      <p className='mt-3 text-base font-light flex gap-2 text-textDark'><strong>
      Upwork is a marketplace for freelancers in fields like writing, graphic design and web development and other services
      </strong></p>

      {/* Bullet Points */}
      <ul className='mt-4 flex flex-col gap-3 text-textDark'>
        
        <li className='text-base flex gap-2'>
          <span className='text-textGreen mt-1'> 
            <BsArrowRightShort />
          </span> 
          Video Editing 
        </li>

        <li className='text-base flex gap-2'>
          <span className='text-textGreen mt-1'> 
            <BsArrowRightShort />
          </span> 
          Web Development
        </li>

        <li className='text-base flex gap-2 '>
          <span className='text-textGreen mt-1'> 
            <BsArrowRightShort />
          </span> 
          Community Management
        </li>

      </ul>

    </motion.div>
  )
}

export default StartUp;
