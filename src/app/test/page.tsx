'use client';
import React, { useEffect, useState } from 'react';
// import { motion } from 'motion/react';
import { motion } from 'framer-motion';
// import './styles.css';

export default function App() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 p-4'>
      <div className='p-4 rounded-2xl'>
        <h1 className='text-4xl font-bold text-black dark:text-white'>
          Aceternity UI <ColourfulText text={`인생재밌따\t\t근데네시니까\t전자러갑니다`} />
        </h1>
        <div className='flex flex-col gap-4 pt-10'>
          <div className='flex gap-2 items-start'>
            <CheckIcon />
            <p className='text-black dark:text-white text-base'>Create and Share components everywhere.</p>
          </div>
          <div className='flex gap-2 items-start'>
            <CheckIcon />
            <p className='text-black dark:text-white text-base'>React, Motion and Tailwind CSS integrated.</p>
          </div>
          <div className='flex gap-2 items-start'>
            <CheckIcon />
            <p className='text-black dark:text-white text-base'>Share code and get featured on the website</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const CheckIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' className='h-5 w-5 text-neutral-600 dark:text-neutral-400 mt-0.5'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
      <path d='M9 12l2 2l4 -4' />
    </svg>
  );
};

function ColourfulText({ text }: { text: string }) {
  const colors = ['rgb(131, 179, 32)', 'rgb(47, 195, 106)', 'rgb(42, 169, 210)', 'rgb(4, 112, 202)', 'rgb(107, 10, 255)', 'rgb(183, 0, 218)', 'rgb(218, 0, 171)', 'rgb(230, 64, 92)', 'rgb(232, 98, 63)', 'rgb(249, 129, 47)'];

  const [currentColors, setCurrentColors] = useState(colors);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='grid grid-cols-7'>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${count}-${index}`}
          initial={{
            y: 0,
          }}
          animate={{
            color: currentColors[index % currentColors.length],
            y: [0, -3, 0],
            scale: [1, 1.01, 1],
            filter: ['blur(0px)', `blur(5px)`, 'blur(0px)'],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
          className='inline-block whitespace-pre font-sans tracking-tight'>
          {char}
        </motion.span>
      ))}
    </div>
  );
}
