'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { RxDashboard } from 'react-icons/rx';
import { IoFastFoodOutline, IoSearchSharp } from 'react-icons/io5';
import { FaRegListAlt } from 'react-icons/fa';
import { PiSignOutBold } from "react-icons/pi";
import Image from 'next/image';
import logo from '../assests/logoTransparent2.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const handleSignOut = () => {
    console.log('Signing out...');
    closeMenu();
  };

  if (!mounted) return null;

  return (
    <nav className="z-50">
      <div className="p-4 lg:hidden">
        <button onClick={toggleMenu} className="text-3xl text-[#FAA900]">
          <FiMenu />
        </button>
      </div>

      <div
        className={`
          fixed top-0 left-0 h-screen 
          w-full lg:w-[25vw] 
          bg-white 
          shadow-xl lg:shadow-xl/30 
          transition-transform duration-300 ease-in-out z-50
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Image
              className="dark:invert"
              src={logo}
              alt="Logo"
              width={80}
              height={78}
              priority
            />
            <h1 className="text-xl font-bold text-[#FAA900]">Preply</h1>
          </div>
          <button
            onClick={closeMenu}
            className="text-3xl text-[#FAA900] lg:hidden"
          >
            <FiX />
          </button>
        </div>

        <ul className="flex flex-col place-items-start place-self-center justify-center w-full lg:w-[90%] h-[70%] space-y-6 text-xl px-4">
          <li>
            <Link
              href="/"
              onClick={closeMenu}
              className={`flex items-center gap-2 w-full border-b-2 pb-1 ${
                pathname === '/' ? 'border-[#FAA900]' : 'border-[#E9C06B]'
              }`}
            >
              <RxDashboard /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/mealPlan"
              onClick={closeMenu}
              className={`flex items-center gap-2 w-full border-b-2 pb-1 ${
                pathname === '/meaPlan' ? 'border-[#FAA900]' : 'border-[#E9C06B]'
              }`}
            >
              <IoFastFoodOutline /> Meal Plans
            </Link>
          </li>
          <li>
            <Link
              href="/grocery"
              onClick={closeMenu}
              className={`flex items-center gap-2 w-full border-b-2 pb-1 ${
                pathname === '/grocery' ? 'border-[#FAA900]' : 'border-[#E9C06B]'
              }`}
            >
              <FaRegListAlt /> Grocery List
            </Link>
          </li>
          <li>
            <Link
              href="/browse"
              onClick={closeMenu}
              className={`flex items-center gap-2 w-full border-b-2 pb-1 ${
                pathname === '/browse' ? 'border-[#FAA900]' : 'border-[#E9C06B]'
              }`}
            >
              <IoSearchSharp /> Browse
            </Link>
          </li>
        </ul>

        <div className="absolute bottom-5 left-5 w-full flex place-self-start px-4">
          <button
            onClick={handleSignOut}
            className="text-[#D93639] text-xl flex gap-3"
          >
            <PiSignOutBold /> Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}
