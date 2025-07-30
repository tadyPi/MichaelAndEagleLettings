import React from 'react';
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    services: [
      { name: 'Property Management', href: '#' },
      { name: 'Tenant Services', href: '#' },
      { name: 'Maintenance & Repairs', href: '#' },
      { name: 'Legal Compliance', href: '#' }
    ],
    resources: [
      { name: 'Property Valuations', href: '#' },
      { name: 'Market Reports', href: '#' },
      { name: 'Investment Guide', href: '#' },
      { name: 'Landlord Resources', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <Home className="h-8 w-8 text-lightblue-400" />
                <div className="text-xl font-bold">Michael & Eagle Lettings</div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Professional property management services with over 15 years of experience. We maximize your investment returns while ensuring tenant satisfaction.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-lightblue-400 hover:text-gray-900 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-lightblue-400 transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-lightblue-400 transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-lightblue-400 flex-shrink-0" />
                  <span className="text-gray-400">123 Property Street, London, UK</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-lightblue-400 flex-shrink-0" />
                  <span className="text-gray-400">+44 (0) 20 7123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-lightblue-400 flex-shrink-0" />
                  <span className="text-gray-400">info@eaglelettings.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 dark:border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Michael & Eagle Lettings. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-lightblue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-lightblue-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-lightblue-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;