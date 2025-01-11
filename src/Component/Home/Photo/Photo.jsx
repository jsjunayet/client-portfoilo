"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {  duration: 0.4, ease: "easeIn" },
      }}
      className=" flex items-center justify-center lg:justify-end w-full  lg:mt-0"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.2, duration: 0.4, ease: "easeInOut" },
        }}
        className="relative"
      >
       <div className="md:w-[300px] w-[250px]">
       <Image
          className="rounded-full  shadow-2xl shadow-green-300"
          src={'/sadia_author.jpg'}
          alt="Picture of the author"
          priority
          quality={100}
          width={300}
          height={300}
          blurDataURL="data:..."
        />
       </div>
        <motion.svg
          className="absolute inset-0  w-full h-full"
          fill="transparent"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="200"
            cy="200"
            r="200"
            stroke="#00ff99"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: "24 10 0 0",
            }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [150, 420],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};

export default Photo;