'use client'
import clsx from "clsx";
import { useState } from "react";

export default function DropdownList() { 
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative inline-block text-left">
    <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
      Options
          <img src='/img/icon-arrow.svg' width={20} height={20} alt=''/>
      </button>
    </div>

      <div
        className={clsx(`absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md
         bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`, {'hidden': !isOpen})}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
    <div className="py-1" role="none">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="selectitem" tabIndex={-1} id="menu-item-0">Account settings</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="selectitem" tabIndex={-1} id="menu-item-1">Support</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="selectitem" tabIndex={-1} id="menu-item-2">License</a>
      <form method="POST" action="#" role="none">
        <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</button>
      </form>
    </div>
  </div>
</div>
  )
}