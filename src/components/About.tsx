import React from 'react';
import { Award, Shield, TrendingUp, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Industry Expertise',
      description: 'Over 15 years of experience in property management and real estate investment.'
    },
    {
      icon: Shield,
      title: 'Trusted Service',
      description: 'Fully licensed and insured with comprehensive property protection coverage.'
    },
    {
      icon: TrendingUp,
      title: 'Maximize Returns',
      description: 'Strategic pricing and efficient operations to maximize your property investment returns.'
    },
    {
      icon: Users,
      title: 'Tenant Relations',
      description: 'Excellent tenant screening and relationship management for long-term occupancy.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                About Michael & Eagle Lettings
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Founded by Michael Eagle, our company has been at the forefront of property management excellence for over a decade. We understand that your property is more than just an investment—it's your future.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our comprehensive approach combines cutting-edge technology with personalized service to ensure your properties are well-maintained, profitable, and hassle-free.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-navy-100 dark:bg-lightblue-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-navy-600 dark:text-lightblue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 lg:mb-0">
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional property management team"
                className="w-full h-auto min-h-[300px] max-h-[400px] sm:max-h-[450px] lg:max-h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Quote Card */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6 bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-5 lg:p-6 shadow-xl border border-gray-200 dark:border-gray-700 max-w-[150px] sm:max-w-[180px] lg:max-w-xs">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-navy-600 dark:text-lightblue-400 mb-1 sm:mb-2">15+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;