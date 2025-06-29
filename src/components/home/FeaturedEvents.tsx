import { Link } from 'react-router-dom';
import EventCard from '../events/EventCard';

const FeaturedEvents = () => {
  const events = [
    {
      id: 1,
      title: 'Summer Music Festival',
      date: 'July 15, 2025',
      location: 'Central Park, NY',
      image:
        'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400',
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
      image:
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
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
      image:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400',
      price: '$25',
      category: 'Art',
      attendees: 650,
      rating: 4.7,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Events
          </h2>
          <p className="text-xl text-gray-600">
            Don't miss these amazing upcoming events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard event={event} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to={'/events'}
            className="bg-transparent border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
