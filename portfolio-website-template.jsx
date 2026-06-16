'use client';

import { ExternalLink, Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

export default function PortfolioWebsite() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full Stack Development',
      description: 'Modern e-commerce platform with payment integration and inventory management',
      image: 'bg-gradient-to-br from-blue-500 to-blue-600',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      category: 'UI/UX Design',
      description: 'Interactive dashboard for real-time data visualization and reporting',
      image: 'bg-gradient-to-br from-purple-500 to-purple-600',
      tags: ['React', 'Tailwind CSS', 'Chart.js'],
      link: '#'
    },
    {
      id: 3,
      title: 'Mobile App Design',
      category: 'Mobile Development',
      description: 'Cross-platform fitness tracking application with real-time notifications',
      image: 'bg-gradient-to-br from-pink-500 to-pink-600',
      tags: ['React Native', 'Firebase', 'Figma'],
      link: '#'
    },
  ];

  const skills = [
    { category: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'TypeScript'] },
    { category: 'Backend', skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Firebase'] },
    { category: 'Design', skills: ['Figma', 'UI/UX', 'Wireframing', 'Prototyping'] },
    { category: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub'] },
  ];

  return (
    <div className="w-full bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Alex Developer
          </div>
          <div className="flex gap-8 items-center">
            <a href="#about" className="text-sm font-medium hover:text-purple-600 transition">About</a>
            <a href="#work" className="text-sm font-medium hover:text-purple-600 transition">Work</a>
            <a href="#skills" className="text-sm font-medium hover:text-purple-600 transition">Skills</a>
            <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-6 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              👋 Full Stack Developer
            </div>
            <h1 className="text-6xl font-bold mb-6 text-gray-900">
              Creative Developer
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Building Digital Experiences
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I design and develop beautiful, functional web applications that solve real problems. Specialized in React, Next.js, and modern web technologies.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition flex items-center gap-2">
                View My Work <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-gray-400 transition flex items-center gap-2">
                <Download size={20} /> Resume
              </button>
            </div>

            {/* Social */}
            <div className="mt-12 flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-purple-600 hover:text-purple-600 transition">
                <Github size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-purple-600 hover:text-purple-600 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-purple-600 hover:text-purple-600 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl h-96"></div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl h-96"></div>
            <div>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-gray-600 mb-6">
                I'm a passionate full stack developer with 5+ years of experience building web applications that users love. I'm obsessed with clean code, great design, and delivering results.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Currently, I'm exploring the intersection of design and development, creating seamless user experiences with modern technologies. When I'm not coding, you'll find me contributing to open source or writing about web development.
              </p>
              
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <p className="text-gray-600 text-sm">Projects Completed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">30+</div>
                  <p className="text-gray-600 text-sm">Happy Clients</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">5+</div>
                  <p className="text-gray-600 text-sm">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Work</h2>
          
          <div className="space-y-12">
            {projects.map((project) => (
              <div key={project.id} className="grid grid-cols-2 gap-12 items-center group">
                <div className={`${project.image} rounded-2xl h-96 group-hover:shadow-2xl transition`}></div>
                <div>
                  <div className="text-sm font-semibold text-purple-600 mb-2">{project.category}</div>
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href={project.link} className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-4 transition">
                    View Project <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Skills & Technologies</h2>
          
          <div className="grid grid-cols-4 gap-8">
            {skills.map((skillGroup, i) => (
              <div key={i} className="p-8 border border-gray-200 rounded-xl hover:border-purple-600 transition">
                <h3 className="text-lg font-bold mb-6 text-gray-900">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.skills.map((skill, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Latest Articles</h2>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                title: 'Building Fast Web Applications with Next.js',
                date: 'Jan 15, 2024',
                readTime: '5 min read',
                category: 'Performance'
              },
              {
                title: 'React Hooks: Best Practices and Patterns',
                date: 'Jan 12, 2024',
                readTime: '8 min read',
                category: 'React'
              },
              {
                title: 'Full Stack Development in 2024',
                date: 'Jan 10, 2024',
                readTime: '10 min read',
                category: 'Full Stack'
              },
            ].map((article, i) => (
              <a key={i} href="#" className="p-6 border border-gray-200 rounded-xl hover:border-purple-600 hover:shadow-lg transition group">
                <div className="text-sm font-semibold text-purple-600 mb-3">{article.category}</div>
                <h3 className="text-lg font-bold mb-4 group-hover:text-purple-600 transition">{article.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg opacity-90 mb-8">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition">
              Get In Touch
            </button>
            <a href="mailto:hello@alexdev.com" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-12">Drop me a message and I'll get back to you ASAP</p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="px-6 py-3 border border-gray-300 rounded-lg focus:border-purple-600 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-6 py-3 border border-gray-300 rounded-lg focus:border-purple-600 outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:border-purple-600 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:border-purple-600 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between pb-8 border-b border-gray-800">
            <div className="text-xl font-bold text-white">Alex Developer</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">GitHub</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">Twitter</a>
            </div>
          </div>
          <p className="pt-8 text-center text-sm">&copy; 2024 Alex Developer. Designed & built by stack.studio</p>
        </div>
      </footer>
    </div>
  );
}
