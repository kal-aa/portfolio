import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center p-10"
    >
      <h1 className="text-4xl font-bold">Hi, I&apos; Kal 👋</h1>
      <p className="text-gray-500">Frontend Developer</p>
    </motion.div>
  );
}