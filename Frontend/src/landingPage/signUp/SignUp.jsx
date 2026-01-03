import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FlashContext } from "../../FlashContext";
import FlashToast from "../../FlashToast";
const SignUpValidationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .required("Username Required"),
  email: Yup.string().email("Invalid email format").required("Email Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password Required"),
});

function SignUp() {
  const [loading, setLoading] = useState(false);
  const { showFlash } = useContext(FlashContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: SignUpValidationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BASEBACKEND_URL}/signup`,
          {
            name: values.username,
            email: values.email,
            password: values.password,
          },
          {
            withCredentials: true,
          }
        );

        if (res.data.success) {
          showFlash("success", res.data?.message || "Welcome To Zerodha World");
          window.location.replace(import.meta.env.VITE_DASHBOARD_URL);
          return;
        }
      } catch (err) {
        showFlash(
          "error",
          err.response?.data?.message || "something went wrong"
        );
        formik.resetForm();
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div>
      <FlashToast />
      <div className="row justify-content-center" style={{ margin: "8rem" }}>
        <form
          className="col-8 col-md-6 col-lg-4 m-5 d-flex flex-column"
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <div className="form-floating mb-3">
            <input
              type="username"
              name="username"
              id="floatingInput1"
              placeholder="username"
              className={`form-control ${
                formik.touched.username && formik.errors.username
                  ? "is-invalid"
                  : ""
              }`}
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Username</label>
            {formik.touched.username && formik.errors.username && (
              <div className="invalid-feedback">{formik.errors.username}</div>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              name="email"
              id="floatingInput2"
              placeholder="name@example.com"
              className={`form-control ${
                formik.touched.email && formik.errors.email ? "is-invalid" : ""
              }`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Email address</label>
            {formik.touched.email && formik.errors.email && (
              <div className="invalid-feedback">{formik.errors.email}</div>
            )}
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              className={`form-control ${
                formik.touched.password && formik.errors.password
                  ? "is-invalid"
                  : ""
              }`}
              id="floatingPassword"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingPassword">Password</label>
            {formik.touched.password && formik.errors.password && (
              <div className="invalid-feedback">{formik.errors.password}</div>
            )}
          </div>
          <button
            className={`btn btn-success mt-3 ms-auto ps-4 pe-4 ${
              loading ? "disabled" : ""
            }`}
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
