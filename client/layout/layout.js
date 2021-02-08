import React from "react";
import Head from "next/head";
import Menu from "./menu/menu";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
        />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-gray-200 min-h-screen">
        <div className="flex min-h-screen">
          <Menu></Menu>
          <main className="bg-gray-600 sm:w-2/3 xl:w-4/5 p-5">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
