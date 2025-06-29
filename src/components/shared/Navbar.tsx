import { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent background scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Events', path: '/events' },
    { label: 'Create Event', path: '/add-event' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg text-gray-700'
          : 'bg-transparent text-gray-950'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              EventHub
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-sm sm:text-base hover:text-purple-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
            <Link
              to="/login"
              className={`text-sm sm:text-base ${
                isScrolled ? 'text-gray-700' : 'text-wite'
              } hover:text-purple-600 transition-colors font-medium`}
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="text-sm sm:text-base bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-base font-medium ${
                isScrolled ? 'text-gray-700' : 'text-wite'
              } hover:text-purple-600 transition-colors`}
            >
              {item.label}
            </Link>
          ))}

          <hr className="my-4 border-gray-300" />

          <div className="space-y-2">
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className={`block ${
                isScrolled ? 'text-gray-700' : 'text-wite'
              } text-base font-medium hover:text-purple-600 transition-colors`}
            >
              Sign In
            </Link>
            <Link
              to="/register"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2.5 rounded-full font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
