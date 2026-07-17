// src/components/Projects.js
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

import stockImg from '../assets/stock.png';
import voiceImg from '../assets/voice.png';
import libraryImg from '../assets/library.png';
import newsImg from '../assets/news.png';
import quizeImg from '../assets/quiz.png';
import mindcareImg from '../assets/mindcare.png';

const projects = [
  {
    title: 'MindCare',
    description: 'A modern mental wellness web application offering AI-driven support, therapeutic resources, and mental health tracking.',
    category: 'Full Stack',
    stack: ['React', 'Node.js', 'MongoDB', 'Express'],
    img: mindcareImg,
    demo: 'https://minddcare.netlify.app/',
    repo: 'https://github.com/sarthak-bhuptani/MindCare',
  },
  {
    title: 'Quize Platform',
    description: 'A high-fidelity, full-stack examination ecosystem engineered for modern education with AI-powered quiz generation.',
    category: 'Full Stack',
    stack: ['React', 'Node.js', 'MongoDB', 'AI'],
    img: quizeImg,
    demo: 'https://quizeemaster.netlify.app/',
    repo: 'https://github.com/sarthak-bhuptani/QuizeMaster',
  },
  {
    title: 'Stock Predictor',
    description: 'ML-enabled web app forecasting market trends with LSTM models and interactive Plotly visualizations.',
    category: 'Python',
    stack: ['Python', 'LSTM', 'Plotly', 'Flask'],
    img: stockImg,
    demo: '#',
    repo: 'https://github.com/sarthak-bhuptani?tab=repositories',
  },
  {
    title: 'Voice Assistant',
    description: 'Python-based AI assistant that processes voice commands for web search, media control, and automation.',
    category: 'Python',
    stack: ['Python', 'AI', 'Speech API'],
    img: voiceImg,
    demo: '#',
    repo: 'https://github.com/sarthak-bhuptani/Voice-Assistance',
  },
  {
    title: 'News Hub',
    description: 'Responsive React news aggregator featuring real-time headlines, category filtering, and instant search.',
    category: 'React',
    stack: ['React', 'REST API', 'CSS'],
    img: newsImg,
    demo: '#',
    repo: 'https://github.com/sarthak-bhuptani/News-App--HelloNews',
  },
  {
    title: 'Library Manager',
    description: 'Comprehensive system for managing academic library resources, student records, and fine calculations.',
    category: 'Full Stack',
    stack: ['React', 'Node.js', 'MySQL'],
    img: libraryImg,
    demo: '#',
    repo: 'https://github.com/sarthak-bhuptani/Library-Managment-System',
  }
];

// Color map for stack badges
const stackColors = {
  'React':      'bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
  'Node.js':    'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800',
  'MongoDB':    'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
  'Express':    'bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700',
  'Python':     'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  'LSTM':       'bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800',
  'Plotly':     'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
  'Flask':      'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
  'AI':         'bg-fuchsia-50 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-200 dark:border-fuchsia-800',
  'Speech API': 'bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800',
  'REST API':   'bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800',
  'CSS':        'bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800',
  'MySQL':      'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
};

const defaultBadge = 'bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const tabs = ['All', 'Full Stack', 'React', 'Python'];

  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return projects;
    return projects.filter(p => p.category === activeTab);
  }, [activeTab]);

  const projectsToDisplay = showAll ? filteredProjects : filteredProjects.slice(0, 3);
  const hasMore = filteredProjects.length > 3;

  return (
    <section id="projects" className="relative py-24 bg-transparent overflow-hidden">

      {/* Ambient orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.07, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-20 left-0 w-80 h-80 bg-blue-400/8 dark:bg-cyan-500/8 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 16, 0], x: [0, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 bg-indigo-400/8 dark:bg-blue-500/8 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-slate-200 mb-4">
            Selected<br />
            <span className="font-bold text-slate-900 dark:text-white bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Works</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '3rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"
          />
          <p className="text-slate-700 dark:text-slate-300 max-w-2xl text-lg font-normal">
            A small gallery of recent projects chosen by me.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2.5 mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setShowAll(false); }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab
                ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-md'
                : 'bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800/80 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white shadow-sm'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode='popLayout'>
            {projectsToDisplay.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8, boxShadow: '0 25px 50px -10px rgba(99,102,241,0.18)' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-[2rem] overflow-hidden border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col"
              >
                {/* Project Image */}
                <div className="h-48 overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-200/30 dark:border-slate-800/30 relative">
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category badge on image */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-[10px] font-bold text-slate-600 dark:text-slate-300 rounded-full border border-slate-200/60 dark:border-slate-700 uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3 font-normal leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${stackColors[tech] || defaultBadge}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo for ${project.title}`}
                      className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                        project.demo === '#'
                          ? 'text-slate-300 dark:text-slate-600 cursor-not-allowed pointer-events-none'
                          : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400'
                      }`}
                    >
                      <ExternalLink size={15} /> Demo
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Source code for ${project.title}`}
                      className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      <Github size={15} /> Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(99,102,241,0.2)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-8 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 rounded-full font-bold shadow-sm hover:shadow-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
              {showAll ? <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" /> : <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />}
            </motion.button>
          </div>
        )}

      </div>
    </section>
  );
}