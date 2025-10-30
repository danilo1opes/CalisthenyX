'use client';

import Link from 'next/link';
import React from 'react';
import NavItem from '../../ui/navitem';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { items } from '@/data/navItems';

export default function Navbar() {
  const [open, setOpen] = React.useState<boolean>(false);
  const pathname = usePathname();

  const toogleMenu = (): void => {
    setOpen(!open);
  };

  const closeMenu = (): void => {
    setOpen(false);
  };

  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <header className="container py-8">
      <nav
        aria-label="Navegação principal"
        className="flex justify-between items-center"
      >
        {/* Logo */}

        <Link
          href="/"
          aria-label="Página inicial da CalisthenyX"
          className="text-snow text-3xl md:text-4xl font-bold font-title tracking-wide"
        >
          Calisteny
          <span className="text-brand text-4xl md:text-5xl font-title">X</span>
        </Link>

        <button
          onClick={toogleMenu}
          className="text-snow text-3xl md:hidden z-50 cursor-pointer"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={
            open ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
          }
        >
          {open ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>

        {/* Menu */}

        <ul
          className="text-snow hidden md:flex md:gap-16 lg:gap-32 font-body"
          role="menubar"
        >
          {items.map((item, index) => (
            <NavItem
              key={index}
              url={item.url}
              label={item.label}
              isActive={pathname === item.url}
              role="menuitem"
              ariaCurrent={pathname === item.url ? 'page' : undefined}
            />
          ))}
        </ul>

        {/* Login */}
        <Link
          href="/"
          className="hidden md:block text-snow p-2 px-8 border border-snow font-body font-bold hover:bg-snow hover:text-black transition-colors"
          aria-label="Ir para página de login"
        >
          Login
        </Link>

        {/* Menu Mobile */}
        <div
          id="menu-mobile"
          role="dialog"
          aria-modal="true"
          aria-labelledby="menu-title"
          className={`fixed top-0 left-0 w-full h-full bg-black/100 flex flex-col items-center justify-center gap-10 text-snow text-2xl font-body transform transition-transform duration-500 ease-in-out z-2 ${
            open ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`}
        >
          <h2 id="menu-title" className="sr-only">
            Menu de navegação principal
          </h2>

          <ul
            role="menu"
            aria-label="Menu principal"
            className="flex flex-col items-center gap-10"
          >
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                onClick={closeMenu}
                role="menuitem"
                tabIndex={open ? 0 : -1}
                aria-current={pathname === item.url ? 'page' : undefined}
                className={`hover:text-brand active:text-brand focus:text-brand ${
                  pathname === item.url ? 'text-snow' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </ul>

          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Ir para página de login"
            role="menuitem"
            tabIndex={open ? 0 : -1}
            className="border border-snow p-2 px-8 font-bold hover:bg-snow hover:text-black active:bg-snow active:text-black focus:bg-snow focus:text-black transition-colors"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
