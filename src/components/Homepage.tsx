'use client'; // Mark this as a Client Component

import { motion } from 'framer-motion';

const Homepage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black flex flex-col justify-center items-center text-white">
      {/* Background with zoom animation and gradient overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0"
        initial={{ scale: 1.5 }} // Start zoomed in
        animate={{ scale: 1 }}   // Zoom out to normal
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <img
          src="/images/background-clouds.jpg"
          alt="Cloud background"
          className="w-full h-full object-cover opacity-50"
        />
        {/* Gradient overlay (darker at top, lighter at bottom) */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-black/60 to-black/30 z-10"></div>
      </motion.div>

      {/* Text and tagline with animation */}
      <motion.div
        className="relative z-20 text-center font-montserrat"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h1
          className="text-[3rem] md:text-[5rem] lg:text-[5rem] font-luckiest-guy text-transparent bg-clip-text"
          style={{ WebkitTextStroke: '2px white' }} // Outline effect for Safari
        >
          Nilesh Kanti
        </h1>
        <div className="mb-4 flex flex-wrap justify-center">
          <span className="text-green-500 text-lg sm:text-xl md:text-2xl mx-1 sm:mx-2">Designer</span>
          <span className="text-green-500 text-lg sm:text-xl md:text-2xl mx-1 sm:mx-2">Developer</span>
          <span className="text-green-500 text-lg sm:text-xl md:text-2xl mx-1 sm:mx-2">Creative</span>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400">Development Design Programming</p>
      </motion.div>

      {/* Navigation icons */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 flex gap-2 sm:gap-3 md:gap-4 z-20">
        <span className="text-xl sm:text-2xl md:text-3xl cursor-pointer p-1 sm:p-2 bg-white/10 rounded">🏠</span>
        <span className="text-xl sm:text-2xl md:text-3xl cursor-pointer p-1 sm:p-2 bg-white/10 rounded">ℹ️</span>
        <span className="text-xl sm:text-2xl md:text-3xl cursor-pointer p-1 sm:p-2 bg-white/10 rounded">💼</span>
        <span className="text-xl sm:text-2xl md:text-3xl cursor-pointer p-1 sm:p-2 bg-white/10 rounded">🎮</span>
      </div>
    </div>
  );
};

export default Homepage;