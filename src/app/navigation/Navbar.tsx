import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <nav className="bg-gray-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Bars3Icon className="size-6 text-slate-500" />
            <span className="text-white text-xl font-semibold ml-2">
              UéPP
            </span>
          </div>
          {/* Search Bar */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-white p-2 rounded-md focus:outline-none"
            />
          </div>
        </div>
        {/* Right icons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a5 5 0 00-10 0v3.158c0 .538-.214 1.055-.595 1.437L6 17h5m4 0v2a2 2 0 11-8 0v-2m8 0H7"
              />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
          <UserCircleIcon className="size-6 text-slate-200" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
