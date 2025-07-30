import React from 'react';
import { Sun, Moon, Home, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Properties', href: '#properties' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <Home className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 text-navy-600 dark:text-lightblue-400" />
            <div className="text-md md:text-lg lg:text-2xl font-bold text-gray-900 dark:text-gray-100">
              Michael & Eagle Lettings
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-navy-600 dark:hover:text-lightblue-400 transition-colors duration-200 font-medium md:text-base lg:text-lg"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-lightblue-400" />
              ) : (
                <Moon className="h-5 w-5 text-navy-600" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-navy-600 dark:hover:text-lightblue-400 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;