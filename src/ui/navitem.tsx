import Link from 'next/link';

export interface NavbarItem {
  url: string;
  label: string;
  isActive?: boolean;
  ariaCurrent?: 'page' | 'step' | 'location' | 'date' | 'time' | undefined;
}

export default function NavItem(props: NavbarItem) {
  return (
    <Link
      href={props.url}
      aria-current={props.ariaCurrent}
      className={`hover:text-hover transition-colors ${
        props.isActive ? 'text-brand font-bold' : ''
      }`}
    >
      {props.label}
    </Link>
  );
}
