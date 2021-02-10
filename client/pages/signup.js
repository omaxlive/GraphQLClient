import React from "react";
import Layout from "../layout/layout";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Signup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is mandatory"),
      lastname: Yup.string().required("Lastname is mandatory"),
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
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
              <p className="font-bold">Error</p>
              <p className="font-bold">{formik.errors.name}</p>
            </div>
          ) : null}
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
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
              <p className="font-bold">Error</p>
              <p className="font-bold">{formik.errors.lastname}</p>
            </div>
          ) : null}
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
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
              <p className="font-bold">Error</p>
              <p className="font-bold">{formik.errors.email}</p>
            </div>
          ) : null}
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
