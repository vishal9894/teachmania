import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';

const ContactWithMap = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            We'd Love to Hear From You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you have a question about our courses, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>
              
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              />
              
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              />
              
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 resize-none"
              ></textarea>
              
              <button className="w-full py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                Send Message
                <BsArrowRight />
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Phone</p>
                    <p className="font-semibold">+1 (234) 567-890</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Email</p>
                    <p className="font-semibold">support@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Address</p>
                    <p className="font-semibold">123 Education St, San Francisco</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-3xl h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800" 
                alt="Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWithMap;