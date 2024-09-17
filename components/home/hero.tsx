"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header
      className="relative w-full md:h-[362px] h-[200px] flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/hero.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black opacity-30 absolute w-full h-full z-10"></div>
      <motion.div
        className="absolute w-full px-8 md:px-16 text-center text-[#fff] md:text-[40px] text-[20px] font-bold z-20"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Be inspired, cook with passion, and savor unforgettable moments at the
        table.
      </motion.div>
    </header>
  );
}
