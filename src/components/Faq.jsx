import React, { useState } from "react";
import { faqs } from "../data/BrandData";
import { BiDownArrow, BiHelpCircle } from "react-icons/bi";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative max-w-7xl mx-auto px-4 py-20 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header with Gradient */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
          🤔 Got Questions?
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about our courses and learning platform.
          Can't find what you're looking for? Feel free to contact us.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side - FAQ Illustration/Stats */}
        <div className="sticky top-24 space-y-8">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white shadow-2xl">
            <BiHelpCircle className="text-5xl mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
            <p className="text-orange-100 mb-6">
              Can't find the answer you're looking for? Our support team is here
              to help.
            </p>
            <Link to="/contact">
              <button className="px-6 py-3 bg-white text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-colors shadow-lg">
                Contact Support →
              </button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* Right Side - FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl border transition-all duration-300 ${
                activeIndex === index
                  ? "shadow-xl border-orange-200 scale-[1.02]"
                  : "shadow-md border-gray-100 hover:shadow-lg hover:border-orange-100"
              }`}
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span
                  className={`font-semibold transition-colors ${
                    activeIndex === index ? "text-orange-600" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>

                {/* Animated Icon */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-orange-500 text-white rotate-180"
                      : "bg-gray-100 text-gray-600 group-hover:bg-orange-100"
                  }`}
                >
                  {activeIndex === index ? (
                    <FiMinus className="w-4 h-4" />
                  ) : (
                    <FiPlus className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* Answer with animation */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  <div className="prose prose-sm max-w-none">{faq.answer}</div>

                  {/* Optional: Add helpful links or actions */}
                  {faq.link && (
                    <a
                      href={faq.link}
                      className="inline-flex items-center mt-3 text-orange-600 hover:text-orange-700 font-medium text-sm"
                    >
                      Learn more about this →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Bottom CTA */}
        </div>
      </div>
      <div className="text-center w-full  flex justify-center items-center pt-6">
        <p className="text-gray-500 text-sm">
          Can't find what you're looking for?{" "}
          <button className="text-orange-600 font-semibold hover:text-orange-700 hover:underline">
            Ask a question
          </button>
        </p>
      </div>
    </section>
  );
};

export default Faq;
