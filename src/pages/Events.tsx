/* eslint-disable @typescript-eslint/no-explicit-any */
import { Search, MapPin, Calendar, Filter } from 'lucide-react';
import { useEffect, useState } from 'react';
import EventCard from '../components/events/EventCard';
import EventFormModal from '../components/EventFormModal';
import { useGetAllEventsQuery } from '../redux/features/api/eventApi';
import EventLoader from '../components/EventLoader';

// const events = [
//   {
//     id: 1,
//     title: 'Summer Music Festival',
//     date: 'July 15, 2025',
//     location: 'Central Park, NY',
//     image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400',
//     price: '$45',
//     category: 'Music',
//     attendees: 1250,
//     rating: 4.8,
//   },
//   {
//     id: 2,
//     title: 'Tech Innovation Summit',
//     date: 'August 2, 2025',
//     location: 'Silicon Valley, CA',
//     image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
//     price: '$120',
//     category: 'Technology',
//     attendees: 890,
//     rating: 4.9,
//   },
//   {
//     id: 3,
//     title: 'Art & Culture Expo',
//     date: 'July 28, 2025',
//     location: 'Museum District, TX',
//     image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400',
//     price: '$25',
//     category: 'Art',
//     attendees: 650,
//     rating: 4.7,
//   },
// ];

const Events = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { data, isFetching, isLoading } = useGetAllEventsQuery({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openAddModal = () => {
    setSelectedEvent(null);
    setIsOpen(true);
  };

  if (isFetching || isLoading) {
    return <EventLoader />;
  }

  return (
    <div className="py-16 bg-gray-50 space-y-14">
      <section className="my-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 my-4">
              Find Your Perfect Event
            </h2>
            <p className="text-xl text-gray-600">
              Search through thousands of events happening near you
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2">
                <Filter className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center my-10 flex items-center justify-between">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              All Events
            </h2>
            <button onClick={openAddModal} className="cursor-pointer">
              + Add Event
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.data?.map((event: any) => (
              <EventCard event={event} />
            ))}
          </div>
        </div>
        <EventFormModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          event={selectedEvent}
        />
      </section>
    </div>
  );
};

export default Events;
