import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import HoverText from "../HoverText";

const TheAgency = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const scale = useSpring(scaleProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="h-screen bg-black z-20 relative">
      <motion.section
        style={{ scale }}
        className="w-screen h-screen flex flex-col justify-center gap-8 sticky top-0"
      >
        <motion.h1
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-7xl font-bold"
        >
          <HoverText text="We sell attention" />
        </motion.h1>
      </motion.section>
    </div>
  );
};

export default TheAgency;
