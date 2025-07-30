import React from 'react';
import { ArrowRight, Star, Users, Building } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 mt-8 md:mt-12 lg:mt-16">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                Premium Property Management
                <span className="text-navy-600 dark:text-lightblue-400"> Excellence</span>
              </h1>
              <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                Michael and Eagle Lettings provides comprehensive property management services with over 15 years of experience in the industry. We maximize your investment returns while ensuring tenant satisfaction.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 py-4 lg:py-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-navy-100 dark:bg-gold-100 rounded-full mb-2 mx-auto">
                  <Building className="h-5 w-5 lg:h-6 lg:w-6 text-navy-600 dark:text-lightblue-600" />
                </div>
                <div className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100">500+</div>
                <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">Properties</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-navy-100 dark:bg-gold-100 rounded-full mb-2 mx-auto">
                  <Users className="h-5 w-5 lg:h-6 lg:w-6 text-navy-600 dark:text-lightblue-600" />
                </div>
                <div className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100">1000+</div>
                <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-navy-100 dark:bg-gold-100 rounded-full mb-2 mx-auto">
                  <Star className="h-5 w-5 lg:h-6 lg:w-6 text-navy-600 dark:text-lightblue-600" />
                </div>
                <div className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100">4.9/5</div>
                <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <button className="inline-flex items-center justify-center px-6 lg:px-8 py-2.5 lg:py-3 bg-navy-600 dark:bg-lightblue-400 text-white dark:text-gray-900 rounded-lg hover:bg-navy-700 dark:hover:bg-lightblue-500 transition-colors duration-200 font-semibold group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="inline-flex items-center justify-center px-6 lg:px-8 py-2.5 lg:py-3 border-2 border-navy-600 dark:border-lightblue-400 text-navy-600 dark:text-lightblue-400 rounded-lg hover:bg-navy-50 dark:hover:bg-lightblue-50 transition-colors duration-200 font-semibold">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern property exterior"
                className="w-full h-auto min-h-[300px] max-h-[400px] sm:max-h-[450px] lg:max-h-[500px] xl:max-h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 lg:p-6 shadow-xl border border-gray-200 dark:border-gray-700 max-w-[200px] sm:max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-navy-100 dark:bg-lightblue-100 rounded-full mb-2 mx-auto">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div>
                  <div className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-gray-100">98% Occupancy</div>
                  <div className="text-xs sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400">Average rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;