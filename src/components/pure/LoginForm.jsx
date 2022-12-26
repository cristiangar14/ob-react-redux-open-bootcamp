import React from "react";
import PropTypes from "prop-types";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Redirect, useHistory } from "react-router-dom";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = ({ loged, fetching, onLogin }) => {
  const initialCredencials = {
    email: "",
    password: "",
  };

  const history = useHistory();
  return (
    
      <Formik
        initialValues={initialCredencials}
        // **** Yup Validation Schema
        validationSchema={loginSchema}
        onSubmit={async (values) => {
            onLogin(values.email, values.password)
        }}
      >
        {/*  We obtain props from formik */}

        {({ errors, touched, isSubmitting }) => {
          return (
            <Form>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="example@email.com"
                type="email"
              />
              {errors.email && touched.email && (
               

                <ErrorMessage component="div" name="email" />
              )}

              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                placeholder="Password"
                type="password"
              />
              {errors.password && touched.password && (
               
                <div className="">
                  <ErrorMessage name="password" />
                </div>
              )}
              <button type="submit">Submit</button>
              {fetching ? <p>LOADING...</p> : null}
              {isSubmitting ? <p>Logins your credentials..</p> : null}
            </Form>
          );
        }}
      </Formik>

  );
};

LoginForm.propTypes = {
    loged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
};

export default LoginForm;
