"use client";

import Link from "next/link";
import {
  HomeFilledIcon,
  HomeIcon,
  NewFilledIcon,
  NewIcon,
  SearchFilledIcon,
  SearchIcon,
} from "./ui/icons";
import { usePathname } from "next/navigation";
import ColorButton from "./ui/ColorButton";
import { useSession, signIn, signOut } from "next-auth/react";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFilledIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFilledIcon />,
  },
  {
    href: "/new",
    icon: <NewIcon />,
    clickedIcon: <NewFilledIcon />,
  },
];

export default function Navbar() {
  const pathName = usePathname();
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center m-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">Instantgram</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center p-4">
          {menu.map(({ href, icon, clickedIcon }) => (
            <li key={href}>
              <Link href={href}>{pathName === href ? clickedIcon : icon}</Link>
            </li>
          ))}
          {session ? (
            <ColorButton text="Log out" onClick={() => signOut()} />
          ) : (
            <ColorButton text="Log in" onClick={() => signIn()} />
          )}
        </ul>
      </nav>
    </div>
  );
}
