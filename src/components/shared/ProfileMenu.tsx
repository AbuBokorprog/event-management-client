import { useState, useRef, useEffect } from 'react';
import type { DecodedToken } from '../../utils/decodeToken';

const ProfileMenu = ({
  user,
  logoutHandler,
}: {
  user: DecodedToken;
  logoutHandler: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <img
        src={user?.photoUrl || '/images/default-image.avif'}
        alt={user?.name}
        className="w-10 h-10 rounded-full cursor-pointer border border-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 py-2">
          <div className="px-4 py-2 text-sm text-gray-800 font-semibold border-b">
            {user?.name}
          </div>
          <button
            onClick={logoutHandler}
            className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
