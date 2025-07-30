import React from 'react';
import { MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';

const Properties: React.FC = () => {
  const properties = [
    {
      id: 1,
      title: 'Modern City Apartment',
      location: 'Downtown District',
      price: '£1,200/month',
      beds: 2,
      baths: 2,
      area: '850 sq ft',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Available'
    },
    {
      id: 2,
      title: 'Victorian Terrace House',
      location: 'Heritage Quarter',
      price: '£1,800/month',
      beds: 3,
      baths: 2,
      area: '1,200 sq ft',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Rented'
    },
    {
      id: 3,
      title: 'Contemporary Studio',
      location: 'Business District',
      price: '£950/month',
      beds: 1,
      baths: 1,
      area: '480 sq ft',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Available'
    },
    {
      id: 4,
      title: 'Family Townhouse',
      location: 'Suburban Area',
      price: '£2,200/month',
      beds: 4,
      baths: 3,
      area: '1,800 sq ft',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Available'
    }
  ];

  return (
    <section id="properties" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our carefully selected portfolio of premium properties, each managed with the highest standards of service and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    property.status === 'Available' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {property.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Bed className="h-4 w-4 mr-1" />
                    {property.beds}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Bath className="h-4 w-4 mr-1" />
                    {property.baths}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Square className="h-4 w-4 mr-1" />
                    {property.area}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-navy-600 dark:text-lightblue-400">
                    {property.price}
                  </span>
                  <button className="flex items-center text-navy-600 dark:text-lightblue-400 hover:text-navy-700 dark:hover:text-lightblue-500 transition-colors duration-200 font-medium group">
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center px-8 py-3 bg-navy-600 dark:bg-lightblue-400 text-white dark:text-gray-900 rounded-lg hover:bg-navy-700 dark:hover:bg-lightblue-500 transition-colors duration-200 font-semibold group">
            View All Properties
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Properties;