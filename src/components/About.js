import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }
  })
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 220, damping: 18, delay: i * 0.12 + 0.5 }
  })
};

const stats = [
  { value: '2+', label: 'Years Coding' },
  { value: '8+', label: 'Projects Built' },
  { value: '1+', label: 'Years Experience' }
];

const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-24 px-6 bg-transparent overflow-hidden">

      {/* Decorative floating blobs */}
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-10 right-10 w-48 h-48 bg-purple-400/8 dark:bg-purple-500/8 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="pointer-events-none absolute bottom-10 left-0 w-64 h-64 bg-blue-400/8 dark:bg-cyan-500/8 rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 lg:gap-16 items-start relative z-10">

        {/* --- LEFT COLUMN: Profile & Experience --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
          className="w-full md:w-5/12 space-y-8"
        >
          <div className="space-y-6 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-800 dark:text-slate-200 leading-tight break-words"
            >
              About
              <br />
              <span className="font-semibold tracking-tight text-slate-900 dark:text-white">Sarthak Bhuptani</span>
            </motion.h2>

            {/* Profile image with ring animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-[240px] sm:max-w-[300px] aspect-square mx-auto md:mx-0"
            >
              {/* Animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-[2.5rem] border-2 border-dashed border-blue-400/30 dark:border-cyan-400/20 pointer-events-none"
                style={{ margin: '-6px' }}
              />
              <div className="rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-md border border-slate-200/50 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md group w-full h-full">
                <img
                  src={profileImg}
                  alt="Sarthak Bhuptani"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Desktop Only Social Overlay */}
                <div className="absolute hidden md:flex bottom-4 left-0 right-0 justify-center gap-3">
                  {[
                    { href: 'https://www.linkedin.com/in/sarthak-bhuptani-8a232a247/', Icon: FiLinkedin },
                    { href: 'https://github.com/sarthak-bhuptani', Icon: FiGithub },
                    { href: '#contact', Icon: FiMail }
                  ].map(({ href, Icon }, i) => (
                    <motion.a
                      key={i}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center text-slate-800 dark:text-slate-200 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="pt-2 text-center md:text-left"
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Sarthak Bhuptani</h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mt-1 uppercase tracking-wider">Full Stack Developer</p>

              {/* Mobile Social Row */}
              <div className="flex md:hidden justify-center gap-4 mt-6">
                {[
                  { href: 'https://www.linkedin.com/in/sarthak-bhuptani-8a232a247/', Icon: FiLinkedin },
                  { href: 'https://github.com/sarthak-bhuptani', Icon: FiGithub },
                  { href: '#contact', Icon: FiMail }
                ].map(({ href, Icon }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.93 }}
                    className="w-11 h-11 bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-sm transition-all"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <div className="flex justify-center md:justify-start gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={statVariants}
                whileHover={{ y: -4, scale: 1.06 }}
                className="text-center"
              >
                <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-0.5">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- RIGHT COLUMN: Narrative --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0.2}
          className="w-full md:w-7/12 space-y-6 sm:space-y-10 text-[1rem] sm:text-[1.15rem] text-slate-700 dark:text-slate-300 font-normal leading-[1.8] pt-2 md:pt-44 text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            I'm a <strong className="font-bold text-slate-900 dark:text-white">Full Stack MERN Developer</strong> passionate about building scalable and user-friendly web applications. I have experience developing AI-powered projects, stock management systems, and modern business applications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.22 }}
          >
            I specialize in{' '}
            <span className="font-semibold text-slate-900 dark:text-white underline decoration-blue-500/30 dark:decoration-cyan-400/30 underline-offset-8">
              React, Node.js, Express.js, MongoDB, and REST APIs
            </span>
            , with a strong focus on clean code, performance, and continuous learning.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;