import { motion } from "framer-motion";
import HoverText from "../HoverText";
const Expertise = () => {
  return (
    <section className="w-screen h-screen flex flex-col justify-center gap-8 sticky top-0 bg-background">
      <motion.h1
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-7xl font-bold"
      >
        <HoverText text="And attention sells products" />
      </motion.h1>
    </section>
  );
};

export default Expertise;
