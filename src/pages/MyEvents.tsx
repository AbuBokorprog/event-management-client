/* eslint-disable @typescript-eslint/no-explicit-any */

import { MapPin, Calendar, Users, Star, Heart, Share2 } from 'lucide-react';
import { useEffect } from 'react';
const events = [
  {
    id: 1,
    title: 'Summer Music Festival',
    date: 'July 15, 2025',
    location: 'Central Park, NY',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400',
    price: '$45',
    category: 'Music',
    attendees: 1250,
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Tech Innovation Summit',
    date: 'August 2, 2025',
    location: 'Silicon Valley, CA',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
    price: '$120',
    category: 'Technology',
    attendees: 890,
    rating: 4.9,
  },
  {
    id: 3,
    title: 'Art & Culture Expo',
    date: 'July 28, 2025',
    location: 'Museum District, TX',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400',
    price: '$25',
    category: 'Art',
    attendees: 650,
    rating: 4.7,
  },
];
const MyEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const handleDelete = (id: number) => {
  //   if (confirm('Are you sure you want to delete this event?')) {
  //     setEvents((prev) => prev.filter((e) => e.id !== id));
  //   }
  // };

  return (
    <div className="py-16 bg-gray-50">
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              All Events
            </h2>
            <p className="text-xl text-gray-600">
              Don't miss these amazing upcoming events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Share2 className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>

                  <div className="flex items-center space-x-4 text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {event.attendees} attending
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">
                          {event.rating}
                        </span>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-purple-600">
                      {event.price}
                    </span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                    Get Tickets
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyEvents;
