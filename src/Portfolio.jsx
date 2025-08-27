import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Code, Database, Terminal, Award, Star, Rocket, Zap } from 'lucide-react';

// Animated Stars Background Component
const StarsBackground = () => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          animationDelay: Math.random() * 3,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: '3s',
          }}
        />
      ))}
    </div>
  );
};

// Floating Planet Component
const FloatingPlanet = ({ className, children }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="animate-bounce" style={{ animationDuration: '6s' }}>
        {children}
      </div>
    </div>
  );
};

// Glowing Button Component
const GlowButton = ({ children, href, className = '' }) => {
  return (
    <a
      href={href}
      className={`relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold transition-all duration-300 hover:from-purple-500 hover:to-blue-500 hover:scale-105 shadow-lg hover:shadow-2xl ${className}`}
      style={{
        boxShadow: '0 0 20px rgba(147, 51, 234, 0.4)',
      }}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
    </a>
  );
};

// Skill Card Component
const SkillCard = ({ icon: Icon, title, color }) => {
  return (
    <div className="group relative p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 text-center">
        <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${color} flex items-center justify-center group-hover:animate-pulse`}>
          <Icon size={32} className="text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ title, description, status, githubUrl }) => {
  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 overflow-hidden block cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <Rocket className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300" size={32} />
          <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm">
            {status}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
        <div className="mt-4 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
          <Github size={20} className="mr-2" />
          <span className="text-sm">View on GitHub</span>
        </div>
      </div>
    </a>
  );
};

// Timeline Item Component
const TimelineItem = ({ institution, degree, score, period, isActive }) => {
  return (
    <div className="relative flex items-center mb-12">
      <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg">
        <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
      </div>
      <div className="ml-8 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 flex-1">
        <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
          {institution}
        </h3>
        <p className="text-gray-300 mt-2">{degree}</p>
        <p className="text-purple-400 mt-1">{score}</p>
        <p className="text-gray-400 text-sm mt-2">{period}</p>
      </div>
    </div>
  );
};

// Main Portfolio Component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

  // NavLink component for desktop
  const NavLink = ({ href, children }) => {
    return (
      <button
        onClick={() => scrollToSection(href.substring(1))}
        className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium"
      >
        {children}
      </button>
    );
  };

  // MobileNavLink component for mobile
  const MobileNavLink = ({ href, children }) => {
    return (
      <button
        onClick={() => scrollToSection(href.substring(1))}
        className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium text-left py-2"
      >
        {children}
      </button>
    );
  };

  const skills = [
    { icon: Code, title: 'Programming', color: 'from-orange-500 to-red-500' },
    { icon: Database, title: 'Database', color: 'from-green-500 to-emerald-500' },
    { icon: Terminal, title: 'Tools', color: 'from-blue-500 to-cyan-500' },
    { icon: Zap, title: 'Core CS', color: 'from-purple-500 to-pink-500' },
  ];

  const hobbies = ['Football', 'Basketball', 'Biking', 'Surfing', 'Tabla'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <StarsBackground />
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center h-16 relative">
            <div className="hidden md:flex space-x-8">
              <NavLink href="#about">About Me</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#achievements">Achievements</NavLink>
              <NavLink href="#hobbies">Hobbies</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden absolute right-0">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="text-white hover:text-purple-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-purple-500/20">
              <div className="flex flex-col space-y-4">
                <MobileNavLink href="#about">About Me</MobileNavLink>
                <MobileNavLink href="#education">Education</MobileNavLink>
                <MobileNavLink href="#projects">Projects</MobileNavLink>
                <MobileNavLink href="#skills">Skills</MobileNavLink>
                <MobileNavLink href="#achievements">Achievements</MobileNavLink>
                <MobileNavLink href="#hobbies">Hobbies</MobileNavLink>
                <MobileNavLink href="#contact">Contact</MobileNavLink>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-1">
        <FloatingPlanet className="absolute top-20 right-20 hidden lg:block">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-30 blur-sm"></div>
        </FloatingPlanet>
        
        <div className="text-center z-10 max-w-4xl mx-auto">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="w-64 h-64 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-full border-4 border-purple-500/50 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                  {/* Profile picture */}
                  <img 
                    src="\profilepic.jpeg" 
                    alt="Niyom Dedhia" 
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white font-bold text-3xl absolute inset-0" style={{display: 'none'}}>
                    ND
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text animate-pulse">
            Niyom Dedhia
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            CS Undergraduate @ NIT Surat 
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Interested in building software that solves real-world problems. Currently exploring embedded systems.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl border border-purple-500/30 p-8 hover:border-purple-400/60 transition-all duration-500 hover:scale-105">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-gray-300">
                    <span className="text-2xl">🎓</span>
                    <span className="text-lg">B.Tech CSE student at SVNIT</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <span className="text-2xl">💻</span>
                    <span className="text-lg">Languages: C/C++, Python</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <span className="text-2xl">🌍</span>
                    <span className="text-lg">Based in Surat</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <span className="text-2xl">📈</span>
                    <span className="text-lg">Interested in Embedded Systems</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a second-year CS undergraduate at NIT Surat with a strong interest in programming, 
                problem-solving, and software development. I enjoy learning new technologies and building 
                projects that create real-world impact.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Outside academics, I like playing football and basketball, cycling, and playing the tabla, 
                which help me stay active and creative.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
               
               
               
               
                <div className="flex items-center space-x-2 text-blue-400">
                  <Mail size={20} />
                  <a 
                    href="mailto:niyomdedhia33@gmail.com" 
                    className="hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                  >
                    niyomdedhia33@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
            Education
          </h2>
          
          <div className="relative">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-blue-500"></div>
            
            <TimelineItem
              institution="NIT Surat"
              degree="B.Tech in Computer Science and Engineering"
              score="CGPA: 7.05"
              period="Aug 2024 – May 2028"
              isActive={true}
            />
            
            <TimelineItem
              institution="Pace Junior Science College"
              degree="Grade 12"
              score="75.13%"
              period="Aug 2022 – May 2024"
            />
            
            <TimelineItem
              institution="CNM School"
              degree="Grade 10"
              score="96.8%"
              period="Jun 2012 – May 2022"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            <ProjectCard
              title="Custom Shell in C"
              description="Currently developing a custom shell implementation in C, focusing on system programming concepts and command-line interface design."
              status="In Progress"
              githubUrl="https://github.com/niyomdedhia/Custom-Shell-in-C"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-300">
              <div>
                <h3 className="text-purple-400 font-semibold mb-4">Programming</h3>
                <p>C, C++, Python</p>
              </div>
              <div>
                <h3 className="text-green-400 font-semibold mb-4">Database</h3>
                <p>MySQL</p>
              </div>
              <div>
                <h3 className="text-blue-400 font-semibold mb-4">Tools</h3>
                <p>Git, GitHub, Linux, VS Code, Cursor</p>
              </div>
              <div>
                <h3 className="text-pink-400 font-semibold mb-4">Core Subjects</h3>
                <p>Data Structures, OOP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates & Awards */}
      <section id="achievements" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
            Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-8 text-center">Certificates</h3>
              <div className="space-y-4">
                {[
                  {
                    name: 'Object-Oriented Data Structures in C++',
                    url: 'https://coursera.org/share/5a1ce8ddd264a6c7e24fc99e2ea69287'
                  },
                  {
                    name: 'Ordered Data Structures',
                    url: 'https://coursera.org/share/5cf38def558c3c9b15928eaeb9b6e045'
                  },
                  {
                    name: 'Unordered Data Structures',
                    url: 'https://coursera.org/share/c73b9efae91fdcf828479dbd1aa122ce'
                  }
                ].map((cert, index) => (
                  <a
                    key={index}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-xl border border-purple-500/30 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Award className="text-yellow-400 mr-3" size={24} />
                        <span className="text-white">{cert.name}</span>
                      </div>
                      <span className="text-purple-400 text-sm">View Certificate →</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-8 text-center">Awards</h3>
              <div className="p-6 bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-xl border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
                <div className="flex items-center">
                  <Star className="text-yellow-400 mr-3" size={32} />
                  <div>
                    <h4 className="text-xl font-semibold text-yellow-300">Tabla Diploma</h4>
                    <p className="text-gray-300">Under Pandit Nayan Ghosh</p>
                    <p className="text-yellow-400 text-sm">12 years of training and examinations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
            Hobbies & Interests
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {hobbies.map((hobby, index) => (
              <FloatingPlanet key={index} className={`animate-bounce`} style={{ animationDelay: `${index * 0.5}s` }}>
                <div className="px-6 py-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-400/50 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <span className="text-white font-semibold">{hobby}</span>
                </div>
              </FloatingPlanet>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
            Contact Me
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <a href="mailto:niyomdedhia33@gmail.com" className="group">
              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:animate-pulse" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-400 text-sm mt-2">niyomdedhia33@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:+919167240285" className="group">
              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:animate-pulse" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-400 text-sm mt-2">+91 91672 40285</p>
              </div>
            </a>
            
            <a href="https://github.com/niyomdedhia" className="group">
              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
                <Github className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:animate-pulse" />
                <p className="text-white font-semibold">GitHub</p>
                <p className="text-gray-400 text-sm mt-2">niyomdedhia</p>
              </div>
            </a>
            
            <div className="group">
              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 hover:scale-105">
                <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4 group-hover:animate-pulse" />
                <p className="text-white font-semibold">Location</p>
                <p className="text-gray-400 text-sm mt-2">Surat, India</p>
              </div>
            </div>
          </div>
          
          <GlowButton href="mailto:niyomdedhia33@gmail.com">
            Let's Connect
          </GlowButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-purple-500/20 text-center relative">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 mb-4">
            Thank You!
          </p>
          <p className="text-gray-500 text-sm">
            Made in HTML, CSS, and JavaScript
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;