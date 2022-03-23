import React from 'react';

function Navbar() {
  return (
    <div className="flex items-center justify-between px-1 lg:px-8 py-2 shadow-sm bg-slate-50 ...">
      <img className="w-20 lg:w-48 " src="images/Rectangle.png" alt="Brands" />

      <div className="flex list-none ">
        <li className="px-1 text-sm lg:text-xl lg:px-4">Skip the hassle</li>
        <li className="px-1 text-sm lg:text-xl lg:px-4">
          Cruise through backend
        </li>
      </div>

      <button className="bg-blue-700 text-cyan-50 px-0 lg:px-2 py-2 text-sm lg:text-xl">
        Get Early Access
      </button>
    </div>
  );
}

export default Navbar;
