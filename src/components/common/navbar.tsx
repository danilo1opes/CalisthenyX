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

  const toggleMenu = (): void => {
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

  // Previne scroll
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <header className="container py-8" role="banner">
      <nav
        aria-label="Navegação principal"
        className="flex justify-between items-center"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Voltar para a página inicial"
          className="text-snow text-3xl md:text-4xl font-bold font-title tracking-wide"
        >
          <span aria-hidden="true">
            Calisteny
            <span className="text-brand text-4xl md:text-5xl font-title">
              X
            </span>
          </span>
        </Link>

        {/* Button Mobile */}
        <button
          onClick={toggleMenu}
          className="text-snow text-3xl md:hidden z-50 cursor-pointer"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-haspopup="true"
          aria-label={
            open ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
          }
        >
          {open ? (
            <FaTimes size={28} aria-hidden="true" />
          ) : (
            <FaBars size={28} aria-hidden="true" />
          )}
        </button>

        {/* Menu Desktop */}
        <ul
          className="text-snow hidden md:flex md:gap-16 lg:gap-32 font-body"
          role="menubar"
          aria-label="Links principais do site"
        >
          {items.map((item, index) => (
            <NavItem
              key={index}
              url={item.url}
              label={item.label}
              isActive={pathname === item.url}
              ariaCurrent={pathname === item.url ? 'page' : undefined}
              role="none"
            />
          ))}
        </ul>

        {/* Login Desktop */}
        <Link
          href="/"
          className="hidden md:block text-snow p-2 px-8 border border-snow font-body font-bold hover:bg-snow hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-brand"
        >
          Login
        </Link>

        {/* Menu Mobile */}
        {open && (
          <div
            id="menu-mobile"
            role="dialog"
            aria-modal="true"
            aria-labelledby="menu-mobile-title"
            className="fixed inset-0 w-full h-full bg-black/100 flex flex-col items-center justify-center gap-10 text-snow text-2xl font-body z-40 md:hidden"
          >
            <h2 id="menu-mobile-title" className="sr-only">
              Menu de navegação principal
            </h2>

            <nav aria-label="Menu mobile">
              <ul className="flex flex-col items-center gap-10" role="menu">
                {items.map((item, index) => (
                  <li key={index} role="none">
                    <Link
                      href={item.url}
                      onClick={closeMenu}
                      aria-current={pathname === item.url ? 'page' : undefined}
                      role="menuitem"
                      className={`hover:text-brand focus:text-brand focus:outline-none focus:ring-2 focus:ring-brand ${
                        pathname === item.url ? 'text-brand font-bold' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              href="/"
              onClick={closeMenu}
              className="border border-snow p-2 px-8 font-bold hover:bg-snow hover:text-black focus:bg-snow focus:text-black focus:outline-none focus:ring-2 focus:ring-brand transition-colors"
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
