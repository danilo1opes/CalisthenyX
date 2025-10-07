import Link from 'next/link';

export interface NavbarItem {
  url: string;
  label: string;
  isActive?: boolean;
}

export default function NavItem(props: NavbarItem) {
  return (
    <li>
      <Link
        href={props.url}
        className={`hover:text-brand ${props.isActive ? 'active' : ''}`}
      >
        {props.label}
      </Link>
    </li>
  );
}
