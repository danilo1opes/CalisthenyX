'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'mobile';
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
      'bg-brand text-snow hover:bg-brand/80 active:bg-brand/70 focus:bg-brand/80',
    secondary:
      'border border-snow text-snow hover:bg-snow hover:text-black active:bg-snow active:text-black focus:bg-snow focus:text-black',
    outline:
      'border border-brand text-snow hover:bg-snow hover:text-black active:bg-snow active:text-black focus:bg-snow focus:text-black hover:border-snow active:border-snow focus:border-snow',
    mobile:
      'border border-snow text-black bg-snow hover:scale-105 active:scale-105 focus:scale-105',
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
