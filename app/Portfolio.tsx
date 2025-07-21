"use client"

import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Download, 
  ExternalLink,
  ChevronRight,
  Star,
  Calendar,
  User,
  Briefcase,
  Code,
  Menu,
  X
} from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Adebayo Adeyemi",
      role: "CTO",
      company: "EBVest",
      content: "Israel is a top-tier developer who consistently delivers high-quality, scalable solutions. His attention to detail and collaborative spirit made a huge impact on our team.",
      rating: 5
    },
    {
      id: 2,
      name: "Grace Ojo",
      role: "Product Manager",
      company: "OTE Technologies",
      content: "Israel's frontend expertise and dedication to user experience helped us achieve a 40% increase in user satisfaction. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "Upwork Client",
      role: "Founder",
      company: "Global Startup",
      content: "Delivered pixel-perfect UIs and exceeded expectations on every project. Excellent communication and technical skills.",
      rating: 5
    }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "EBVest Investment Platform",
      description: "Full-stack investment platform built with React.js, Node.js, and MongoDB. Improved page load times by 35% and increased user engagement by 25%.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Vercel"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "OTE Technologies Dashboard",
      description: "Responsive, WCAG 2.1-compliant dashboard for analytics and reporting. Achieved 90+ performance scores and reduced bounce rates.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "TailwindCSS", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Upwork Client Projects",
      description: "Custom web apps for 15+ global clients. Built reusable component libraries and scalable architectures with React and Next.js.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["React", "Next.js", "TailwindCSS", "Figma"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Optimizing Frontend Performance: Real-World Strategies",
      excerpt: "How I improved load times by 35% and achieved 90+ Lighthouse scores using code splitting, lazy loading, and audits.",
      date: "2024-07-15",
      readTime: "6 min read"
    },
    {
      id: 2,
      title: "Accessible Web Design: WCAG 2.1 in Practice",
      excerpt: "A guide to building inclusive, accessible UIs and why it matters for business and users.",
      date: "2024-06-28",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "From Figma to React: Building Reusable Component Libraries",
      excerpt: "Turning design systems into scalable, maintainable codebases for real-world projects.",
      date: "2024-06-10",
      readTime: "8 min read"
    }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Modern, responsive UIs with React, Next.js, Vue.js, and TypeScript."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Technical Consulting",
      description: "Guidance on architecture, performance, and best practices for web projects."
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "UI/UX Implementation",
      description: "Pixel-perfect, accessible interfaces with a focus on user experience and analytics."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Israel Olusoji I.
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'portfolio', 'services', 'blog', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                    activeSection === item ? 'text-purple-400 border-b-2 border-purple-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'portfolio', 'services', 'blog', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className={`text-center z-10 max-w-4xl mx-auto px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Israel Olusoji I.
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            Frontend Software Developer | React, Next.js, TypeScript
          </p>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/10">
            <p className="text-lg leading-relaxed text-gray-200">
              Highly motivated Frontend Software Developer focused on optimizing digital experiences and creating user-friendly interfaces. Expert in leveraging data analytics to enhance online engagement. Skilled in cross-functional collaboration to deliver innovative web applications.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
            <a href="/Israel_Olusoji_SoftWareDeveloper.pdf" download className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transition-all duration-300 flex items-center justify-center gap-2">
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m a passionate frontend developer with over 5 years of experience in creating innovative web applications. My journey in technology started with a curiosity about how things work, which evolved into a love for building solutions that make a difference.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in React, Next.js, TypeScript, and modern web technologies. My approach combines technical excellence with user-centered design, ensuring every project not only functions flawlessly but also provides an exceptional user experience.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-white/10">
                  <div className="text-3xl font-bold text-purple-400">50+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-white/10">
                  <div className="text-3xl font-bold text-pink-400">5+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <User size={120} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio & Work Samples
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={500}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-600/20 rounded-full text-xs text-purple-200 border border-purple-400/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm transition-colors">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="flex items-center gap-1 text-gray-400 hover:text-gray-300 text-sm transition-colors">
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Services & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex justify-center mb-6 text-purple-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Blog & Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <Calendar size={16} />
                  {new Date(post.date).toLocaleDateString()}
                  <span>•</span>
                  {post.readTime}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white hover:text-purple-400 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  Read More
                  <ChevronRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Testimonials & Recommendations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">{testimonial.content}</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-purple-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                      <Mail className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-gray-300">olusojiisraelife@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                      <Phone className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Phone</div>
                      <div className="text-gray-300">+234-806-933-9457</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                      <MapPin className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Location</div>
                      <div className="text-gray-300">Nigeria (Remote/Global)</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 text-white">Social Media Links</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/olusojiisrael" className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center hover:bg-purple-600/30 transition-colors" target="_blank" rel="noopener noreferrer">
                    <Github className="text-purple-400" size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/OlusojiIsrael" className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center hover:bg-purple-600/30 transition-colors" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="text-purple-400" size={20} />
                  </a>
                  <a href="https://twitter.com/olusojiisrael" className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center hover:bg-purple-600/30 transition-colors" target="_blank" rel="noopener noreferrer">
                    <Twitter className="text-purple-400" size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="space-y-6">
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">Name</div>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">Email</div>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">Message</div>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
                  onClick={() => alert('Contact form submitted! (In a real application, this would send an email)')}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Israel Olusoji I. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio; 