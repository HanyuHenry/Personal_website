import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Book, Phone, ExternalLink } from 'lucide-react';
import ScrollAnimation from './components/ScrollAnimation';

const Section = ({ children, className = "", id = "" }) => (
  <section id={id} className={`min-h-screen flex items-center justify-center py-20 ${className}`}>
    <div className="max-w-7xl w-full mx-auto px-6">
      {children}
    </div>
  </section>
);

const TimelineItem = ({ title, company, period, responsibilities }) => (
  <ScrollAnimation>
    <div className="bg-blue-500/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-blue-500/20 transition-all">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-blue-300">{title}</h3>
          <p className="text-xl text-gray-300">{company}</p>
        </div>
        <span className="text-gray-400">{period}</span>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </ScrollAnimation>
);

const ProjectCard = ({ title, period, details }) => (
  <ScrollAnimation>
    <div className="bg-purple-500/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-purple-500/20 transition-all h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-purple-300">{title}</h3>
        <span className="text-gray-400">{period}</span>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  </ScrollAnimation>
);

const SkillCard = ({ title, skills }) => (
  <ScrollAnimation>
    <div className="backdrop-blur-lg bg-cyan-500/10 rounded-2xl p-8 hover:bg-cyan-500/20 transition-all h-full">
      <h3 className="text-2xl font-bold mb-4 text-cyan-300">{title}</h3>
      <p className="text-gray-300">{skills}</p>
    </div>
  </ScrollAnimation>
);

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experience = [
    {
      title: "Postdoctoral Fellow & Project Coordinator",
      company: "University of Alberta",
      period: "Sep. 2022 – Present",
      responsibilities: [
        "Developed and optimized machine learning models using Python, improving processing speed by 20%",
        "Implemented automated testing procedures reducing software release cycle time by 30%",
        "Coordinated with team members to improve development workflow and code quality",
        "Supervised and mentored graduate students on AI research projects",
        "Published three papers in peer-reviewed journals on ML applications"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Apex Automation",
      period: "Feb. 2021 - July 2021",
      responsibilities: [
        "Built iOS applications using Swift and SwiftUI for industrial automation",
        "Implemented user interfaces following iOS design guidelines",
        "Collaborated with backend team to integrate REST APIs",
        "Reduced bug reports by 50% through improved error handling",
        "Set up basic CI/CD pipeline using Git and Xcode"
      ]
    }
  ];

  const projects = [
    {
      title: "Sustainable Energy Data Solution",
      period: "Jan. 2021 - Present",
      details: [
        "Developed machine learning models for energy consumption prediction",
        "Used PyTorch to implement and train neural networks",
        "Improved prediction accuracy by 30% through model optimization",
        "Created data preprocessing pipeline for handling time-series data"
      ]
    },
    {
      title: "Smart Monitoring System",
      period: "Feb. 2021 - July 2021",
      details: [
        "Built iOS application for truck cargo monitoring",
        "Implemented Bluetooth connectivity for sensor data collection",
        "Developed real-time status updates and notifications",
        "Created user-friendly interface for drivers to monitor cargo status"
      ]
    },
    {
      title: "Data Analytics Platform",
      period: "Jun. 2018 - Feb. 2021",
      details: [
        "Built Python-based platform for analyzing research data",
        "Implemented data processing pipelines using NumPy and Pandas",
        "Improved analysis speed by 25% through code optimization",
        "Integrated machine learning models for data prediction",
        "Developed basic API endpoints for data access"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 
        ${scrolled ? 'bg-gray-900/80 backdrop-blur-lg py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className={`font-medium transition-all ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
            Henry E
          </span>
          <div className="flex space-x-8">
            {['About', 'Experience', 'Projects', 'Skills', 'Education'].map((item) => (
              <a key={item} 
                 href={`#${item.toLowerCase()}`}
                 className="text-gray-300 hover:text-blue-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-blue-900 via-purple-900 to-gray-900">
        <ScrollAnimation>
          <div className="text-center space-y-6">
            <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Henry E
            </h1>
            <p className="text-4xl font-light text-gray-200">Ph.D. in Software and Intelligent Systems</p>
            <p className="text-2xl text-gray-300">Machine Learning Engineer & Software Developer</p>
            
            <div className="flex justify-center space-x-6 pt-8">
              <a href="mailto:crocodilehy@gmail.com" 
                 className="flex items-center space-x-2 bg-blue-500/20 rounded-full px-6 py-3 hover:bg-blue-500/30 transition-all">
                <Mail className="w-5 h-5" />
                <span>crocodilehy@gmail.com</span>
              </a>
              <a href="tel:+17807161955" 
                 className="flex items-center space-x-2 bg-purple-500/20 rounded-full px-6 py-3 hover:bg-purple-500/30 transition-all">
                <Phone className="w-5 h-5" />
                <span>+1 (780) 716 1955</span>
              </a>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/Henry--E/" 
                 className="flex items-center space-x-2 bg-blue-500/20 rounded-full px-6 py-3 hover:bg-blue-500/30 transition-all">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="https://scholar.google.com/citations?user=N-Ql578AAAAJ&hl=en" 
                 className="flex items-center space-x-2 bg-purple-500/20 rounded-full px-6 py-3 hover:bg-purple-500/30 transition-all">
                <Book className="w-5 h-5" />
                <span>Google Scholar</span>
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </Section>

      {/* About Section */}
      <Section id="about">
        <ScrollAnimation>
          <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            About Me
          </h2>
          <div className="text-xl text-gray-300 space-y-4 max-w-3xl">
            <p>
              Software engineer with research background in machine learning and data processing. Experience in both 
              backend development and ML model deployment.
            </p>
            <p>
              Demonstrated ability to improve system performance and implement automated testing solutions. Currently working as a 
              Postdoctoral Fellow at University of Alberta, focusing on machine learning applications and data processing.
            </p>
          </div>
        </ScrollAnimation>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <ScrollAnimation>
          <h2 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Professional Experience
          </h2>
        </ScrollAnimation>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <TimelineItem key={index} {...exp} />
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-gray-900">
        <ScrollAnimation>
          <h2 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Key Projects
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <ScrollAnimation>
          <h2 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Technical Skills
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard 
            title="Programming" 
            skills="Python, Java, Javascript, C, SQL, Swift"
          />
          <SkillCard 
            title="Machine Learning" 
            skills="PyTorch, TensorFlow, Scikit-learn"
          />
          <SkillCard 
            title="Web & Mobile" 
            skills="SwiftUI, UIKit, iOS Development"
          />
          <SkillCard 
            title="Data Processing" 
            skills="NumPy, Pandas, Data Analysis"
          />
          <SkillCard 
            title="Tools" 
            skills="Git, AWS, Automated Testing"
          />
          <SkillCard 
            title="Databases" 
            skills="MySQL"
          />
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" className="bg-gray-900">
        <ScrollAnimation>
          <h2 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Education
          </h2>
          <div className="space-y-8">
            <div className="bg-blue-500/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300">Doctor of Philosophy in Software Engineering & AI</h3>
              <p className="text-xl text-gray-300">University of Alberta</p>
              <p className="text-gray-400 mt-2">2016 - 2022</p>
              <p className="text-gray-300 mt-4">Research Focus: Machine Learning Applications and Data Processing</p>
            </div>
            
            <div className="bg-purple-500/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300">Bachelor's degree in Mechanical Engineering</h3>
              <p className="text-xl text-gray-300">Xidian University</p>
              <p className="text-gray-400 mt-2">2011 - 2015</p>
            </div>
          </div>
        </ScrollAnimation>
      </Section>
    </div>
  );
};

export default Portfolio;