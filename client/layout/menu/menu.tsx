// eslint-disable-next-line no-use-before-define
import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Menu: FC = () => {
  const router = useRouter();
  return (
    <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 p-5">
      <p className="text-white text-2xl font-black">Menu</p>
      <nav className="mt-5 list-none">
        <li className={router.pathname === '/' ? 'bg-blue-800 p-3' : 'p-3'}>
          <Link href="/">
            <a className="text-white block">Home</a>
          </Link>
        </li>
        <li className={router.pathname === '/posts' ? 'bg-blue-800 p-3' : 'p-3'}>
          <Link href="/posts">
            <a className="text-white block">Posts</a>
          </Link>
        </li>
        <li className={router.pathname === '/about-us' ? 'bg-blue-800 p-3' : 'p-3'}>
          <Link href="/about-us">
            <a className="text-white block">About us</a>
          </Link>
        </li>
      </nav>
    </aside>
  );
};
