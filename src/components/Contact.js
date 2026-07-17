import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiDownload, FiCopy, FiCheck } from 'react-icons/fi';

export default function Contact() {
  const EMAIL = "mrsarthak825@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="relative py-16 sm:py-32 bg-transparent flex items-center justify-center px-4 sm:px-6 pb-36 sm:pb-32 overflow-hidden">

      {/* Ambient floating blobs */}
      <motion.div
        animate={{ y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-blue-400/8 dark:bg-cyan-500/8 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 14, 0], x: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-400/8 dark:bg-purple-500/8 rounded-full blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full bg-white/50 dark:bg-slate-900/40 backdrop-blur-md rounded-[2rem] sm:rounded-[2.5rem] shadow-md border border-slate-200/70 dark:border-slate-800/80 p-6 sm:p-16 flex flex-col items-center text-center relative overflow-hidden"
      >
        {/* Ambient Top Glow (Subtle and clean) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

        {/* Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex flex-col items-center gap-1 mb-8"
        >
          <span className="text-[10px] sm:text-xs font-bold text-slate-400 dark:text-slate-505 uppercase tracking-widest block mb-1">
            👋 Say Hello
          </span>
          <span className="text-xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">Sarthak Bhuptani</span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Full Stack MERN Developer</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-800 dark:text-slate-200 mb-6 leading-tight max-w-2xl px-2 sm:px-0"
        >
          Have a project in mind?<br />
          <span className="font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Let's chat.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-650 dark:text-slate-350 text-sm sm:text-base font-normal mb-8 max-w-xl px-2 sm:px-0 leading-relaxed"
        >
          I'm Sarthak, a full-stack developer who loves writing clean code and building products that actually work. Whether you're looking to hire me, talk about a project, or just say hi, drop me a line!
        </motion.p>

        {/* Availability Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 rounded-full mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Available for full-time opportunities</span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap items-center justify-center gap-3 w-full z-10"
        >
          <motion.a
            href={`mailto:${EMAIL}`}
            whileHover={{ scale: 1.06, boxShadow: '0 10px 30px rgba(99,102,241,0.35)' }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-500 dark:to-blue-500 text-white rounded-full font-bold shadow-md shadow-blue-200 dark:shadow-none transition-all duration-300 text-sm col-span-2 sm:col-span-1"
          >
            <FiMail size={15} />
            Email Me
          </motion.a>

          <motion.a
            href="Bhuptani_Sarthak.pdf" target="_blank"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/80 rounded-full font-semibold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 text-sm"
          >
            <FiDownload size={15} />
            Resume
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sarthak-bhuptani-8a232a247/" target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/80 rounded-full font-semibold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 text-sm"
          >
            <FiLinkedin size={15} />
            LinkedIn
          </motion.a>

          <motion.a
            href="https://github.com/sarthak-bhuptani" target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/80 rounded-full font-semibold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 text-sm"
          >
            <FiGithub size={15} />
            GitHub
          </motion.a>
        </motion.div>

        {/* Display Email + Copy Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 text-center z-10"
        >
          <p className="text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold mb-3">Or write directly to</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 rounded-full">
            <a
              href={`mailto:${EMAIL}`}
              className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
            >
              {EMAIL}
            </a>
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              title="Copy email"
              aria-label="Copy email address"
              className="w-6 h-6 flex items-center justify-center rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors shadow-sm flex-shrink-0"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="text-emerald-500"
                  >
                    <FiCheck size={12} />
                  </motion.span>
                ) : (
                  <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                    <FiCopy size={12} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
          <AnimatePresence>
            {copied && (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[10px] text-emerald-500 font-semibold mt-1.5"
              >
                ✓ Copied to clipboard!
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}