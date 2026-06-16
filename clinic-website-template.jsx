'use client';

import { Calendar, Clock, MapPin, Phone, Mail, Star, CheckCircle, Users } from 'lucide-react';
import { useState } from 'react';

export default function ClinicWebsite() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="w-full bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-emerald-600">Wellness Clinic</div>
          <div className="flex gap-8 items-center">
            <a href="#about" className="text-sm font-medium hover:text-emerald-600 transition">About</a>
            <a href="#services" className="text-sm font-medium hover:text-emerald-600 transition">Services</a>
            <a href="#doctors" className="text-sm font-medium hover:text-emerald-600 transition">Doctors</a>
            <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Your Health,
              <br />
              <span className="text-emerald-600">Our Priority</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              State-of-the-art medical facilities combined with personalized care. Book your appointment in seconds.
            </p>
            <button className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition flex items-center gap-2">
              <Calendar size={20} /> Book Appointment
            </button>
            <div className="mt-12 flex gap-8">
              <div>
                <div className="text-3xl font-bold text-emerald-600">10,000+</div>
                <p className="text-gray-600">Patients Treated</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">98%</div>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">15+</div>
                <p className="text-gray-600">Expert Doctors</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl h-96"></div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                icon: '🩺',
                title: 'General Consultation',
                description: 'Regular check-ups and health consultations with experienced doctors',
                price: '₹500'
              },
              {
                icon: '💊',
                title: 'Dental Care',
                description: 'Comprehensive dental treatments and preventive care',
                price: '₹800'
              },
              {
                icon: '🧘',
                title: 'Physiotherapy',
                description: 'Professional rehabilitation and physical therapy sessions',
                price: '₹600'
              },
              {
                icon: '🔬',
                title: 'Lab Tests',
                description: 'Quick and accurate diagnostic tests with home sample collection',
                price: '₹300+'
              },
              {
                icon: '👶',
                title: 'Pediatric Care',
                description: 'Specialized healthcare for infants and children',
                price: '₹700'
              },
              {
                icon: '❤️',
                title: 'Cardiology',
                description: 'Heart and cardiovascular health management',
                price: '₹1,200'
              },
            ].map((service, i) => (
              <div
                key={i}
                onClick={() => setSelectedService(i)}
                className="p-8 rounded-xl border-2 border-gray-200 hover:border-emerald-600 cursor-pointer transition hover:shadow-lg group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-600 transition">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="text-emerald-600 font-semibold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Meet Our Team</h2>
          
          <div className="grid grid-cols-4 gap-8">
            {[
              { name: 'Dr. Rajesh Kumar', specialty: 'General Physician', experience: '15 years' },
              { name: 'Dr. Priya Sharma', specialty: 'Dentist', experience: '12 years' },
              { name: 'Dr. Amit Verma', specialty: 'Physiotherapist', experience: '10 years' },
              { name: 'Dr. Neha Patel', specialty: 'Pediatrician', experience: '8 years' },
            ].map((doctor, i) => (
              <div key={i} className="text-center">
                <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl h-48 mb-4"></div>
                <h3 className="text-lg font-bold">{doctor.name}</h3>
                <p className="text-emerald-600 font-medium text-sm mb-2">{doctor.specialty}</p>
                <p className="text-gray-600 text-sm">{doctor.experience} experience</p>
                <button className="mt-4 w-full py-2 border border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Booking */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Book Your Appointment</h2>
          <p className="text-center text-gray-600 mb-12">Fast, convenient, and secure</p>

          <div className="bg-white border-2 border-emerald-200 rounded-xl p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Select Service</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald-600 outline-none">
                  <option>General Consultation</option>
                  <option>Dental Care</option>
                  <option>Physiotherapy</option>
                  <option>Lab Tests</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Select Doctor</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald-600 outline-none">
                  <option>Dr. Rajesh Kumar</option>
                  <option>Dr. Priya Sharma</option>
                  <option>Dr. Amit Verma</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Preferred Date</label>
                  <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald-600 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Preferred Time</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald-600 outline-none">
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>2:00 PM</option>
                    <option>4:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Your Name</label>
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald-600 outline-none" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald-600 outline-none" />
              </div>

              <button className="w-full py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition">
                Confirm Booking
              </button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Clock className="text-emerald-600 mb-2" size={24} />
              <p className="font-semibold text-sm">Instant Confirmation</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="text-emerald-600 mb-2" size={24} />
              <p className="font-semibold text-sm">Call Reminder</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="text-emerald-600 mb-2" size={24} />
              <p className="font-semibold text-sm">100% Secure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Wellness Clinic?</h2>
          
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                'Licensed and certified doctors with proven expertise',
                'State-of-the-art medical equipment and technology',
                '24/7 emergency services and ambulance support',
                'Affordable transparent pricing with no hidden charges',
                'Complete patient privacy and data security',
                'Easy online booking and minimal waiting time'
              ].map((point, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl h-96"></div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="flex gap-4">
              <MapPin className="text-emerald-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold mb-1">Location</h3>
                <p className="text-gray-600">123 Health Street, Medical Complex, Pune 411001</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="text-emerald-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold mb-1">Phone</h3>
                <p className="text-gray-600">+91 20 1234 5678</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="text-emerald-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-gray-600">info@wellnessclinic.in</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="text-emerald-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold mb-1">Hours</h3>
                <p className="text-gray-600">Mon-Sun: 9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="bg-gray-200 rounded-xl h-80 mb-12 flex items-center justify-center">
            <p className="text-gray-500">Google Map Would Be Embedded Here</p>
          </div>

          <div className="bg-emerald-50 p-8 rounded-xl border-2 border-emerald-200">
            <h3 className="text-lg font-bold mb-4">Emergency?</h3>
            <p className="text-gray-700 mb-6">Call our emergency hotline available 24/7</p>
            <button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
              Call Emergency: +91 98765 EMERGENCY
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto text-center border-t border-gray-800 pt-8">
          <p>&copy; 2024 Wellness Clinic. Designed & built by stack.studio</p>
        </div>
      </footer>
    </div>
  );
}
