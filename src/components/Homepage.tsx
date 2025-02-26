import { motion } from 'framer-motion';

const Homepage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black flex flex-col justify-center items-center text-white">
      {/* Background with zoom animation */}
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
      </motion.div>

      {/* Text and tagline with animation */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-300 font-serif">Aamir Shaikh</h1>
        <div className="mb-4">
          <span className="text-green-500 text-xl mx-2">Designer</span>
          <span className="text-green-500 text-xl mx-2">Developer</span>
          <span className="text-green-500 text-xl mx-2">Creative</span>
        </div>
        <p className="text-xl text-gray-400">Crafting digital interfaces</p>
      </motion.div>

      {/* Navigation icons */}
      <div className="absolute bottom-8 flex gap-4 z-10">
        <span className="text-2xl cursor-pointer p-2 bg-white/10 rounded">🏠</span>
        <span className="text-2xl cursor-pointer p-2 bg-white/10 rounded">ℹ️</span>
        <span className="text-2xl cursor-pointer p-2 bg-white/10 rounded">💼</span>
        <span className="text-2xl cursor-pointer p-2 bg-white/10 rounded">🎮</span>
      </div>
    </div>
  );
};

export default Homepage;