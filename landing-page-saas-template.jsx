'use client';

import { Check, ArrowRight, Star, Users, TrendingUp, Zap } from 'lucide-react';

export default function SaaSLandingPage() {
  return (
    <div className="w-full bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            AutoFlow
          </div>
          <div className="flex gap-8 items-center">
            <a href="#features" className="text-sm font-medium hover:text-blue-600 transition">Features</a>
            <a href="#pricing" className="text-sm font-medium hover:text-blue-600 transition">Pricing</a>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            ✨ Trusted by 500+ teams
          </div>
          <h1 className="text-6xl font-bold mb-6 text-gray-900">
            Automate Your Workflow
            <br />
            <span className="text-blue-600">In Minutes, Not Weeks</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect your tools, automate repetitive tasks, and focus on what matters. No coding required.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
              Start Free Trial <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-gray-400 transition">
              Watch Demo
            </button>
          </div>

          {/* Social Proof */}
          <div className="pt-12 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">Trusted by teams at:</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {['Stripe', 'Notion', 'Figma', 'Discord', 'Slack'].map((company, i) => (
                <div key={i} className="text-gray-400 font-semibold text-sm">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to automate your business</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Automate tasks in seconds with our intuitive workflow builder'
              },
              {
                icon: Users,
                title: 'Team Collaboration',
                description: 'Work together seamlessly with built-in collaboration tools'
              },
              {
                icon: TrendingUp,
                title: 'Real-time Analytics',
                description: 'Track performance with detailed insights and reports'
              },
              {
                icon: Check,
                title: '100+ Integrations',
                description: 'Connect with all your favorite tools and services'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-level encryption and compliance certifications'
              },
              {
                icon: Star,
                title: '24/7 Support',
                description: 'Dedicated support team ready to help anytime'
              },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition hover:shadow-lg group">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Connect Your Apps',
                description: 'Choose from 100+ integrations or use webhooks'
              },
              {
                step: '2',
                title: 'Build Your Workflow',
                description: 'Drag-and-drop workflow builder, no code needed'
              },
              {
                step: '3',
                title: 'Automate & Scale',
                description: 'Let it run 24/7 while you focus on growth'
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the perfect plan for your team</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$29',
                description: 'Perfect for individuals',
                features: ['10 workflows', '50K tasks/month', 'Basic support', '5 integrations']
              },
              {
                name: 'Professional',
                price: '$99',
                description: 'For growing teams',
                featured: true,
                features: ['Unlimited workflows', '500K tasks/month', 'Priority support', '50+ integrations']
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large organizations',
                features: ['Unlimited everything', 'Dedicated support', 'Custom integrations', 'SLA guarantee']
              },
            ].map((plan, i) => (
              <div key={i} className={`p-8 rounded-xl border-2 transition ${plan.featured ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg text-gray-600">/month</span></div>
                <button className={`w-full py-3 rounded-lg font-semibold mb-6 transition ${plan.featured ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-gray-300 hover:bg-gray-50'}`}>
                  Get Started
                </button>
                <div className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <Check size={16} className="text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to automate?</h2>
          <p className="text-lg opacity-90 mb-8">Start your 14-day free trial. No credit card required.</p>
          <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto text-center border-t border-gray-800 pt-8">
          <p>&copy; 2024 AutoFlow. Built with ❤️ by stack.studio</p>
        </div>
      </footer>
    </div>
  );
}
