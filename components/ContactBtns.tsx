"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Btn from "@/components/Btn";

export default function ContactBtns() {
  return (
    <motion.div
      initial={{ gridGap: "100%" }}
      animate={{ gridGap: 0 }}
      transition={{ duration: 0.5 }}
      className="contact-btns-container"
    >
      <motion.div
        initial={{ marginLeft: "-200%" }}
        animate={{ marginLeft: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="mailto:sadkalshayee@gmail.com" target="_blank">
          <Btn bg="red" text="sadkalshayee@gmail.com" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ marginRight: "-200%" }}
        animate={{ marginRight: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="tel:+251968350741" target="_blank">
          <Btn text="(+251) 9-68350741" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
