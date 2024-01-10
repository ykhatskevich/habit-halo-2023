import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { LoginFormValues } from "./login interfaces";
import { loginSchema } from "../../validation/validationSchemas";
import Modal from "../../elements/modal/Modal";
import { Card } from "../../elements/Card";
import { Container, BackgroundImage } from "./LoginPage.styles";
import useModal from "../../custom hooks/useModal";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/main");
      }
    });
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (
    values: LoginFormValues,
    { setFieldError }: FormikHelpers<LoginFormValues>
  ) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      navigate("/main");
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        setFieldError("email", "No user found with this email");
      } else if (error.code === "auth/wrong-password") {
        setFieldError("password", "Incorrect password");
      } else {
        setFieldError("email", "Login failed. Please try again.");
      }
    }
  };

  return (
    <Container>
      <BackgroundImage />
      <Card>
        <h1>Log In</h1>
        <h3>Please enter your details to login</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
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

            <button type="submit">Login</button>
          </Form>
        </Formik>

        <p>
          No account yet? <Link to="/register">Click here to register</Link>
        </p>
        <button onClick={handleOpenModal}>About Habit Halo</button>
      </Card>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="About Habit Halo"
      >
        <p>Information about Habit Halo...</p>
      </Modal>
    </Container>
  );
};

export default LoginPage;
