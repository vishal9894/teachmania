import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";
import image from "../assets/image.jpg";
import Marquee from "react-fast-marquee";
import { BrandData, reviews, services } from "../data/BrandData";
import { BsArrowLeft, BsArrowUpRight } from "react-icons/bs";
import software from "../assets/1720.jpg";
import ReviewCard from "../components/ReviewCard";
import Faq from "../components/Faq";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Home = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
      offset: 100, // Offset from original trigger point
      easing: 'ease-in-out', // Easing function
    });
    
    // Refresh AOS on component update
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="max-w-7xl mx-auto thin-scroll px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content - Animate from left */}
          <div 
            data-aos="fade-right"
            data-aos-delay="200"
            className="max-w-xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              Empowering You with Digital{" "}
              <span className="text-orange-500">Skills</span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Our platform makes education flexible and convenient, so you can
              achieve your goals wherever and whenever you choose.
            </p>

            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition">
              Join Our Course
            </button>

            {/* Contributors & Rating */}
            <div 
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-10 flex items-center gap-6 flex-wrap"
            >
              {/* Avatars */}
              <div className="flex -space-x-3">
                {[
                  "1491528323818-fdd1faba62cc",
                  "1550525811-e5869dd03032",
                  "1500648767791-00dcc994a43e",
                  "1472099645785-5658abf4ff4e",
                  "1517365830460-955ce3ccd263",
                ].map((id, index) => (
                  <img
                    key={index}
                    className="h-12 w-12 rounded-full ring-2 ring-white object-cover"
                    src={`https://images.unsplash.com/photo-${id}?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                    alt="Contributor"
                  />
                ))}
              </div>

              {/* Rating */}
              <div>
                <div className="flex items-center text-orange-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <IoIosStarHalf />
                  <span className="ml-2 text-gray-700 font-semibold">
                    (4.5)
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  1000+ reviews from our students
                </p>
              </div>
            </div>
          </div>

          {/* Right Illustration - Animate from left */}
          <div 
            data-aos="fade-left"
            data-aos-delay="200"
            className="w-full md:w-1/2 h-96 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center shadow-lg overflow-hidden"
          >
            <img
              src={image}
              alt="Teaching illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Brands Section - Animate fade up */}
      <div 
        data-aos="fade-up"
        data-aos-delay="100"
        className="py-12"
      >
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Trusted by 2000+ Brands
          </h2>
        </div>

        <Marquee speed={50}>
          {BrandData.map((item) => (
            <div
              key={item.id}
              className="mx-10 grayscale transition duration-300 flex hover:grayscale-0 gap-4 items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-16 object-contain rounded-full"
              />
              <h2 className="mt-2 text-lg text-gray-600 font-semibold">
                {item.name}
              </h2>
            </div>
          ))}
        </Marquee>
      </div>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        {/* Heading - Animate fade down */}
        <div 
          data-aos="fade-down"
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Start Exploring : Find your Perfect{" "}
            <span className="text-orange-500">Category</span>
          </h3>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Dive into our diverse range of categories and discover the ideal
            course to match your interests and goals.
          </p>
        </div>

        {/* Category Cards - Staggered animations */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="group relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-xl border border-white/30 shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={software}
              alt="Custom Application"
              className="h-40 w-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="p-6 relative">
              <span className="absolute -top-6 right-6 bg-orange-500 text-white p-3 rounded-full shadow-md">
                <BsArrowUpRight />
              </span>

              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-orange-500 transition">
                Custom Application
              </h2>

              <p className="mt-2 text-gray-600 text-sm">
                Master custom applications and database-driven systems.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="group relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-xl border border-white/30 shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={software}
              alt="Marketing"
              className="h-40 w-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="p-6 relative">
              <span className="absolute -top-6 right-6 bg-orange-500 text-white p-3 rounded-full shadow-md">
                <BsArrowUpRight />
              </span>

              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-orange-500 transition">
                Marketing
              </h2>

              <p className="mt-2 text-gray-600 text-sm">
                Learn digital marketing, branding, and growth strategies.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            data-aos="fade-up"
            data-aos-delay="600"
            className="group relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-xl border border-white/30 shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={software}
              alt="Content Writing"
              className="h-40 w-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="p-6 relative">
              <span className="absolute -top-6 right-6 bg-orange-500 text-white p-3 rounded-full shadow-md">
                <BsArrowUpRight />
              </span>

              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-orange-500 transition">
                Content Writing
              </h2>

              <p className="mt-2 text-gray-600 text-sm">
                Build SEO-friendly writing skills for blogs and brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Reviews Section - Animate zoom in */}
      <div 
        data-aos="zoom-in"
        data-aos-delay="200"
        className="w-full py-8"
      >
        <Marquee
          speed={50}
          gradient={true}
          gradientColor={[255, 255, 255]}
          gradientWidth={50}
        >
          <div className="flex gap-6 px-4">
            {reviews.map((review, index) => (
              <div key={index} className="w-[350px] flex-shrink-0">
                <ReviewCard {...review} />
              </div>
            ))}
            {reviews.map((review, index) => (
              <div
                key={`duplicate-${index}`}
                className="w-[350px] flex-shrink-0"
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* FAQ Section - Animate fade up */}
      <div 
        data-aos="fade-up"
        data-aos-delay="200"
        className=""
      >
        <Faq />
      </div>
    </>
  );
};

export default Home;