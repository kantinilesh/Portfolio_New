'use client'; // Mark this as a Client Component

import { motion } from 'framer-motion';

const Homepage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black flex flex-col justify-center items-center text-white">
      {/* Background with zoom animation and dark overlay */}
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
        {/* Dark transparent overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
      </motion.div>

      {/* Text and tagline with animation */}
      <motion.div
        className="relative z-20 text-center font-montserrat" // Increased z-index to ensure text is above overlay
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-300">Nilesh Kanti</h1>
        <div className="mb-4">
          <span className="text-green-500 text-xl mx-2">Designer</span>
          <span className="text-green-500 text-xl mx-2">Developer</span>
          <span className="text-green-500 text-xl mx-2">Creative</span>
        </div>
        <p className="text-xl text-gray-400">Development Design Programming</p>
      </motion.div>

      {/* Navigation icons */}
      <div className="absolute bottom-8 flex gap-4 z-20"> {/* Increased z-index for icons */}
        <span className="text-2xl cursor-pointer p-2 bg-white/10 rounded">🏠</span>
        <span className="text-2xl cursor-pointer p-2 bg-white/10 rounded">ℹ️</span>
        <span className="text-2xl cursor-pointer p-2 bg-white/10 rounded">💼</span>
        <span className="text-2xl cursor-pointer p-2 bg-white/10 rounded">🎮</span>
      </div>
    </div>
  );
};

export default Homepage;