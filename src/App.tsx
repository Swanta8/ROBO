import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Moon, Sun, Send } from 'lucide-react';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './components/ProjectDetail';
import ContactPage from './pages/ContactPage';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsNavVisible(true);
    setLastScrollY(currentScrollY);
  }, []);

  useEffect(() => {
    let timeoutId: number;
    const onScroll = () => {
      if (timeoutId) {
        window.cancelAnimationFrame(timeoutId);
      }
      timeoutId = window.requestAnimationFrame(() => handleScroll());
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleConnect = () => {
    navigate('/contact');
  };

  // Navbar animations - now with consistent opacity
  const navBlur = useTransform(scrollY, [0, 200], [8, 12]);
  const navElevation = useTransform(scrollY, [0, 200], [4, 8]);

  return (
    <div className={`relative min-h-screen overflow-x-hidden ${isDarkMode ? 'mesh-gradient' : 'light-mesh-gradient'}`}>
      <motion.div
        className="custom-cursor"
        animate={{ 
          x: mousePosition.x, 
          y: mousePosition.y,
          background: `radial-gradient(circle at center, var(--accent) 0%, var(--secondary) 100%)`
        }}
        transition={{ 
          type: "spring",
          damping: 25,
          stiffness: 400,
          mass: 0.5
        }}
      />

      <motion.nav 
        style={{ 
          backdropFilter: `blur(${navBlur}px)`,
          boxShadow: `0 ${navElevation}px ${navElevation.get() * 2}px rgba(0,0,0,0.1)`,
        }}
        className="floating-taskbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link 
                to="/" 
                className="text-2xl font-grotesk font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"
              >
                Jimme
              </Link>
            </motion.div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {['Home', 'Projects', 'Contact'].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="nav-link-floating"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="theme-toggle-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="mobile-menu-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? 
                  <X size={24} className={isDarkMode ? 'text-white' : 'text-gray-800'} /> : 
                  <Menu size={24} className={isDarkMode ? 'text-white' : 'text-gray-800'} />
                }
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mobile-menu"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['Home', 'Projects', 'Contact'].map((item) => (
                  <Link
                    key={item}
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="mobile-menu-link"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage isDarkMode={isDarkMode} />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={handleConnect}
        className="connect-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Send size={24} />
      </motion.button>
    </div>
  );
}

export default App;