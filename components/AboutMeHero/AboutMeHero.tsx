"use client";
import { motion } from "framer-motion";

export default function AboutMeHero() {
  return (
    <div className="about-me-hero">
      <motion.div
        initial={{ marginTop: "-150%" }}
        animate={{ marginTop: 0 }}
        transition={{ duration: 0.5 }}
        className="H3_bold-phone black H3_bold-tablet H3_bold-laptop"
      >
        I’m{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "backIn" }}
        >
          Kalab
        </motion.span>{" "}
        Fox
      </motion.div>
      <div className="P-tablet black-75 space-y-2 max-w-[900px] xl:max-w-[1200px]">
        <motion.p
          initial={{ marginRight: "-150%" }}
          animate={{ marginRight: 0 }}
          transition={{ duration: 0.8 }}
        >
          I was born in Woldia, Ethiopia almost two and a half decades ago. From
          an early age, I showed interest in computers, and that curiosity
          eventually grew into a passion.
        </motion.p>

        <motion.p
          initial={{ marginLeft: "-150%" }}
          animate={{ marginLeft: 0 }}
          transition={{ duration: 0.8 }}
        >
          I got into web design and development through passion and
          self-learning. Teaching myself and building projects out of curiosity
          helped me discover what I truly enjoy and want to pursue for the rest
          of my life.
        </motion.p>

        <motion.p
          initial={{ marginRight: "-150%" }}
          animate={{ marginRight: 0 }}
          transition={{ duration: 1 }}
        >
          Currently, I help businesses around the world by designing and coding
          websites and mobile apps. I’ve had the pleasure of working with major
          companies like Apple, Microsoft, and Amazon — just to name a few.
          Right now, I’m based in New York.
        </motion.p>
      </div>
    </div>
  );
}
