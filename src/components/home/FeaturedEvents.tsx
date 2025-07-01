/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';
import EventCard from '../events/EventCard';
import { useGetAllEventsQuery } from '../../redux/features/api/eventApi';
import EventLoader from '../EventLoader';

const FeaturedEvents = () => {
  const { data, isFetching, isLoading } = useGetAllEventsQuery({});

  if (isFetching || isLoading) {
    return <EventLoader />;
  }

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
          {data?.data?.slice(0, 5)?.map((event: any) => (
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
