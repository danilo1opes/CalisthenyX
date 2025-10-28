'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  ariaLabel?: string;
}

export default function Button({
  href,
  children,
  variant = 'primary',
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    'inline-block font-semibold px-6 py-3 transition-all duration-300 active:scale-95';

  const variants = {
    primary:
      'bg-brand text-white hover:bg-brand/80 active:bg-brand/70 focus:bg-brand/80',
    secondary:
      'border border-white text-white hover:bg-white hover:text-black active:bg-white active:text-black focus:bg-white focus:text-black',
    outline:
      'border border-brand text-white hover:bg-white hover:text-black active:bg-white active:text-black focus:bg-white focus:text-black hover:border-white active:border-white focus:border-white',
  };

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={clsx(baseStyles, variants[variant])}
    >
      {children}
    </Link>
  );
}
