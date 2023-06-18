import React from 'react'
import { motion } from 'framer-motion';
import { BsArrowRightShort } from "react-icons/bs";


const QA = () => {
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
          @FalconSwap 
        </span>
      </h3>
      
      {/* Working Dates */}
      <p>Aug 2020 - Aug 2021</p>

      {/* INTRODUCTION */}
      <p className='mt-3 text-base font-light flex gap-2 text-textDark'><strong>
      FalconSwap is a low gas protocol for decentralized token
       swaps and token pools with 2-3x lower gas fees.
      </strong></p>

      {/* Bullet Points */}
      <ul className='mt-4 flex flex-col gap-3 text-textDark'>
        
        <li className='text-base flex gap-2'>
          <span className='text-textGreen mt-1'> 
            <BsArrowRightShort />
          </span> 
          In charge of community management on Telegram.
        </li>

        <li className='text-base flex gap-2'>
          <span className='text-textGreen mt-1'> 
            <BsArrowRightShort />
          </span> 
          Answering questions about services and Technical support.
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

export default QA;
