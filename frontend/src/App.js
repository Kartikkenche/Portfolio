import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const skills = {
    programming: [
      { name: 'C++', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 75 }
    ],
    cybersecurity: [
      { name: 'Network Analysis', level: 85 },
      { name: 'Penetration Testing', level: 70 },
      { name: 'Packet Sniffing', level: 80 },
      { name: 'Vulnerability Assessment', level: 75 }
    ],
    embedded: [
      { name: 'Arduino', level: 85 },
      { name: 'Raspberry Pi', level: 80 },
      { name: 'IoT Development', level: 75 },
      { name: 'Firmware', level: 70 }
    ]
  };

  const projects = [
    {
      title: 'Netflix Frontend Clone',
      description: 'Recreated Netflix UI with responsive design and smooth user experience. Fetched movie data from TMDB API and displayed via semantic elements. Implemented genre-based filtering and media previews.',
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'TMDB API'],
      image: 'https://images.pexels.com/photos/4968506/pexels-photo-4968506.jpeg',
      type: 'development'
    },
    {
      title: 'Network Packet Sniffer Tool',
      description: 'Designed a custom tool to capture and inspect network packets. Used for simulating edge cases and validating test environments. Enhanced debugging in QA testing of IoT network systems.',
      technologies: ['Python', 'Scapy', 'Network Protocols'],
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
      type: 'cybersecurity'
    },
    {
      title: 'IoT Speed Monitoring System',
      description: 'Built a system to monitor vehicle speed using IR sensors and Arduino. Triggered alerts when speed exceeded preset limits. Enabled remote monitoring through cloud integration for real-time access.',
      technologies: ['Arduino', 'IR Sensors', 'Python', 'IoT', 'Cloud Integration'],
      image: 'https://images.pexels.com/photos/27662922/pexels-photo-27662922.jpeg',
      type: 'embedded'
    }
  ];

  const achievements = [
    {
      title: 'Smart India Hackathon',
      description: 'Top 5 finish in college-level smart India hackathon (SIH) internal hackathon round for IoT-based road safety solution',
      year: '2024'
    },
    {
      title: 'Coding Excellence',
      description: 'Completed 100+ coding problems on platforms like HackerRank and LeetCode, with a focus on data structures and algorithms',
      year: '2024'
    },
    {
      title: 'IoT Innovation Award',
      description: 'Secured 2nd place in department-level hackathon for IoT-based Vehicle Monitoring System',
      year: '2024'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              <span className="text-blue-400">Kartik</span> Kenche
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 to-blue-900"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1607799279861-4dd421887fb3')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center text-white z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-blue-400">Ethical Hacker</span> &
            <br />
            <span className="text-green-400">Software Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Final-year engineering student passionate about cybersecurity, embedded systems, and IoT. 
            Building secure, innovative solutions for real-world challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 bg-gray-100 ${isVisible.about ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Passionate About Technology & Security
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As a final-year engineering student specializing in Electronics and Telecommunication, 
                I bring a unique blend of software development skills and cybersecurity expertise. 
                My passion lies in creating secure, innovative solutions that address real-world challenges.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With strong foundations in C++, Python, and embedded systems, I excel at building 
                everything from web applications to IoT monitoring systems. My analytical mindset 
                and debugging skills help me tackle complex problems in both development and security domains.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-blue-600">100+</div>
                  <div className="text-gray-600">Coding Problems Solved</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-green-600">Top 5</div>
                  <div className="text-gray-600">Smart India Hackathon</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Education</h4>
                  <p className="text-gray-700">B.Tech in Electronics & Telecommunication</p>
                  <p className="text-gray-600">GH Raisoni College of Engineering and Management</p>
                  <p className="text-blue-600">Expected 2026</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Focus Areas</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Embedded Systems & IoT</li>
                    <li>• Network Security & Analysis</li>
                    <li>• Web Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 bg-gray-900 ${isVisible.skills ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Programming Skills */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
                <span className="mr-3">💻</span> Programming
              </h3>
              {skills.programming.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between text-white mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${isVisible.skills ? skill.level : 0}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cybersecurity Skills */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
                <span className="mr-3">🔒</span> Cybersecurity
              </h3>
              {skills.cybersecurity.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between text-white mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${isVisible.skills ? skill.level : 0}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Embedded Systems */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
                <span className="mr-3">⚡</span> Embedded & IoT
              </h3>
              {skills.embedded.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between text-white mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${isVisible.skills ? skill.level : 0}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 bg-gray-100 ${isVisible.projects ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex`}
              >
                <div className="md:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      project.type === 'development' ? 'bg-blue-100 text-blue-800' :
                      project.type === 'cybersecurity' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className={`py-20 bg-gray-900 ${isVisible.achievements ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Achievements</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-lg text-center transform transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-white mb-4">{achievement.title}</h3>
                <p className="text-gray-300 mb-4">{achievement.description}</p>
                <span className="text-blue-400 font-semibold">{achievement.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 bg-gray-100 ${isVisible.contact ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, interesting projects, 
                or potential collaborations in cybersecurity and software development.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📧</span>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:kartikkenche96@gmail.com" className="text-blue-600 hover:underline">
                      kartikkenche96@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📱</span>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+919529690907" className="text-blue-600 hover:underline">
                      +91 9529690907
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📍</span>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-700">Jalgaon, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h3>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/kartik-kenche-2b48432b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <span className="text-2xl mr-4">💼</span>
                  <div>
                    <p className="font-semibold text-gray-900">LinkedIn</p>
                    <p className="text-gray-600">Professional Network</p>
                  </div>
                </a>
                <a
                  href="https://github.com/kartikkenche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-2xl mr-4">💻</span>
                  <div>
                    <p className="font-semibold text-gray-900">GitHub</p>
                    <p className="text-gray-600">Code Repository</p>
                  </div>
                </a>
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-2xl mr-4">🎓</span>
                  <div>
                    <p className="font-semibold text-gray-900">GH Raisoni College</p>
                    <p className="text-gray-600">B.Tech ECE 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Kartik Kenche. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
