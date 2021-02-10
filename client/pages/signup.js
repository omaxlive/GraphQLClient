import React from "react";
import Layout from "../layout/layout";
import { useFormik } from "formik";

export default function Signup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("values: ", values);
    },
  });

  return (
    <div>
      <Layout>
        <h1 className="text-2xl text-white font-light text-center">Signup</h1>
        {/* NOTE: from https://tailwindcomponents.com/component/login-form */}
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="name"
              type="text"
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="lastname"
          >
            Last name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="lastname"
            type="text"
            placeholder="Last name"
            value={formik.values.lastname}
            onChange={formik.handleChange}
          />
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="email"
            type="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="******************"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <p className="text-red text-xs italic">Please choose a password.</p>
          <div className="flex items-center justify-between mt-3">
            <input
              className="text-white bg-blue-800 hover:bg-blue-dark font-bold py-2 px-4 rounded"
              type="submit"
              value="Signup"
            />
          </div>
        </form>
      </Layout>
    </div>
  );
}
