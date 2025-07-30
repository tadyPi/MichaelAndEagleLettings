import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Property Investor',
      content: 'Michael and Eagle Lettings have exceeded my expectations. They managed my portfolio of 8 properties flawlessly, maintaining 100% occupancy for over two years. Their professionalism is unmatched.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'David Chen',
      role: 'Real Estate Developer',
      content: 'The level of service and attention to detail is remarkable. They handle everything from tenant screening to maintenance, allowing me to focus on expanding my business. Highly recommended!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Emma Wilson',
      role: 'First-time Landlord',
      content: 'As a first-time landlord, I was nervous about renting out my property. Michael\'s team guided me through every step and made the process seamless. They truly care about their clients.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Robert Taylor',
      role: 'Investment Manager',
      content: 'Outstanding service quality and transparent communication. They provide detailed monthly reports and have consistently maximized rental income for my properties. A truly professional team.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our property management services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-navy-600 dark:text-lightblue-400 opacity-50" />
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-6 py-3 rounded-full">
            <Star className="h-5 w-5 fill-current" />
            <span className="font-semibold">4.9/5 Average Rating</span>
            <span className="text-sm opacity-75">from 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;