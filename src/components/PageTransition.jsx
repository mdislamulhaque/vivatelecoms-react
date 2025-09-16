// src/components/PageTransition.jsx
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      key={location.pathname} // route change detect
      initial={{ x: "100%", opacity: 0 }} // শুরুতে একদম ডান থেকে
      animate={{ x: 0, opacity: 1 }} // স্ক্রিনে ঢুকবে
      exit={{ x: "-100%", opacity: 0 }} // আগের পেজ বামে সরে যাবে
      transition={{ duration: 1, ease: "easeInOut" }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
