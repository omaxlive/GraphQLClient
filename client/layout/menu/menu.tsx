// eslint-disable-next-line no-use-before-define
import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Menu: FC = () => {
  const router = useRouter();
  return (
    <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">
      <div>
        <p className="text-white text-2xl font-black">CRM Customers</p>
      </div>

      <nav className="mt-5 list-none">
        <li className={router.pathname === '/customers' ? 'bg-blue-800 p-2' : 'p-2'}>
          <Link href="/">
            <a className="text-white block">Customers</a>
          </Link>
        </li>
        <li className={router.pathname === '/orders' ? 'bg-blue-800 p-2' : 'p-2'}>
          <Link href="/orders">
            <a className="text-white block">Orders</a>
          </Link>
        </li>
        <li className={router.pathname === '/products' ? 'bg-blue-800 p-2' : 'p-2'}>
          <Link href="/products">
            <a className="text-white block">Products</a>
          </Link>
        </li>
      </nav>

      <div className="sm:mt-10">
        <p className="text-white text-2xl font-black">Other Options</p>
      </div>
      <nav className="mt-5 list-none">
        <li className={router.pathname === '/topsellers' ? 'bg-blue-800 p-2' : 'p-2'}>
          <Link href="/topsellers">
            <a className="text-white block">Top Sellers</a>
          </Link>
        </li>
        <li className={router.pathname === '/topcustomers' ? 'bg-blue-800 p-2' : 'p-2'}>
          <Link href="/topcustomers">
            <a className="text-white block">Top Customers</a>
          </Link>
        </li>
        <li className={router.pathname === '/about-us' ? 'bg-blue-800 p-3' : 'p-3'}>
          <Link href="/about-us">
            <a className="text-white block">About us</a>
          </Link>
        </li>
      </nav>
    </aside>
    // <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 p-5">
    //   <p className="text-white text-2xl font-black">Menu</p>
    //   <nav className="mt-5 list-none">
    //     <li className={router.pathname === '/' ? 'bg-blue-800 p-3' : 'p-3'}>
    //       <Link href="/">
    //         <a className="text-white block">Home</a>
    //       </Link>
    //     </li>
    //     <li className={router.pathname === '/posts' ? 'bg-blue-800 p-3' : 'p-3'}>
    //       <Link href="/posts">
    //         <a className="text-white block">Posts</a>
    //       </Link>
    //     </li>
    //     <li className={router.pathname === '/customers' ? 'bg-blue-800 p-3' : 'p-3'}>
    //       <Link href="/customers">
    //         <a className="text-white block">Customers</a>
    //       </Link>
    //     </li>
    // <li className={router.pathname === '/about-us' ? 'bg-blue-800 p-3' : 'p-3'}>
    //   <Link href="/about-us">
    //     <a className="text-white block">About us</a>
    //   </Link>
    // </li>
    //   </nav>
    // </aside>
  );
};
