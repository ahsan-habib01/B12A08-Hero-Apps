import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-50">
      <motion.div
        className="w-16 h-16 rounded-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.p
        className="mt-5 text-lg font-semibold text-[#632EE3]"
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default Loading;