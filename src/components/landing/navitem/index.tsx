import Link from 'next/link';

export interface NavbarItem {
  url: string;
  label: string;
  isActive?: boolean;
  role?: string;
  ariaCurrent?: 'page' | 'step' | 'location' | 'date' | 'time' | undefined;
}

export default function NavItem(props: NavbarItem) {
  return (
    <li>
      <Link
        href={props.url}
        className={`hover:text-hover ${props.isActive ? 'active' : ''}`}
      >
        {props.label}
      </Link>
    </li>
  );
}
