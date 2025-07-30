import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      info: '+44 (0) 20 7123 4567',
      description: 'Mon-Fri 9am-6pm'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'stath@michaelandeaglelettings.com',
      description: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      info: '123 Property Street,North London, UK',
      description: 'Visit us by appointment'
    },
    {
      icon: Clock,
      title: 'Hours',
      info: 'Mon-Fri: 9am-6pm',
      description: 'Sat: 10am-4pm'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to start your property management journey? Contact us today for a free consultation and discover how we can help maximize your investment returns.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-navy-100 dark:bg-lightblue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-navy-600 dark:text-lightblue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">
                        {item.info}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
              <div className="rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14902.261978967608!2d-0.08174295097655128!3d51.58146997403254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c38d8c85623%3A0xb9b2052f927b6c!2sMarkfield%20Park!5e0!3m2!1sen!2suk!4v1752161095632!5m2!1sen!2suk" 
                  width="100%" 
                  height="300" 
                  style={{border: 0}} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-400 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-400 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-400 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Property Type
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-400 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                  >
                    <option value="">Select property type</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="commercial">Commercial</option>
                    <option value="multiple">Multiple Properties</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy-500 dark:focus:ring-lightblue-400 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 transition-colors duration-200 resize-none"
                  placeholder="Tell us about your property management needs..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-3 bg-navy-600 dark:bg-lightblue-400 text-white dark:text-gray-900 rounded-lg hover:bg-navy-700 dark:hover:bg-lightblue-500 transition-colors duration-200 font-semibold group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;