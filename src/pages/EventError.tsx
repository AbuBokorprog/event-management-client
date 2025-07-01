import { useState, useEffect } from 'react';
import {
  Calendar,
  AlertTriangle,
  RefreshCw,
  Home,
  Coffee,
  Wifi,
  Server,
  ArrowLeft,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EventError = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [errorCode] = useState('404');
  const [retryCount, setRetryCount] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);

  const errorMessages = {
    '404': {
      title: 'Event Not Found',
      subtitle: 'Looks like this event got cancelled!',
      description:
        "The page you're looking for might have been moved, deleted, or perhaps never existed in the first place.",
      suggestions: [
        'Check if the event URL is spelled correctly',
        'Try searching for the event in our directory',
        'The event might have been rescheduled or cancelled',
      ],
    },
    '500': {
      title: 'Server Having a Meltdown',
      subtitle: 'Our servers are taking an unscheduled coffee break!',
      description:
        "Something went wrong on our end. Don't worry, our tech team is already on it.",
      suggestions: [
        'Try refreshing the page in a few moments',
        'Check our status page for updates',
        'Contact support if the problem persists',
      ],
    },
    '403': {
      title: 'Access Denied',
      subtitle: 'This event is invite-only!',
      description:
        "You don't have permission to access this page. You might need special credentials.",
      suggestions: [
        "Make sure you're logged into the right account",
        'Contact the event organizer for access',
        'Check if you have the required permissions',
      ],
    },
  };

  const currentError = errorMessages[errorCode] || errorMessages['404'];

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const handleRetry = () => {
    setIsRetrying(true);
    setRetryCount((prev) => prev + 1);

    setTimeout(() => {
      setIsRetrying(false);
      // In a real app, this would trigger a page reload or navigation
    }, 2000);
  };

  const floatingIcons = [
    { Icon: Calendar, delay: 0, duration: 3 },
    { Icon: Coffee, delay: 1, duration: 4 },
    { Icon: Wifi, delay: 2, duration: 3.5 },
    { Icon: Server, delay: 0.5, duration: 4.5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex items-center justify-center p-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10">
        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, delay, duration }, index) => (
          <div
            key={index}
            className="absolute opacity-10"
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + index * 15}%`,
              animation: `float ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
            }}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Error Code Display */}
        <div className="mb-8">
          <div
            className={`text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 mb-4 ${
              glitchActive ? 'animate-pulse' : ''
            }`}
          >
            {errorCode}
          </div>

          {/* Broken Calendar Icon */}
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 flex items-center justify-center mx-auto border-2 border-red-500/30">
              <Calendar
                className={`w-10 h-10 text-red-400 ${
                  glitchActive ? 'animate-bounce' : ''
                }`}
              />
              {/* Error indicator */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <AlertTriangle className="w-3 h-3 text-white" />
              </div>
            </div>

            {/* Glitch effect overlay */}
            {glitchActive && (
              <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"></div>
            )}
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
            {currentError.title}
          </h1>
          <p className="text-xl text-red-600 mb-4 font-medium">
            {currentError.subtitle}
          </p>
          <p className="text-gray-800 text-lg leading-relaxed max-w-lg mx-auto">
            {currentError.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={handleRetry}
            disabled={isRetrying}
            className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <RefreshCw
              className={`w-5 h-5 mr-2 ${
                isRetrying
                  ? 'animate-spin'
                  : 'group-hover:rotate-180 transition-transform duration-500'
              }`}
            />
            {isRetrying
              ? 'Retrying...'
              : `Try Again ${retryCount > 0 ? `(${retryCount})` : ''}`}
          </button>

          <Link
            to={'/'}
            className="flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm text-black rounded-lg font-medium border  transition-all duration-300 hover:bg-white/20 hover:scale-105 group"
          >
            <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm text-black rounded-lg font-medium border  transition-all duration-300 hover:bg-white/20 hover:scale-105 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        {/* Fun Footer Message */}
        <div className="mt-8 text-gray-900 text-sm">
          <p className="mt-2 italic">
            Even the best events sometimes have hiccups! 🎉
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventError;
