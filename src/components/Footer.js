import React from "react";
import { motion } from "framer-motion";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FiGithub, href: "https://github.com/sarthak-bhuptani", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/sarthak-bhuptani-8a232a247/", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:mrsarthak825@gmail.com", label: "Email" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-300 overflow-hidden z-10 transition-colors duration-300">

      {/* Animated gradient top border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-px bg-gradient-to-r from-transparent via-blue-500 dark:via-blue-500 to-transparent origin-left"
      />

      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-400/8 dark:bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6 relative z-10">

        {/* === DESKTOP LAYOUT (lg+): 3 columns side-by-side === */}
        <div className="hidden lg:flex flex-row justify-between items-start mb-14">

          {/* Brand / Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xs"
          >
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Sarthak Bhuptani</span>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Full Stack MERN Developer building fast, clean, and user-focused web applications.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Available for work</span>
            </div>
          </motion.div>

          {/* Nav Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold mb-4">Navigation</p>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:border-blue-400 dark:group-hover:border-blue-500/50 group-hover:bg-slate-50 dark:group-hover:bg-slate-700 transition-all shadow-sm">
                    <Icon size={15} />
                  </span>
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* === MOBILE LAYOUT (< lg): compact 2-row design === */}
        <div className="lg:hidden mb-10">

          {/* Brand row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">Sarthak Bhuptani</span>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed max-w-xs">
              Full Stack MERN Developer — building fast, clean web apps.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Available for work</span>
            </div>
          </motion.div>

          {/* Nav + Socials side by side */}
          <div className="flex gap-10">

            {/* Nav Links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1"
            >
              <p className="text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold mb-3">Pages</p>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <p className="text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold mb-3">Connect</p>
              <div className="flex flex-col gap-2.5">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon size={13} />
                    </span>
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800" />

        {/* Bottom Row */}
        <div className="flex flex-row items-center justify-between gap-3 pt-5 pb-24 md:pb-6">
          <p className="text-[10px] sm:text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1 flex-wrap">
            Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.35, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1 }}
              className="inline-flex"
            >
              <FiHeart className="text-red-500" size={11} />
            </motion.span>
            {" "}by{" "}
            <span className="text-slate-700 dark:text-slate-300 font-semibold">Sarthak Bhuptani</span>
            <span className="text-slate-400 dark:text-slate-600 ml-1">© {new Date().getFullYear()}</span>
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 dark:hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
            title="Back to top"
          >
            <FiArrowUp size={16} />
          </motion.button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
