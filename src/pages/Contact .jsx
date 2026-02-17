import React, { useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactWithMap = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div 
          data-aos="fade-right"
          data-aos-duration="1500"
          className="absolute top-20 left-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        ></div>
        <div 
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="200"
          className="absolute bottom-20 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div 
          data-aos="fade-down"
          className="text-center mb-16"
        >
          <span 
            data-aos="zoom-in"
            data-aos-delay="100"
            className="text-orange-500 font-semibold text-sm uppercase tracking-wider"
          >
            Contact Us
          </span>
          <h2 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4"
          >
            We'd Love to Hear From You
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Whether you have a question about our courses, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div 
            data-aos="fade-right"
            data-aos-delay="400"
            className="bg-white rounded-3xl shadow-xl p-8 lg:p-10"
          >
            <h3 
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-2xl font-bold text-gray-800 mb-6"
            >
              Send us a Message
            </h3>
            
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  data-aos="fade-up"
                  data-aos-delay="600"
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                />
                <input
                  data-aos="fade-up"
                  data-aos-delay="650"
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                />
              </div>
              
              <input
                data-aos="fade-up"
                data-aos-delay="700"
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              />
              
              <input
                data-aos="fade-up"
                data-aos-delay="750"
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              />
              
              <textarea
                data-aos="fade-up"
                data-aos-delay="800"
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 resize-none transition-all"
              ></textarea>
              
              <button 
                data-aos="fade-up"
                data-aos-delay="850"
                data-aos-offset="50"
                className="w-full py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
              >
                Send Message
                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div 
              data-aos="fade-left"
              data-aos-delay="400"
              className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white"
            >
              <h3 
                data-aos="fade-up"
                data-aos-delay="500"
                className="text-2xl font-bold mb-6"
              >
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div 
                  data-aos="fade-up"
                  data-aos-delay="550"
                  className="flex items-center gap-4 group hover:bg-white/10 p-3 rounded-xl transition-all"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Phone</p>
                    <p className="font-semibold">+1 (234) 567-890</p>
                  </div>
                </div>
                
                <div 
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="flex items-center gap-4 group hover:bg-white/10 p-3 rounded-xl transition-all"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Email</p>
                    <p className="font-semibold">support@example.com</p>
                  </div>
                </div>
                
                <div 
                  data-aos="fade-up"
                  data-aos-delay="650"
                  className="flex items-center gap-4 group hover:bg-white/10 p-3 rounded-xl transition-all"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Address</p>
                    <p className="font-semibold">123 Education St, San Francisco</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map with animation */}
            <div 
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-offset="100"
              className="bg-gray-200 rounded-3xl h-64 overflow-hidden group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800" 
                alt="Map"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Map overlay with location pin */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold">
                  📍 Our Location
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative text */}
        <div 
          data-aos="fade-up"
          data-aos-delay="900"
          className="text-center mt-12"
        >
          <p className="text-gray-500">
            📍 We're available 24/7 to assist you. Expect a response within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactWithMap;