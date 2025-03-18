import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

interface HomePageProps {
  isDarkMode: boolean;
}

function HomePage({ isDarkMode }: HomePageProps) {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax and fly-away effects for each word
  const words = ['Transforming', 'Ideas', 'into', 'Digital', 'Reality'];
  const wordAnimations = words.map((_, i) => ({
    y: useSpring(
      useTransform(
        scrollY,
        [0, 300],
        [0, -100 - (i * 50)],
        { clamp: false }
      ),
      { stiffness: 50, damping: 15 }
    ),
    x: useSpring(
      useTransform(
        scrollY,
        [0, 300],
        [0, (i % 2 === 0 ? -100 : 100) * (i + 1)],
        { clamp: false }
      ),
      { stiffness: 50, damping: 15 }
    ),
    scale: useSpring(
      useTransform(
        scrollY,
        [0, 300],
        [1, 0.8 + (i * 0.1)],
        { clamp: false }
      ),
      { stiffness: 50, damping: 15 }
    ),
    opacity: useSpring(
      useTransform(
        scrollY,
        [0, 200],
        [1, 0],
        { clamp: true }
      ),
      { stiffness: 50, damping: 15 }
    ),
    rotateX: useSpring(
      useTransform(
        scrollY,
        [0, 300],
        [0, i * 15],
        { clamp: false }
      ),
      { stiffness: 50, damping: 15 }
    ),
  }));

  // Subheading and buttons animations
  const subheadingOpacity = useTransform(scrollY, [0, 100, 300], [0.7, 1, 1]);
  const subheadingY = useTransform(scrollY, [0, 300], [0, 50]);
  const subheadingScale = useTransform(scrollY, [0, 300], [1, 1.1]);
  
  const buttonsContainerY = useTransform(scrollY, [0, 300], [0, 100]);
  const buttonsOpacity = useTransform(scrollY, [0, 100, 300], [0.7, 1, 1]);
  const buttonsScale = useTransform(scrollY, [0, 300], [1, 1.1]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen ${isDarkMode ? 'mesh-gradient' : 'light-mesh-gradient'}`}
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div ref={heroRef} className="relative z-10 perspective-1000">
          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-grotesk font-bold text-center mb-8 flex flex-wrap justify-center gap-x-4 gap-y-2 overflow-hidden">
            {words.map((word, i) => (
              <motion.span
                key={word}
                style={{
                  y: wordAnimations[i].y,
                  x: wordAnimations[i].x,
                  scale: wordAnimations[i].scale,
                  opacity: wordAnimations[i].opacity,
                  rotateX: wordAnimations[i].rotateX,
                }}
                className="inline-block transform-gpu"
              >
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent filter blur-[0.5px]">
                  {word}
                </span>
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            style={{
              y: subheadingY,
              opacity: subheadingOpacity,
              scale: subheadingScale,
            }}
            className="text-xl md:text-2xl text-gray-300 text-center mb-16 transform-gpu"
          >
            Custom App Development & Digital Solutions
          </motion.p>

          <motion.div
            style={{
              y: buttonsContainerY,
              opacity: buttonsOpacity,
              scale: buttonsScale,
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center transform-gpu mb-32"
          >
            <motion.button
              onClick={() => navigate('/projects')}
              className="btn-primary relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>
            
            <motion.button
              onClick={() => navigate('/contact')}
              className="btn-secondary relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Let's Connect</span>
              <motion.div
                className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-0 mb-32"
        >
          <div className="spline-container w-full h-[800px] md:h-[1000px] rounded-xl overflow-hidden">
            <Spline scene="https://prod.spline.design/El84HjOGyBgDcUA2/scene.splinecode" />
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <section className="py-24 bg-black/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Services & Expertise
            </h2>
            <p className="text-xl text-gray-300">
              Delivering cutting-edge solutions across multiple domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Modern, responsive web applications built with the latest technologies",
              },
              {
                title: "Mobile Solutions",
                description: "Cross-platform mobile apps that deliver exceptional user experiences",
              },
              {
                title: "Cloud Architecture",
                description: "Scalable cloud solutions designed for performance and reliability",
              },
              {
                title: "UI/UX Design",
                description: "Intuitive interfaces that engage and delight users",
              },
              {
                title: "DevOps",
                description: "Streamlined deployment and maintenance processes",
              },
              {
                title: "Consulting",
                description: "Expert guidance on digital transformation strategies",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "1+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "1000%", label: "Success Rate" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Jimme
              </h3>
              <p className="text-gray-300 mb-4">
                Transforming ideas into digital reality through innovative solutions and cutting-edge technology.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => navigate('/')} className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/projects')} className="text-gray-300 hover:text-white transition-colors">
                    Projects
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/contact')} className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <Mail size={16} />
                  <a href="mailto:contact@jimme.xyz" className="hover:text-white transition-colors">
                    contact@jimme.xyz
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Phone size={16} />
                  <a href="tel:+31639560208" className="hover:text-white transition-colors">
                    +31 639 560 208
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <MapPin size={16} />
                  Amsterdam, NL
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Swanta8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Github size={20} className="text-gray-300 hover:text-white transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/jimme-jon-ming-3b91b2188/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Linkedin size={20} className="text-gray-300 hover:text-white transition-colors" />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Twitter size={20} className="text-gray-300 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-300 text-center md:text-left">
                © 2025 Jimme. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

export default HomePage;