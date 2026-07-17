import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Code, Briefcase, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home", icon: <Home size={18} /> },
    { label: "About", href: "#about", icon: <User size={18} /> },
    { label: "Skills", href: "#skills", icon: <Code size={18} /> },
    { label: "Projects", href: "#projects", icon: <Briefcase size={18} /> },
    { label: "Contact", href: "#contact", icon: <Mail size={18} /> },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Navbar (Desktop & Mobile Header) */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-6'}`}>
        <div className="container mx-auto px-6 flex justify-center">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`flex items-center justify-between gap-6 px-6 py-2.5 rounded-full border transition-all duration-500 shadow-md ${
              scrolled 
              ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200/60 dark:border-slate-800/60 shadow-lg w-full max-w-4xl' 
              : 'bg-white/40 dark:bg-slate-950/40 backdrop-blur-md border-white/20 dark:border-slate-900/20 w-full md:w-fit'
            }`}
          >
            {/* Logo area */}
            <a 
              href="#home" 
              onClick={(e) => handleScrollTo(e, '#home')}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 dark:from-cyan-500 dark:to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-md transition-transform group-hover:scale-110">
                S
              </div>
              <span className="font-bold text-slate-800 dark:text-slate-100 tracking-tight block">Sarthak.</span>
            </a>

            {/* Desktop Center Links */}
            <ul className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleScrollTo(e, item.href)}
                      className={`text-[13px] font-bold transition-colors uppercase tracking-widest ${
                        isActive 
                        ? 'text-blue-600 dark:text-cyan-400' 
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Desktop Right Buttons (Theme Toggle & CV) */}
            <div className="hidden md:flex items-center gap-3">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full border border-slate-200/60 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
              
              <a
                href="Bhuptani_Sarthak.pdf"
                target="_blank"
                className="text-[12px] font-bold px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-500 dark:to-blue-500 hover:from-blue-700 hover:to-indigo-700 dark:hover:from-cyan-600 dark:hover:to-blue-600 text-white rounded-full transition-all shadow-md shadow-blue-200 dark:shadow-none"
              >
                CV
              </a>
            </div>

            {/* Mobile Header Right (Theme Toggle Only) */}
            <div className="flex items-center gap-2 md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full border border-slate-200/60 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation (Instagram Style) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-900/50 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] px-6 py-2 pb-3 flex items-center justify-between">
        {menuItems.map((item) => {
          const isActive = activeSection === item.href.replace('#', '');
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 relative py-1 ${
                isActive 
                ? 'text-blue-600 dark:text-cyan-400 scale-105' 
                : 'text-slate-500 dark:text-slate-400 font-medium'
              }`}
              style={{ width: '20%' }}
            >
              <div className="transition-transform active:scale-75">
                {item.icon}
              </div>
              <span className="text-[10px] tracking-wide font-medium">{item.label}</span>
              {isActive && (
                <motion.span 
                  layoutId="activeTabDot"
                  className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;