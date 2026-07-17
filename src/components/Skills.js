import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiMongodb, SiMysql, SiGit, SiGithub,
  SiVisualstudiocode, SiPython, SiDjango, SiPostman,
  SiOpenai, SiGoogle
} from 'react-icons/si';
import { FiCpu, FiTerminal, FiActivity, FiHeart, FiZap } from 'react-icons/fi';

const frontendIcons = [
  { icon: SiReact, name: 'React', color: '#61dafb' },
  { icon: SiJavascript, name: 'JavaScript', color: '#f7df1e' },
  { icon: SiHtml5, name: 'HTML5', color: '#e34f26' },
  { icon: SiCss3, name: 'CSS3', color: '#1572b6' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06b6d4' }
];

const backendIcons = [
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47a248' },
  { icon: SiMysql, name: 'MySQL', color: '#4479a1' },
  { icon: SiPython, name: 'Python', color: '#3776ab' },
  { icon: SiDjango, name: 'Django', color: '#092e20', darkColor: '#44b78b' }
];

const toolsIcons = [
  { icon: SiGit, name: 'Git', color: '#f05032' },
  { icon: SiGithub, name: 'GitHub', color: '#181717', darkColor: '#ffffff' },
  { icon: SiVisualstudiocode, name: 'VS Code', color: '#007acc' },
  { icon: SiPostman, name: 'Postman', color: '#ff6c37' }
];

const aiIcons = [
  { icon: SiOpenai, name: 'ChatGPT', color: '#10a37f' },
  { icon: FiCpu, name: 'Copilot', color: '#6f42c1' },
  { icon: FiCpu, name: 'Claude', color: '#d97706' },
  { icon: SiGoogle, name: 'Gemini', color: '#4285f4' },
  { icon: FiTerminal, name: 'Cursor AI', color: '#000000', darkColor: '#ffffff' },
  { icon: FiActivity, name: 'Kiro', color: '#2563eb' },
  { icon: FiHeart, name: 'Lovable', color: '#ec4899' },
  { icon: FiZap, name: 'Antigravity', color: '#f59e0b' }
];

const TechCard = ({ tech, index }) => {
  const [hovered, setHovered] = useState(false);

  const getBrandColor = () => {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark && tech.darkColor) return tech.darkColor;
    return tech.color;
  };

  const brandColor = getBrandColor();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -3, scale: 1.04 }}
      transition={{ 
        delay: index * 0.01,
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        boxShadow: hovered ? `0 8px 20px -4px ${brandColor}25, 0 0 10px ${brandColor}15` : 'none',
        borderColor: hovered ? brandColor : undefined,
      }}
      className="flex items-center gap-2.5 px-3 py-2 sm:py-2.5 bg-slate-50/80 dark:bg-slate-900/40 backdrop-blur-sm rounded-xl border border-slate-200/60 dark:border-slate-800/85 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-850/50 transition-colors duration-300 group cursor-pointer shadow-sm w-full"
    >
      <tech.icon 
        style={{ color: hovered ? brandColor : undefined }}
        className="text-xl sm:text-2xl text-slate-700 dark:text-slate-300 transition-colors duration-300 flex-shrink-0" 
      />
      <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 transition-colors duration-300">
        {tech.name}
      </span>
    </motion.div>
  );
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }
  })
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 px-6 bg-transparent overflow-hidden">

      {/* Ambient blobs */}
      <motion.div
        animate={{ y: [0, -18, 0], scale: [1, 1.07, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-20 right-0 w-64 h-64 bg-indigo-400/8 dark:bg-cyan-500/8 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 14, 0], x: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 bg-blue-400/8 dark:bg-blue-500/8 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-[10px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-3">🔧 Skills</span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-slate-200 mb-4 leading-tight">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent font-bold">Technologies</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"
          />
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            A curated selection of frameworks, languages, databases, and development utilities I rely on to build scalable and high-performance applications.
          </p>
        </motion.div>

        {/* 2-Column Categorized Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Frontend Category Card */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: '0 20px 40px -10px rgba(99,102,241,0.12)' }}
            className="bg-white/70 dark:bg-slate-900/30 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/50 rounded-[2rem] p-6 sm:p-8 shadow-md shadow-slate-100/50 dark:shadow-none flex flex-col gap-6 text-left transition-shadow duration-300"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Frontend</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Interface languages & frameworks</p>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full">
              {frontendIcons.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Backend Category Card */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: '0 20px 40px -10px rgba(99,102,241,0.12)' }}
            className="bg-white/70 dark:bg-slate-900/30 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/50 rounded-[2rem] p-6 sm:p-8 shadow-md shadow-slate-100/50 dark:shadow-none flex flex-col gap-6 text-left transition-shadow duration-300"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Backend</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Server logic, database & algorithms</p>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full">
              {backendIcons.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Tools & Utilities Category Card */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: '0 20px 40px -10px rgba(99,102,241,0.12)' }}
            className="bg-white/70 dark:bg-slate-900/30 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/50 rounded-[2rem] p-6 sm:p-8 shadow-md shadow-slate-100/50 dark:shadow-none flex flex-col gap-6 text-left transition-shadow duration-300"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Tools & Utilities</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Version control & editors</p>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full">
              {toolsIcons.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </motion.div>

          {/* AI Tools Category Card */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: '0 20px 40px -10px rgba(99,102,241,0.12)' }}
            className="bg-white/70 dark:bg-slate-900/30 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/50 rounded-[2rem] p-6 sm:p-8 shadow-md shadow-slate-100/50 dark:shadow-none flex flex-col gap-6 text-left transition-shadow duration-300"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">AI Tools</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Generative helpers & IDE automation</p>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full">
              {aiIcons.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Skills;