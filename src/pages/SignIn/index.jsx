import { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import styles from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { signin } from "../../features/signIn/userSlice";
import { useAuth } from "../../customhooks/useAuth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const dispatch = useDispatch();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const data = {};
    for (const [key, value] of form.entries()) {
      data[key] = value;
    }

    try {
      const response = await fetch(
        "https://api-car-rental.binaracademy.org/admin/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const data = await response.json();

        login(data);

        dispatch(
          signin({
            email,
            password,
            loggedIn: true,
          })
        );
      } else {
        setShowAlert(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div id="sign-in">
      <div className={styles["login-form"]}>
        <div className={styles["logo-bcr"]}></div>
        <h1>Welcome, Admin BCR</h1>
        {showAlert && (
          <Alert color="danger">
            Masukkan username dan password yang benar. Perhatikan penggunaan
            huruf kapital.
          </Alert>
        )}
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Contoh: johndee@gmail.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="6+ karakter"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button color="primary" type="submit" block>
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
