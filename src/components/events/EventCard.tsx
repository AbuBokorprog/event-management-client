/* eslint-disable @typescript-eslint/no-explicit-any */
import { Calendar, Heart, MapPin, Share2, Users } from 'lucide-react';
import React from 'react';
import {
  useGetMyJoinedEventQuery,
  useJoinEventMutation,
} from '../../redux/features/api/joinEventApi';
import { useAuth } from '../../provider/AuthContext';
import { useNavigate } from 'react-router-dom';

const EventCard: React.FC<any> = ({ event }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [joinEvent] = useJoinEventMutation();

  const { data } = useGetMyJoinedEventQuery(event._id);

  const joinEventHandler = (id: number) => {
    if (!user?.email) {
      navigate('/login');
      return;
    }
    const payload = { userId: user?.id, eventId: id };

    try {
      joinEvent(payload).unwrap();
    } catch (error: any) {
      alert(error?.data?.message || 'Something went wrong!.');
    }
  };

  return (
    <div
      key={event._id}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
    >
      <div className="relative overflow-hidden">
        <img
          src={event.photoUrl}
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
        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>

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
                {event.attendeeCount} attending
              </span>
            </div>
            {/* <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{event.rating}</span>
            </div> */}
          </div>
          <span className="text-2xl font-bold text-purple-600">
            {event.price}
          </span>
        </div>
        {data?.data ? (
          <button
            disabled
            className="w-full bg-gray-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Already Joined
          </button>
        ) : (
          <button
            onClick={() => joinEventHandler(event?._id)}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Get Tickets
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
