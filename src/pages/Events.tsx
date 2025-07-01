/* eslint-disable @typescript-eslint/no-explicit-any */
import { Search, MapPin, Calendar, Filter } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import EventCard from '../components/events/EventCard';
import EventFormModal from '../components/EventFormModal';
import { useGetAllEventsQuery } from '../redux/features/api/eventApi';
import EventLoader from '../components/EventLoader';
import moment from 'moment';

const Events = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { data, isFetching, isLoading } = useGetAllEventsQuery({});
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [dateRangeOption, setDateRangeOption] = useState('');

  const handleDateRangeChange = (option: string) => {
    setDateRangeOption(option);

    const today = moment();

    switch (option) {
      case 'today':
        setSelectedDate(today.format('YYYY-MM-DD'));
        break;

      case 'currentWeek':
        setSelectedDate(
          `${today.startOf('week').format('YYYY-MM-DD')} to ${today
            .endOf('week')
            .format('YYYY-MM-DD')}`
        );
        break;

      case 'lastWeek':
        setSelectedDate(
          `${today
            .subtract(1, 'week')
            .startOf('week')
            .format('YYYY-MM-DD')} to ${today
            .subtract(1, 'week')
            .endOf('week')
            .format('YYYY-MM-DD')}`
        );
        break;

      case 'currentMonth':
        setSelectedDate(
          `${today.startOf('month').format('YYYY-MM-DD')} to ${today
            .endOf('month')
            .format('YYYY-MM-DD')}`
        );
        break;

      case 'lastMonth':
        setSelectedDate(
          `${today
            .subtract(1, 'month')
            .startOf('month')
            .format('YYYY-MM-DD')} to ${today
            .subtract(1, 'month')
            .endOf('month')
            .format('YYYY-MM-DD')}`
        );
        break;

      default:
        setSelectedDate('');
        break;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openAddModal = () => {
    setSelectedEvent(null);
    setIsOpen(true);
  };

  const filteredEvents = useMemo(() => {
    return data?.data?.filter((event: any) => {
      const eventDate = moment(event.dateTime);
      const today = moment();
      let isInRange = true;

      if (dateRangeOption === 'today') {
        isInRange = eventDate.isSame(today, 'day');
      } else if (dateRangeOption === 'currentWeek') {
        isInRange =
          eventDate.isAfter(today.startOf('week')) &&
          eventDate.isBefore(today.endOf('week'));
      } else if (dateRangeOption === 'lastWeek') {
        const lastWeekStart = today.subtract(1, 'week').startOf('week');
        const lastWeekEnd = today.subtract(1, 'week').endOf('week');
        isInRange =
          eventDate.isAfter(lastWeekStart) && eventDate.isBefore(lastWeekEnd);
      } else if (dateRangeOption === 'currentMonth') {
        isInRange =
          eventDate.isAfter(today.startOf('month')) &&
          eventDate.isBefore(today.endOf('month'));
      } else if (dateRangeOption === 'lastMonth') {
        const lastMonthStart = today.subtract(1, 'month').startOf('month');
        const lastMonthEnd = today.subtract(1, 'month').endOf('month');
        isInRange =
          eventDate.isAfter(lastMonthStart) && eventDate.isBefore(lastMonthEnd);
      } else if (selectedDate) {
        // Handle manually selected date
        isInRange = eventDate.isSame(moment(selectedDate), 'day');
      }

      const matchesSearch = event.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesLocation = event.location
        .toLowerCase()
        .includes(location.toLowerCase());

      return matchesSearch && matchesLocation && isInRange;
    });
  }, [data, searchTerm, location, selectedDate]);

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
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={selectedDate.includes('to') ? '' : selectedDate}
                  onChange={(e) => {
                    setDateRangeOption('');
                    setSelectedDate(e.target.value);
                  }}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <select
                value={dateRangeOption}
                onChange={(e) => handleDateRangeChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700"
              >
                <option value="">Select Date Range</option>
                <option value="today">Today</option>
                <option value="currentWeek">Current Week</option>
                <option value="lastWeek">Last Week</option>
                <option value="currentMonth">Current Month</option>
                <option value="lastMonth">Last Month</option>
              </select>

              <button
                onClick={() => {
                  setSearchTerm('');
                  setLocation('');
                  setSelectedDate('');
                  setDateRangeOption('');
                }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Filter className="w-5 h-5" />
                <span>Reset</span>
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
            <button
              onClick={openAddModal}
              className="flex items-center cursor-pointer gap-1 text-sm font-medium px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
            >
              + Add Event
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents?.map((event: any) => (
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
