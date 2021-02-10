import React from "react";
import Layout from "../layout/layout";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email format not valid")
        .required("Email is mandatory"),
      password: Yup.string()
        .required("Password is mandatory")
        .min(6, "The password must contain at least 6 characters "),
    }),
    onSubmit: (values) => {
      console.log("values: ", values);
    },
  });

  return (
    <div>
      <Layout>
        <h1 className="text-2xl text-white font-light text-center">Login</h1>
        {/* NOTE: from https://tailwindcomponents.com/component/login-form */}
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
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
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p className="font-bold">{formik.errors.email}</p>
              </div>
            ) : null}
          </div>
          <div className="mb-6">
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
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p className="font-bold">{formik.errors.password}</p>
              </div>
            ) : null}
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <input
              className="text-white bg-blue-800 hover:bg-blue-dark font-bold py-2 px-4 rounded"
              type="submit"
              value="Sign in"
            />
            <a
              className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </Layout>
    </div>
  );
}
