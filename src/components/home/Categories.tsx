// components/Categories.js
import React from 'react';
import { Music, Trophy, Camera, Users, Clock } from 'lucide-react';

const Categories = () => {
  const categories = [
    { name: 'Music', icon: Music, count: '245 Events', color: 'bg-purple-500' },
    {
      name: 'Technology',
      icon: Trophy,
      count: '189 Events',
      color: 'bg-blue-500',
    },
    {
      name: 'Art & Culture',
      icon: Camera,
      count: '156 Events',
      color: 'bg-pink-500',
    },
    {
      name: 'Sports',
      icon: Trophy,
      count: '134 Events',
      color: 'bg-green-500',
    },
    {
      name: 'Business',
      icon: Users,
      count: '98 Events',
      color: 'bg-orange-500',
    },
    {
      name: 'Food & Drink',
      icon: Clock,
      count: '87 Events',
      color: 'bg-red-500',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600">
            Find events that match your interests
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >
              <div
                className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600">{category.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
