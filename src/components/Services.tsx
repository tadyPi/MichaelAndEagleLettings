import React from 'react';
import { Home, Users, Wrench, FileText, DollarSign, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Property Management',
      description: 'Complete property management services including maintenance, inspections, and tenant relations.',
      features: ['24/7 maintenance support', 'Regular property inspections', 'Tenant screening and placement']
    },
    {
      icon: Users,
      title: 'Tenant Services',
      description: 'Comprehensive tenant management from screening to move-out with excellent customer service.',
      features: ['Professional tenant screening', 'Online rent collection', 'Tenant communication portal']
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repairs',
      description: 'Proactive maintenance and rapid response repairs to keep your properties in excellent condition.',
      features: ['Emergency repair service', 'Preventive maintenance', 'Vetted contractor network']
    },
    {
      icon: FileText,
      title: 'Legal Compliance',
      description: 'Expert guidance on property law and regulations to ensure full legal compliance.',
      features: ['Lease agreement management', 'Legal documentation', 'Compliance monitoring']
    },
    {
      icon: DollarSign,
      title: 'Financial Management',
      description: 'Transparent financial reporting and rent optimization to maximize your investment returns.',
      features: ['Monthly financial reports', 'Rent optimization analysis', 'Tax documentation']
    },
    {
      icon: Shield,
      title: 'Property Protection',
      description: 'Comprehensive insurance coordination and risk management for your investment properties.',
      features: ['Insurance claim assistance', 'Risk assessment', 'Property security monitoring']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide comprehensive property management services designed to maximize your investment returns while minimizing your involvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-navy-100 dark:bg-lightblue-100 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-navy-600 dark:text-lightblue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-navy-600 dark:bg-lightblue-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-navy-600 dark:bg-lightblue-400 rounded-2xl p-8 text-white dark:text-gray-900">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let us handle your property management needs so you can focus on growing your investment portfolio.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-gray-900 text-navy-600 dark:text-lightblue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 font-semibold">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;