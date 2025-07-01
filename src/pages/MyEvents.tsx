/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';
import MyEventCard from '../components/my-events/MyEventCard';
import {
  useDeleteEventMutation,
  useGetMyEventsQuery,
} from '../redux/features/api/eventApi';
import EventFormModal from '../components/EventFormModal';
import EventLoader from '../components/EventLoader';

const MyEvents = () => {
  const { data, isFetching, isLoading } = useGetMyEventsQuery({});
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [deleteEvent] = useDeleteEventMutation();

  const openEditModal = (event: any) => {
    setSelectedEvent(event);
    setIsOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this event?')) {
      try {
        deleteEvent(id).unwrap();
      } catch (error: any) {
        alert(error?.data?.message || 'Delete failed!.');
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isFetching || isLoading) {
    return <EventLoader />;
  }

  return (
    <div className="py-16 bg-gray-50">
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center my-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.data?.map((event: any) => (
              <MyEventCard
                event={event}
                onUpdate={(event) => openEditModal(event)} // open modal or navigate
                onDelete={() => handleDelete(event._id)}
              />
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

export default MyEvents;
