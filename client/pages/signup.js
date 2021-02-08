import React from "react";
import Layout from "../layout/layout";

export default function Signup() {
  return (
    <div>
      <Layout>
        <h1 className="text-2xl text-white font-light text-center">Signup</h1>
        {/* NOTE: from https://tailwindcomponents.com/component/login-form */}
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div class="mb-4">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="username"
            >
              Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="username"
          >
            Last name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="lastname"
            type="text"
            placeholder="Last name"
          />
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="username"
          >
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="email"
            type="email"
            placeholder="Email"
          />
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p class="text-red text-xs italic">Please choose a password.</p>
          <div class="flex items-center justify-between mt-3">
            <input
              class="text-white bg-blue-800 hover:bg-blue-dark font-bold py-2 px-4 rounded"
              type="submit"
              value="Signup"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}
