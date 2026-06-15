'use client';

import { useState } from 'react';
import { ArrowRight, ExternalLink, Code2, Zap, Shield, Users, Sparkles, CheckCircle } from 'lucide-react';

export default function StackStudioPortfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to turn visitors into customers.',
      features: ['Conversion optimized', 'Fast loading', 'Mobile responsive', 'SEO ready'],
      icon: '🚀',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Clinic Websites',
      description: 'Professional clinic & healthcare websites that build trust and book appointments.',
      features: ['Appointment booking', 'Patient portal ready', 'HIPAA compliant', 'Mobile friendly'],
      icon: '🏥',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      id: 3,
      title: 'Profile Websites',
      description: 'Personal and professional portfolio websites that showcase your expertise.',
      features: ['Portfolio showcase', 'Case studies', 'Contact forms', 'Blog ready'],
      icon: '👤',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'TechVenture Landing',
      category: 'SaaS Landing Page',
      description: 'High-converting SaaS landing page for an AI automation tool. 45% CTR improvement.',
      image: 'bg-gradient-to-br from-blue-600 to-blue-900',
      stack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      metrics: ['3.2s load time', '98 Lighthouse', '45% CTR↑'],
    },
    {
      id: 2,
      title: 'Wellness Clinic',
      category: 'Clinic Website',
      description: 'Modern clinic website with online booking. Increased appointment bookings by 60%.',
      image: 'bg-gradient-to-br from-emerald-600 to-emerald-900',
      stack: ['React', 'Node.js', 'PostgreSQL'],
      metrics: ['2.8s load time', '97 Lighthouse', '60% bookings↑'],
    },
    {
      id: 3,
      title: 'Designer Portfolio',
      category: 'Profile Website',
      description: 'Stunning portfolio for a creative professional. Landed 5 clients in first month.',
      image: 'bg-gradient-to-br from-purple-600 to-purple-900',
      stack: ['Astro', 'Tailwind CSS', 'MDX'],
      metrics: ['1.8s load time', '99 Lighthouse', '5 clients↑'],
    },
  ];

  const stats = [
    { label: '50+', value: 'Websites Launched' },
    { label: '2.5s', value: 'Avg Load Time' },
    { label: '98+', value: 'Avg Lighthouse Score' },
    { label: '85%', value: 'Conversion Increase' },
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery Call',
      description: 'We understand your goals, target audience, and unique value proposition.',
      icon: '🎯',
    },
    {
      step: '2',
      title: 'Design System',
      description: 'Create a custom design system tailored to your brand and industry standards.',
      icon: '🎨',
    },
    {
      step: '3',
      title: 'Development',
      description: 'Build fast, responsive, and conversion-optimized using modern tech stacks.',
      icon: '⚡',
    },
    {
      step: '4',
      title: 'Launch & Support',
      description: 'Deploy, optimize, and provide ongoing support and improvements.',
      icon: '🚀',
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            stack.studio
          </div>
          <div className="flex gap-8 items-center">
            <a href="#services" className="text-sm font-medium hover:text-blue-600 transition">Services</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-blue-600 transition">Work</a>
            <a href="#process" className="text-sm font-medium hover:text-blue-600 transition">Process</a>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            ✨ Modern Web Design & Development
          </div>
          <h1 className="text-6xl font-bold mb-6 text-gray-900">
            Bold Digital Experiences
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Built to Convert
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We design and build stunning landing pages, clinic websites, and professional portfolios that deliver real results. Fast, modern, and built with technical excellence.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition flex items-center gap-2">
              Start Your Project <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-gray-400 transition">
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mt-16 pt-16 border-t border-gray-200">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-gray-900">{stat.label}</div>
                <div className="text-sm text-gray-600 mt-2">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Specialized solutions for your business</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition group hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600">Recent projects we're proud of</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`${project.image} rounded-xl h-64 mb-4 transition transform group-hover:scale-105 flex items-end p-6`}>
                  <div className="text-white">
                    <div className="text-sm font-medium opacity-90 mb-2">{project.category}</div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-white px-3 py-1 rounded-full border border-gray-200 text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">{metric.split('↑')[0]}</span>
                      {metric.includes('↑') && <span className="text-green-600"> ↑</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose stack.studio?</h2>
              <div className="space-y-6">
                {[
                  { icon: Zap, title: 'Lightning Fast', desc: 'Average load time under 2.5s with 98+ Lighthouse scores' },
                  { icon: Code2, title: 'Modern Stack', desc: 'Latest technologies: Next.js, React, Astro, Tailwind CSS' },
                  { icon: Shield, title: 'Conversion Focused', desc: 'Data-driven design that increases customer conversions' },
                  { icon: Users, title: 'Expert Team', desc: 'Experienced designers and developers who care about results' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="text-blue-600 flex-shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl h-96 flex items-center justify-center text-white text-center p-8">
              <div>
                <Sparkles size={48} className="mx-auto mb-4 opacity-80" />
                <p className="text-lg font-semibold">Ready to transform your online presence?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we bring your vision to life</p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {process.map((item, idx) => (
              <div key={idx}>
                <div className="text-5xl font-bold text-gray-200 mb-4">{item.step}</div>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-lg opacity-90 mb-8">
            Let's discuss your project and create a website that delivers real results. Book a free consultation today.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-8 pb-8 border-b border-gray-800">
            <div>
              <div className="text-white font-bold text-lg mb-4">stack.studio</div>
              <p className="text-sm">Bold digital experiences built with technical excellence.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Landing Pages</a></li>
                <li><a href="#" className="hover:text-white transition">Clinic Websites</a></li>
                <li><a href="#" className="hover:text-white transition">Portfolio Sites</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Work</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Get in Touch</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:hello@stack.studio" className="hover:text-white transition">hello@stack.studio</a></li>
                <li><a href="tel:+919876543210" className="hover:text-white transition">+91 98765 43210</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex items-center justify-between text-sm">
            <p>&copy; 2024 stack.studio. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
