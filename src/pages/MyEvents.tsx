/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';
import MyEventCard from '../components/my-events/MyEventCard';
const events = [
  {
    id: 1,
    title: 'Summer Music Festival',
    name: 'Abu Bokor',
    date: 'July 15, 2025',
    location: 'Central Park, NY',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400',
    price: '$45',
    category: 'Music',
    attendeeCount: 1250,
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Tech Innovation Summit',
    name: 'Abu Bokor',
    date: 'August 2, 2025',
    location: 'Silicon Valley, CA',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
    price: '$120',
    category: 'Technology',
    attendeeCount: 890,
    rating: 4.9,
  },
  {
    id: 3,
    title: 'Art & Culture Expo',
    name: 'Abu Bokor',
    date: 'July 28, 2025',
    location: 'Museum District, TX',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400',
    price: '$25',
    category: 'Art',
    attendeeCount: 650,
    rating: 4.7,
  },
];
const MyEvents = () => {
  const [selectedEventForEdit, setSelectedEventForEdit] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this event?')) {
      // setEvents((prev) => prev.filter((e) => e.id !== id));
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center my-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <MyEventCard
                event={event}
                onUpdate={(event) => setSelectedEventForEdit(event)} // open modal or navigate
                onDelete={() => handleDelete(event.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyEvents;
