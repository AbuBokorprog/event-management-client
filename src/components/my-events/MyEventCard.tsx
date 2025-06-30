/* eslint-disable @typescript-eslint/no-explicit-any */
import { Calendar, MapPin, Users, Pencil, Trash } from 'lucide-react';
import React from 'react';

type MyEventCardProps = {
  event: any;
  onUpdate: (event: any) => void;
  onDelete: (eventId: string) => void;
};

const MyEventCard: React.FC<MyEventCardProps> = ({
  event,
  onUpdate,
  onDelete,
}) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      onDelete(event._id);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
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
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-purple-700">{event.title}</h3>

        <p className="text-sm text-gray-500">
          <strong>Posted by:</strong> {event.name}
        </p>

        <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(event.dateTime).toLocaleString()}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {event.location}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {event.attendeeCount} attending
          </div>
        </div>

        <p className="text-gray-700 text-sm">{event.description}</p>

        <div className="flex justify-between gap-3 pt-4">
          <button
            onClick={() => onUpdate(event)}
            className="flex items-center gap-1 text-sm font-medium px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          >
            <Pencil className="w-4 h-4" />
            Update
          </button>

          <button
            onClick={handleDelete}
            className="flex items-center gap-1 text-sm font-medium px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            <Trash className="w-4 h-4" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyEventCard;
