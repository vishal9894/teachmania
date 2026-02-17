import React, { useEffect } from 'react';
import { 
  FiHeart, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiLinkedin, 
  FiGithub,
  FiYoutube 
} from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';
import logo from "../assets/image.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Initialize AOS
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
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern with AOS */}
      <div className="absolute inset-0 opacity-10">
        <div 
          data-aos="fade-right"
          data-aos-duration="1500"
          className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl"
        ></div>
        <div 
          data-aos="fade-left"
          data-aos-duration="1500"
          className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"
        ></div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="space-y-4"
          >
            <div 
              data-aos="fade-right"
              data-aos-delay="200"
              className="flex items-center gap-2"
            >
              <img src={logo} alt="" className='h-10 w-10' />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Teach Mania
              </span>
            </div>
            
            <p 
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-gray-400 text-sm leading-relaxed"
            >
              Empowering learners worldwide with cutting-edge tech education and hands-on project experience.
            </p>
            
            {/* Social Links */}
            <div 
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex gap-3 pt-4"
            >
              {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  data-aos="zoom-in"
                  data-aos-delay={500 + index * 100}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 
              data-aos="fade-right"
              data-aos-delay="300"
              className="text-lg font-semibold mb-4"
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Our Courses', 'Success Stories', 'Pricing', 'For Business'].map((item, index) => (
                <li 
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={400 + index * 50}
                >
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                    <BsArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 
              data-aos="fade-right"
              data-aos-delay="400"
              className="text-lg font-semibold mb-4"
            >
              Support
            </h3>
            <ul className="space-y-3">
              {['Help Center', 'FAQs', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
                <li 
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={500 + index * 50}
                >
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                    <BsArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="space-y-6"
          >
            <div>
              <h3 
                data-aos="fade-right"
                data-aos-delay="500"
                className="text-lg font-semibold mb-4"
              >
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li 
                  data-aos="fade-up"
                  data-aos-delay="550"
                  className="flex items-start gap-3 text-gray-400"
                >
                  <FiMapPin className="text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">123 Education St, San Francisco, CA 94105</span>
                </li>
                <li 
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="flex items-center gap-3 text-gray-400"
                >
                  <FiPhone className="text-orange-500" />
                  <a href="tel:+1234567890" className="text-sm hover:text-orange-400">+1 (234) 567-890</a>
                </li>
                <li 
                  data-aos="fade-up"
                  data-aos-delay="650"
                  className="flex items-center gap-3 text-gray-400"
                >
                  <FiMail className="text-orange-500" />
                  <a href="mailto:support@learnhub.com" className="text-sm hover:text-orange-400">support@learnhub.com</a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div 
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-3">Subscribe to get updates on new courses</p>
              <div 
                data-aos="fade-up"
                data-aos-delay="750"
                className="flex"
              >
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="px-4 py-3 bg-orange-500 rounded-r-lg hover:bg-orange-600 transition-colors">
                  <FiMail className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          data-aos="fade-up"
          data-aos-delay="800"
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p 
              data-aos="fade-right"
              data-aos-delay="850"
              className="text-gray-400 text-sm text-center md:text-left"
            >
              © {currentYear} LearnHub. All rights reserved. Made with <FiHeart className="inline text-red-500" /> for learners
            </p>
            
            {/* Payment Methods */}
            <div 
              data-aos="fade-left"
              data-aos-delay="900"
              className="flex items-center gap-3"
            >
              <span className="text-sm text-gray-400">We Accept:</span>
              <div className="flex gap-2">
                {['Visa', 'MC', 'PayPal', 'Amex'].map((method, index) => (
                  <div 
                    key={method}
                    data-aos="zoom-in"
                    data-aos-delay={950 + index * 50}
                    className="w-10 h-6 bg-gray-800 rounded text-xs flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;