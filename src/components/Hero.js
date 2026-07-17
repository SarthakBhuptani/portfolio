import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import { SiReact, SiNodedotjs, SiMongodb, SiNextdotjs, SiPython, SiGit, SiOpenai } from 'react-icons/si';

const roles = ['Full Stack MERN Developer', 'React Developer', 'Node.js Engineer', 'AI Enthusiast'];

function Hero() {
  const typedRole = useTypewriter(roles);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-20 bg-transparent overflow-hidden">

      {/* Floating ambient orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-32 -left-32 w-72 h-72 bg-blue-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* --- LEFT CONTENT --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-left order-2 lg:order-1"
          >
            {/* Location Badge */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-md border border-slate-200/50 dark:border-slate-800/50 rounded-full mb-8"
            >
              <motion.span
                animate={{ rotate: [0, 15, -10, 15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                className="text-sm"
              >📍</motion.span>
              <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Gandhinagar, India</span>
            </motion.div>

            {/* Title with shimmer on hover */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-7xl font-extrabold text-slate-900 dark:text-white mb-2 leading-[1.1] tracking-tight"
            >
              <motion.span
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="bg-[length:200%_auto] bg-gradient-to-r from-slate-900 via-blue-700 to-slate-900 dark:from-white dark:via-cyan-300 dark:to-white bg-clip-text text-transparent"
              >
                Sarthak Bhuptani
              </motion.span>
            </motion.h1>

            {/* Typewriter Subtitle */}
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold mb-8 h-9"
            >
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
                {typedRole}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-blue-600 dark:bg-cyan-400 ml-0.5 align-middle"
              />
            </motion.h2>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-slate-700 dark:text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mb-12 font-normal"
            >
              I build modern, scalable web applications using{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">React, Node.js, Express, and MongoDB.</strong>{' '}
              Passionate about creating{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">high-performance solutions</strong>{' '}
              and exploring{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">AI-powered applications.</strong>
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 z-10 relative">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.06, boxShadow: '0 8px 30px rgba(99,102,241,0.35)' }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('projects');
                  if (element) {
                    const y = element.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-500 dark:to-blue-500 text-white rounded-full shadow-lg shadow-blue-200 dark:shadow-none font-bold text-sm tracking-wide transition-all"
              >
                View Projects
              </motion.a>
              <motion.a
                href="Bhuptani_Sarthak.pdf"
                target="_blank"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border border-slate-200/60 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 rounded-full shadow-sm font-bold text-sm tracking-wide transition-all"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* --- RIGHT VISUAL: Animated Tech Orbit --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-1 relative h-[340px] sm:h-[420px] w-full max-w-[420px] order-1 lg:order-2 items-center justify-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">

              {/* Orbit 1: Inner Orbit Line */}
              <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-slate-200/40 dark:border-slate-800/40 border-dashed animate-[spin_40s_linear_infinite]" />

              {/* Orbit 2: Outer Orbit Line */}
              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-slate-200/30 dark:border-slate-800/30 border-dashed animate-[spin_60s_linear_infinite]" />

              {/* Center: Glowing Code brackets emblem */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ boxShadow: ['0 0 0px rgba(99,102,241,0.3)', '0 0 30px rgba(99,102,241,0.5)', '0 0 0px rgba(99,102,241,0.3)'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full border-4 border-white dark:border-slate-800 bg-gradient-to-tr from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 flex items-center justify-center shadow-2xl z-20 select-none"
              >
                <span className="text-xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">&lt;/&gt;</span>
              </motion.div>

              {/* Glow Behind Center */}
              <div className="absolute w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/25 dark:bg-cyan-500/25 blur-2xl rounded-full z-10"></div>

              {/* Inner Orbiting Icons (React, Node, MongoDB) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="absolute w-44 h-44 sm:w-56 sm:h-56 z-20 pointer-events-none"
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  whileHover={{ scale: 1.2 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md flex items-center justify-center text-xl sm:text-2xl text-[#61dafb] pointer-events-auto cursor-pointer"
                  title="React"
                >
                  <SiReact />
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  whileHover={{ scale: 1.2 }}
                  className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md flex items-center justify-center text-xl sm:text-2xl text-[#339933] pointer-events-auto cursor-pointer"
                  title="Node.js"
                  style={{ left: '6.8%', top: '75%' }}
                >
                  <SiNodedotjs />
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  whileHover={{ scale: 1.2 }}
                  className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md flex items-center justify-center text-xl sm:text-2xl text-[#47a248] pointer-events-auto cursor-pointer"
                  title="MongoDB"
                  style={{ right: '6.8%', top: '75%' }}
                >
                  <SiMongodb />
                </motion.div>
              </motion.div>

              {/* Outer Orbiting Icons (Next.js, Python, AI, Git) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                className="absolute w-64 h-64 sm:w-80 sm:h-80 z-20 pointer-events-none"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                  whileHover={{ scale: 1.2 }}
                  className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md flex items-center justify-center text-xl sm:text-2xl text-slate-800 dark:text-white pointer-events-auto cursor-pointer"
                  title="Next.js"
                  style={{ left: '14.6%', top: '14.6%' }}
                >
                  <SiNextdotjs />
                </motion.div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                  whileHover={{ scale: 1.2 }}
                  className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md flex items-center justify-center text-xl sm:text-2xl text-[#3776ab] pointer-events-auto cursor-pointer"
                  title="Python"
                  style={{ right: '14.6%', top: '14.6%' }}
                >
                  <SiPython />
                </motion.div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                  whileHover={{ scale: 1.2 }}
                  className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md flex items-center justify-center text-xl sm:text-2xl text-[#10a37f] pointer-events-auto cursor-pointer"
                  title="Artificial Intelligence"
                  style={{ right: '14.6%', bottom: '14.6%' }}
                >
                  <SiOpenai />
                </motion.div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                  whileHover={{ scale: 1.2 }}
                  className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md flex items-center justify-center text-xl sm:text-2xl text-[#f05032] pointer-events-auto cursor-pointer"
                  title="Git"
                  style={{ left: '14.6%', bottom: '14.6%' }}
                >
                  <SiGit />
                </motion.div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-20"
        onClick={() => {
          const el = document.getElementById('about');
          if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
        }}
      >
        <span className="text-[9px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-start justify-center pt-1.5"
        >
          <motion.div
            animate={{ y: [0, 6, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;