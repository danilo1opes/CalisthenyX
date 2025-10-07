'use client';

import Link from 'next/link';
import NavItem, { NavbarItem } from '../landing/NavbarItem';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import React from 'react';

export default function Navbar() {
  const [open, setOpen] = React.useState<boolean>(false);
  const pathname = usePathname();

  const toogleMenu = (): void => {
    setOpen(!open);
  };

  const closeMenu = (): void => {
    setOpen(false);
  };

  const items: NavbarItem[] = [
    {
      url: '/',
      label: 'Inicio',
    },
    {
      url: '/',
      label: 'Serviços',
    },
    {
      url: '/',
      label: 'Contato',
    },
  ];

  return (
    <header className="container py-8">
      <nav className="flex justify-between items-center">
        {/* Logo */}

        <Link
          href="/"
          className="text-snow text-3xl md:text-4xl font-bold font-title tracking-wide"
        >
          Calistheny
          <span className="text-brand text-4xl md:text-5xl font-title">X</span>
        </Link>

        <button
          onClick={toogleMenu}
          className="text-snow text-3xl md:hidden z-50 cursor-pointer"
          aria-label="Abrir menu"
        >
          {open ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>

        {/* Menu */}

        <ul className="text-snow hidden md:flex gap-32 font-body">
          {items.map((item, index) => (
            <NavItem
              key={index}
              url={item.url}
              label={item.label}
              isActive={pathname === item.url}
            />
          ))}
        </ul>

        {/* Login */}
        <Link
          href="/"
          className="hidden md:block text-snow p-2 px-8 border border-snow font-body font-bold hover:bg-snow hover:text-black transition-colors"
        >
          Login
        </Link>

        {/* Menu Mobile */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black/100 flex flex-col items-center justify-center gap-10 text-snow text-2xl font-body transform transition-transform duration-500 ease-in-out ${
            open ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`}
        >
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              onClick={closeMenu}
              className={`hover:text-brand ${
                pathname === item.url ? 'text-snow' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/"
            onClick={closeMenu}
            className="border border-snow p-2 px-8 font-bold hover:bg-snow hover:text-black transition-colors"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
