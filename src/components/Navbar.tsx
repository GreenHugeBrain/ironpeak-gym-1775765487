import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Programs', path: '/programs' },
  { name: 'Coaches', path: '/coaches' },
  { name: 'Booking', path: '/booking' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-tr from-ruby-500 to-rose-500 rounded-lg group-hover:scale-105 transition-transform">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
              IronPeak
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-ruby-500 dark:text-ruby-400'
                      : 'text-gray-600 hover:text-gray-900 dark:text-white/60 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4 border-l border-gray-200 dark:border-white/10 pl-6">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-500 hover:text-gray-900 dark:text-white/60 dark:hover:text-white bg-gray-100 dark:bg-white/5 rounded-full transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-xl font-semibold text-white hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-violet-500/25 text-sm"
              >
                Start Journey
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 hover:text-gray-900 dark:text-white/60 dark:hover:text-white bg-gray-100 dark:bg-white/5 rounded-full transition-colors"
            >
              {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 dark:text-white/80"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#080808]"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium px-4 py-2 rounded-lg ${
                    location.pathname === link.path
                      ? 'bg-ruby-50 dark:bg-ruby-500/10 text-ruby-600 dark:text-ruby-400'
                      : 'text-gray-600 dark:text-white/60 hover:bg-gray-50 dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex justify-center items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-xl font-semibold text-white hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-violet-500/25"
              >
                Start your journey
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}