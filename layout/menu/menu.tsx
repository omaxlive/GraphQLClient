// eslint-disable-next-line no-use-before-define
import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Menu: FC = () => {
  const router = useRouter();
  return (
    // <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">
    //   <div>
    //     <p className="text-white text-2xl font-black">CRM Customers</p>
    //   </div>

    //   <nav className="mt-5 list-none">
    //     <li className={router.pathname === '/customers' ? 'bg-blue-800 p-2' : 'p-2'}>
    //       <Link href="/">
    //         <a className="text-white block">Customers</a>
    //       </Link>
    //     </li>
    //     <li className={router.pathname === '/orders' ? 'bg-blue-800 p-2' : 'p-2'}>
    //       <Link href="/orders">
    //         <a className="text-white block">Orders</a>
    //       </Link>
    //     </li>
    //     <li className={router.pathname === '/products' ? 'bg-blue-800 p-2' : 'p-2'}>
    //       <Link href="/products">
    //         <a className="text-white block">Products</a>
    //       </Link>
    //     </li>
    //   </nav>

    //   <div className="sm:mt-10">
    //     <p className="text-white text-2xl font-black">Other Options</p>
    //   </div>
    //   <nav className="mt-5 list-none">
    //     <li className={router.pathname === '/topsellers' ? 'bg-blue-800 p-2' : 'p-2'}>
    //       <Link href="/statistics/topsellers">
    //         <a className="text-white block">Top Sellers</a>
    //       </Link>
    //     </li>
    //     <li className={router.pathname === '/topcustomers' ? 'bg-blue-800 p-2' : 'p-2'}>
    //       <Link href="/statistics/topcustomers">
    //         <a className="text-white block">Top Customers</a>
    //       </Link>
    //     </li>
    //     <li className={router.pathname === '/about-us' ? 'bg-blue-800 p-3' : 'p-3'}>
    //       <Link href="/about-us">
    //         <a className="text-white block">About us</a>
    //       </Link>
    //     </li>
    //   </nav>
    // </aside>
    // <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">
    <div className="min-h-screen sm:w-1/3 xl:w-1/5">
      <div className="fixed flex flex-col top-0 bg-gray-900 h-full shadow-lg sm:w-1/3 xl:w-1/5">
        <div className="flex items-center pl-6 h-20 border-b border-gray-800">
          <img
            src="https://pbs.twimg.com/profile_images/956759714653642752/X1S49c8a_400x400.jpg"
            alt=""
            className="rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-blue-500"
          />
          <div className="ml-1">
            <p className="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans">John Doe</p>
            <div className="badge">
              <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full">
                Admin
              </span>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-6 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">CRM Customers</div>
              </div>
            </li>
            <li>
              <Link href="/">
                <div className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Customers</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/orders">
                <div className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Orders</span>
                  <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-blue-100 rounded-full">
                    New
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <div className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Products</span>
                </div>
              </Link>
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">Other Options</div>
              </div>
            </li>
            <li>
              <Link href="/statistics/topsellers">
                <div className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Top sellers</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/statistics/topcustomers">
                <div className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Top Customers</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // </aside>
  );
};
