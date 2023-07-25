import React from "react";
import { Link } from "react-router-dom";

const navigation = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Products",
    path: "/products",
  },
  {
    id: 3,
    name: "About",
    path: "/about",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
];

function Header() {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="bg-blue-400 w-full mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center fixed">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">OnlyShops</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {navigation.map((nav) => {
            return (
              <Link
                key={nav.id}
                to={nav.path}
                className="mr-5 hover:text-gray-900"
              >
                {nav.name}
              </Link>
            );
          })}
        </nav>
        <button className="inline-flex items-center bg-indigo-100 border-0 py-2 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0">
          Cart
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
