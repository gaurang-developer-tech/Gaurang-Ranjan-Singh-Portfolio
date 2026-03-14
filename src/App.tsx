/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Github, Linkedin, Mail, Code2, Terminal, Award, Trophy, Phone, BookOpen, ArrowRight, FileText, Download, Cpu, Smartphone, BrainCircuit, Activity, Users, Zap, Crosshair } from 'lucide-react';
import { FaJava, FaPython, FaNodeJs, FaReact, FaHtml5, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiDart, SiMysql, SiTensorflow, SiKeras, SiTailwindcss, SiNumpy, SiPandas, SiScikitlearn, SiPostman, SiLatex } from 'react-icons/si';
import Marquee from 'react-fast-marquee';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

export default function App() {
  const [isHovering, setIsHovering] = useState(false);

  // High-performance cursor tracking using Framer Motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 28, stiffness: 500, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const dotSpringConfig = { damping: 40, stiffness: 1000, mass: 0.1 };
  const dotXSpring = useSpring(cursorX, dotSpringConfig);
  const dotYSpring = useSpring(cursorY, dotSpringConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [cursorX, cursorY]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "connect" },
      },
      modes: {
        connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
      },
    },
    particles: {
      color: { value: "#00FF41" }, // Terminal Green
      links: { color: "#00FF41", distance: 120, enable: true, opacity: 0.1, width: 1 },
      move: { enable: true, speed: 0.8, direction: "none", random: true, straight: false, outModes: { default: "bounce" } },
      number: { density: { enable: true, width: 800, height: 800 }, value: 60 },
      opacity: { value: 0.4 },
      shape: { type: "square" }, // Brutalist square particles
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  }), []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const techStack1 = [
    { name: "Java", icon: FaJava, color: "#f89820" },
    { name: "C/C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Dart", icon: SiDart, color: "#0175C2" },
    { name: "SQL", icon: FaDatabase, color: "#336791" },
    { name: "HTML/CSS", icon: FaHtml5, color: "#E34F26" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    { name: "Keras", icon: SiKeras, color: "#D00000" },
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  ];

  const techStack2 = [
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "NumPy", icon: SiNumpy, color: "#4DABCF" },
    { name: "Pandas", icon: SiPandas, color: "#FFFFFF" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "LaTeX", icon: SiLatex, color: "#008080" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-400 font-sans selection:bg-[#00FF41] selection:text-black cursor-none">
      {/* Custom Cursor - Brutalist Square */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#00FF41] pointer-events-none z-[100] mix-blend-difference flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(0, 255, 65, 0.1)' : 'transparent',
          rotate: isHovering ? 45 : 0,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#00FF41] pointer-events-none z-[100]"
        style={{
          x: dotXSpring,
          y: dotYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Particles Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions as any}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-white font-mono font-bold tracking-tighter text-xl flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#00FF41]" />
            GRS<span className="text-[#00FF41] animate-pulse">_</span>
          </span>
          <div className="hidden md:flex space-x-8 text-xs font-mono tracking-widest uppercase">
            {['About', 'Education', 'Tech Stack', 'Certifications', 'Projects', 'Resume'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-zinc-500 hover:text-[#00FF41] transition-colors flex items-center gap-1"
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollTo('contact')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="hidden md:block border border-[#00FF41] text-[#00FF41] px-5 py-1.5 text-xs font-mono uppercase tracking-widest hover:bg-[#00FF41] hover:text-black transition-all"
          >
            CONTACT
          </button>
        </div>
      </nav>

      <main className="relative z-10">
        {/* About / Hero Section */}
        <section id="about" className="min-h-screen pt-20 flex items-center relative overflow-hidden px-6">
          {/* Grid Background Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="py-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#222] bg-[#111] text-xs font-mono text-zinc-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                <span className="w-2 h-2 rounded-full bg-[#00FF41]"></span>
                <span className="ml-2">guest@grs-portfolio:~</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tighter">
                <span className="text-[#00FF41] font-mono font-light mr-2 md:mr-4">{">"}</span>
                Gaurang<br/>
                <span className="text-zinc-500">Full-Stack & ML</span>
              </h1>
              
              <p className="text-zinc-400 text-lg mb-10 max-w-lg leading-relaxed font-light">
                B.Tech Computer Science student at IIIT Sonepat. Architecting scalable web applications, engineering machine learning models, and solving complex algorithmic challenges.
              </p>

              <div className="flex flex-wrap items-center gap-4 font-mono text-sm">
                <button 
                  onClick={() => scrollTo('contact')}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="bg-[#00FF41] text-black px-6 py-3 font-bold hover:bg-white transition-colors flex items-center gap-2 uppercase tracking-wider"
                >
                  Execute_Hire <ArrowRight className="w-4 h-4" />
                </button>
                <a 
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="flex items-center gap-2 text-white border border-[#333] bg-[#111] px-6 py-3 hover:border-[#00FF41] hover:text-[#00FF41] transition-colors uppercase tracking-wider"
                >
                  <FileText className="w-4 h-4" /> View Resume
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-full flex items-end justify-center md:justify-end"
            >
              <img 
                src="/profile.png" 
                alt="Gaurang Ranjan Singh" 
                className="max-h-[50vh] md:max-h-[70vh] object-contain object-bottom drop-shadow-2xl rounded-b-none rounded-t-full border-4 border-[#00FF41]/30"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 px-6 border-t border-[#111]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <BookOpen className="w-8 h-8 text-[#00FF41]" />
                <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">Education</h2>
                <div className="h-px bg-[#222] flex-grow ml-4"></div>
              </div>
              
              <div className="space-y-4">
                <div 
                  className="bg-[#0a0a0a] border border-[#222] p-8 hover:border-[#00FF41] transition-all duration-300 group relative overflow-hidden"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#00FF41] scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00FF41] transition-colors">B.Tech Computer Science and Engineering</h3>
                      <p className="text-zinc-500 mt-2 font-mono text-sm">{">"} Indian Institute of Information Technology (IIIT) Sonepat</p>
                    </div>
                    <div className="text-left md:text-right font-mono">
                      <span className="inline-block px-3 py-1 border border-[#333] text-[#00FF41] text-xs mb-2">Aug 2023 - Expected 2027</span>
                      <p className="text-zinc-400 text-sm">CGPA: <span className="text-white">8.44/10</span></p>
                    </div>
                  </div>
                </div>

                <div 
                  className="bg-[#0a0a0a] border border-[#222] p-8 hover:border-[#00FF41] transition-all duration-300 group relative overflow-hidden"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#00FF41] scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00FF41] transition-colors">High School (12th: 96%) | ICSE (10th: 98.4%)</h3>
                      <p className="text-zinc-500 mt-2 font-mono text-sm">{">"} City Montessori School, Lucknow</p>
                    </div>
                    <div className="text-left md:text-right font-mono">
                      <span className="inline-block px-3 py-1 border border-[#333] text-zinc-400 text-xs">2021 - 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack (Skills) Section with Marquee */}
        <section id="tech-stack" className="py-24 px-6 border-t border-[#111] bg-[#020202]">
          <div className="max-w-7xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <Terminal className="w-8 h-8 text-[#00FF41]" />
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">Tech Stack</h2>
              <div className="h-px bg-[#222] flex-grow ml-4"></div>
            </motion.div>
          </div>
          
          <div className="relative py-8" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none"></div>
            
            <Marquee speed={40} pauseOnHover={true} gradient={false} className="py-8">
              {techStack1.map((skill, index) => {
                const Icon = skill.icon as any;
                return (
                <div 
                  key={index} 
                  className="mx-4 flex items-center justify-center w-24 h-24 bg-[#0a0a0a] border border-[#222] transition-all duration-300 cursor-default group relative"
                >
                  {/* Tooltip */}
                  <div 
                    className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-xs font-mono px-3 py-1 bg-[#111] border whitespace-nowrap z-50 pointer-events-none" 
                    style={{ color: skill.color, borderColor: skill.color }}
                  >
                    {skill.name}
                  </div>
                  
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                    style={{ border: `1px solid ${skill.color}`, boxShadow: `inset 0 0 20px ${skill.color}20` }}
                  ></div>
                  <Icon 
                    className="w-12 h-12 transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12 relative z-10" 
                    style={{ color: skill.color, filter: `drop-shadow(0 0 12px ${skill.color}60)` }}
                  />
                </div>
              )})}
            </Marquee>
            
            <Marquee speed={30} direction="right" pauseOnHover={true} gradient={false} className="py-8 mt-2">
              {techStack2.map((skill, index) => {
                const Icon = skill.icon as any;
                return (
                <div 
                  key={index} 
                  className="mx-4 flex items-center justify-center w-24 h-24 bg-[#0a0a0a] border border-[#222] transition-all duration-300 cursor-default group relative"
                >
                  {/* Tooltip */}
                  <div 
                    className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-xs font-mono px-3 py-1 bg-[#111] border whitespace-nowrap z-50 pointer-events-none" 
                    style={{ color: skill.color, borderColor: skill.color }}
                  >
                    {skill.name}
                  </div>
                  
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                    style={{ border: `1px solid ${skill.color}`, boxShadow: `inset 0 0 20px ${skill.color}20` }}
                  ></div>
                  <Icon 
                    className="w-12 h-12 transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12 relative z-10" 
                    style={{ color: skill.color, filter: `drop-shadow(0 0 12px ${skill.color}60)` }}
                  />
                </div>
              )})}
            </Marquee>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-24 px-6 border-t border-[#111]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <Award className="w-8 h-8 text-[#00FF41]" />
                <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">Certifications</h2>
                <div className="h-px bg-[#222] flex-grow ml-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div 
                  className="bg-[#0a0a0a] border border-[#222] p-8 hover:border-[#00FF41] transition-all duration-300 group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Trophy className="w-8 h-8 text-[#00FF41] mb-6" />
                  <h3 className="text-lg font-bold text-white mb-2">GATE 2026 Qualified</h3>
                  <p className="text-zinc-500 text-sm font-mono leading-relaxed">Computer Science and Information Technology (CSE/IT) | Data Science and AI (DA/AI)</p>
                </div>
                
                <div 
                  className="bg-[#0a0a0a] border border-[#222] p-8 hover:border-[#00FF41] transition-all duration-300 group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Code2 className="w-8 h-8 text-[#00FF41] mb-6" />
                  <h3 className="text-lg font-bold text-white mb-2">Competitive Programming</h3>
                  <p className="text-zinc-500 text-sm font-mono leading-relaxed">Codeforces Pupil (Max Rating: 1170, 300+ Solved) <br/> CodeChef 2-Star (2023 - Present)</p>
                </div>

                <div 
                  className="bg-[#0a0a0a] border border-[#222] p-8 hover:border-[#00FF41] transition-all duration-300 group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Cpu className="w-8 h-8 text-[#00FF41] mb-6" />
                  <h3 className="text-lg font-bold text-white mb-4">Oracle Cloud Infrastructure</h3>
                  <ul className="text-zinc-400 text-sm space-y-3 font-mono">
                    <li className="flex flex-col gap-1">
                      <a href="#" className="hover:text-[#00FF41] transition-colors">{">"} Data Science Prof.</a>
                      <span className="text-zinc-600 text-xs">Valid till 2027</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <a href="#" className="hover:text-[#00FF41] transition-colors">{">"} Generative AI Prof.</a>
                      <span className="text-zinc-600 text-xs">Valid till 2027</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <a href="#" className="hover:text-[#00FF41] transition-colors">{">"} AI Foundations Assoc.</a>
                      <span className="text-zinc-600 text-xs">Valid till 2027</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 border-t border-[#111] bg-[#020202]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-16">
                <Code2 className="w-8 h-8 text-[#00FF41]" />
                <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">My_Projects</h2>
                <div className="h-px bg-[#222] flex-grow ml-4"></div>
              </div>

              <div className="space-y-12">
                {/* Project 1: ML */}
                <div 
                  className="group bg-[#0a0a0a] border border-[#222] hover:border-[#00FF41] transition-all duration-500 flex flex-col lg:flex-row overflow-hidden"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Visual Side */}
                  <div className="lg:w-2/5 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[#222] bg-[#050505] min-h-[300px]">
                    <div className="absolute inset-0 bg-[#00FF41]/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1555949963-aa79dcee57d5?q=80&w=800&auto=format&fit=crop" 
                      alt="Dynamic-SLAM" 
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                    {/* Overlay Tech Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] z-20 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute top-4 left-4 z-30 flex items-center gap-2 bg-[#000] border border-[#00FF41] px-3 py-1 text-[#00FF41] font-mono text-xs uppercase">
                      <BrainCircuit className="w-4 h-4" /> ML / Computer Vision
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:w-3/5 p-8 md:p-10 flex flex-col justify-between relative">
                    <div className="absolute top-0 right-0 w-16 h-16 border-l border-b border-[#222] bg-[#111] flex items-center justify-center text-zinc-600 font-mono text-xs">01</div>
                    
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#00FF41] transition-colors">Dynamic-SLAM</h3>
                      <p className="text-zinc-400 leading-relaxed font-light mb-8 max-w-xl">
                        Constructed a real-time SLAM pipeline processing 30+ frames per second for accurate environment rendering. Engineered algorithmic tracking modules and data visualization libraries, securing up to 95% mapping accuracy during complex state estimations.
                      </p>
                      
                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-8 max-w-md">
                        <div className="border border-[#222] bg-[#111] p-4 group-hover:border-[#00FF41]/50 transition-colors">
                          <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs mb-2 uppercase">
                            <Zap className="w-3 h-3" /> Processing Speed
                          </div>
                          <div className="text-2xl text-white font-mono">30+ <span className="text-sm text-[#00FF41]">FPS</span></div>
                        </div>
                        <div className="border border-[#222] bg-[#111] p-4 group-hover:border-[#00FF41]/50 transition-colors">
                          <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs mb-2 uppercase">
                            <Crosshair className="w-3 h-3" /> Mapping Accuracy
                          </div>
                          <div className="text-2xl text-white font-mono">95<span className="text-sm text-[#00FF41]">%</span></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-4">
                      <div className="flex flex-wrap gap-2">
                        {["Python", "Computer Vision", "Algorithms"].map((t, i) => (
                          <span key={i} className="text-xs font-mono text-zinc-400 bg-[#111] px-3 py-1.5 border border-[#222]">
                            {t}
                          </span>
                        ))}
                      </div>
                      <a 
                        href="https://github.com/gaurang-developer-tech/Dynamic-Slam" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center gap-2 text-[#00FF41] font-mono text-sm uppercase tracking-wider hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" /> Source_Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project 2: App */}
                <div 
                  className="group bg-[#0a0a0a] border border-[#222] hover:border-[#00FF41] transition-all duration-500 flex flex-col lg:flex-row-reverse overflow-hidden"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Visual Side */}
                  <div className="lg:w-2/5 relative overflow-hidden border-b lg:border-b-0 lg:border-l border-[#222] bg-[#050505] min-h-[300px]">
                    <div className="absolute inset-0 bg-[#00FF41]/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" 
                      alt="Manorath Event Manager" 
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                    {/* Overlay Tech Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] z-20 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute top-4 right-4 z-30 flex items-center gap-2 bg-[#000] border border-[#00FF41] px-3 py-1 text-[#00FF41] font-mono text-xs uppercase">
                      <Smartphone className="w-4 h-4" /> Mobile Application
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:w-3/5 p-8 md:p-10 flex flex-col justify-between relative">
                    <div className="absolute top-0 left-0 w-16 h-16 border-r border-b border-[#222] bg-[#111] flex items-center justify-center text-zinc-600 font-mono text-xs">02</div>
                    
                    <div className="lg:pl-8">
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#00FF41] transition-colors">Manorath Event Manager</h3>
                      <p className="text-zinc-400 leading-relaxed font-light mb-8 max-w-xl">
                        Engineered a comprehensive cross-platform event scheduling application using Flutter and Dart. Designed a scalable architecture with robust state management to handle complex event coordination, interactive UI components, and seamless scheduling workflows.
                      </p>
                      
                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-8 max-w-md">
                        <div className="border border-[#222] bg-[#111] p-4 group-hover:border-[#00FF41]/50 transition-colors">
                          <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs mb-2 uppercase">
                            <Smartphone className="w-3 h-3" /> Platform
                          </div>
                          <div className="text-2xl text-white font-mono">iOS & <span className="text-sm text-[#00FF41]">Android</span></div>
                        </div>
                        <div className="border border-[#222] bg-[#111] p-4 group-hover:border-[#00FF41]/50 transition-colors">
                          <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs mb-2 uppercase">
                            <Code2 className="w-3 h-3" /> Architecture
                          </div>
                          <div className="text-2xl text-white font-mono">Reactive <span className="text-sm text-[#00FF41]">UI</span></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-4 lg:pl-8">
                      <div className="flex flex-wrap gap-2">
                        {["Dart", "Flutter", "State Management"].map((t, i) => (
                          <span key={i} className="text-xs font-mono text-zinc-400 bg-[#111] px-3 py-1.5 border border-[#222]">
                            {t}
                          </span>
                        ))}
                      </div>
                      <a 
                        href="https://github.com/gaurang-developer-tech" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center gap-2 text-[#00FF41] font-mono text-sm uppercase tracking-wider hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" /> Source_Code
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-32 px-6 border-t border-[#111]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-[#222] bg-[#0a0a0a] p-16 relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00FF41] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00FF41] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00FF41] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00FF41] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">Resume</h2>
                <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto font-mono text-sm">
                  {">"} Extract full technical specifications, educational background, and project logs. Available in PDF format.
                </p>
                
                <div className="flex flex-wrap justify-center items-center gap-6 font-mono text-sm">
                  <a 
                    href="/resume.pdf" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-[#00FF41] text-black px-8 py-4 font-bold hover:bg-white transition-colors flex items-center gap-2 uppercase"
                  >
                    <FileText className="w-4 h-4" /> View Resume
                  </a>
                  <a 
                    href="/resume.pdf" 
                    download="Gaurang_Ranjan_Singh_Resume.pdf"
                    className="bg-transparent border border-[#333] text-white px-8 py-4 font-bold hover:border-[#00FF41] hover:text-[#00FF41] transition-all flex items-center gap-2 uppercase"
                  >
                    <Download className="w-4 h-4" /> Download PDF
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer / Contact Section */}
      <footer id="contact" className="py-20 border-t border-[#222] bg-[#000] px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center gap-8">
          <div className="flex items-center gap-2 text-white font-mono font-bold text-3xl">
            <Terminal className="w-8 h-8 text-[#00FF41]" />
            GRS<span className="text-[#00FF41]">_</span>
          </div>
          
          <p className="text-zinc-400 max-w-lg text-lg font-light">
            Open for opportunities. Let's build something scalable and impactful together.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 font-mono text-sm mt-4">
            <a 
              href="tel:+916392442962" 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="bg-[#111] border border-[#333] hover:border-[#00FF41] text-zinc-400 hover:text-[#00FF41] transition-all px-6 py-4 flex items-center gap-3"
            >
              <Phone className="w-4 h-4" /> +91-63924 42962
            </a>
            <a 
              href="mailto:gaurangiiit@gmail.com" 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="bg-[#111] border border-[#333] hover:border-[#00FF41] text-zinc-400 hover:text-[#00FF41] transition-all px-6 py-4 flex items-center gap-3"
            >
              <Mail className="w-4 h-4" /> gaurangiiit@gmail.com
            </a>
            <a 
              href="https://github.com/gaurang-developer-tech" 
              target="_blank" 
              rel="noreferrer" 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="bg-[#111] border border-[#333] hover:border-[#00FF41] text-zinc-400 hover:text-[#00FF41] transition-all px-6 py-4 flex items-center gap-3"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/gaurang-ranjan-singh-7539a1285/" 
              target="_blank" 
              rel="noreferrer" 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="bg-[#111] border border-[#333] hover:border-[#00FF41] text-zinc-400 hover:text-[#00FF41] transition-all px-6 py-4 flex items-center gap-3"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>

          <div className="w-full h-px bg-[#222] my-6"></div>

          <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Gaurang Ranjan Singh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
