"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex flex-col items-center px-4 space-y-16">
      <div className="flex flex-col items-center text-center space-y-4">
        <motion.div
          initial={{ marginLeft: "-200%" }}
          animate={{ marginLeft: 0 }}
          transition={{ duration: 0.3 }}
          className="H3-phone H3-tablet H3-laptop"
        >
          Hey there, I’m Kalab
        </motion.div>
        <motion.div
          initial={{ marginRight: "-200%" }}
          animate={{ marginRight: 0 }}
          transition={{ duration: 0.5 }}
          className="H2-phone H2-tablet H2-laptop w-full"
        >
          Freelance Web Designer & Developer
        </motion.div>
        <motion.div
          initial={{ marginLeft: "-200%" }}
          animate={{ marginLeft: 0 }}
          transition={{ duration: 1 }}
          className="P-phone P-laptop black-75 max-w-[1000px] xl:max-w-[1200px] w-full"
        >
          I help business grow by crafting amazing web experiences. If you’re
          looking for a designer and developer that likes to get stuff done,
          let’s talk
        </motion.div>
      </div>

      {/* See my work btn */}
      <Link href="#my-work" className="see-my-work-btn brand-gradient">
        <span className="P_xs-phone P_xs-tablet P_xs- P_xs-laptop">
          See my work
        </span>{" "}
        <FaRegArrowAltCircleDown size={24} className="inline" />
      </Link>
    </div>
  );
}
