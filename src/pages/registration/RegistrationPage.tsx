import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegistrationFormValues } from "./registration interfaces";
import { registrationSchema } from "../../validation/validationSchemas";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { Card } from "../../elements/Card";

const RegistrationPage = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values: RegistrationFormValues) => {
    const { email, password } = values;
    createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <div>
      <Card>
        <h1>Create Account</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={registrationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
            <button type="submit">Create Account</button>
          </Form>
        </Formik>
        <p>
          Already have an account? <Link to="/">Log in here</Link>
        </p>
      </Card>
    </div>
  );
};

export default RegistrationPage;
