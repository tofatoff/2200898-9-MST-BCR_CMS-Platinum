import React from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import styles from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SignIn = () => {
  return (
    <div id="sign-in">
      <div className={styles["login-form"]}>
        <div className={styles["logo-bcr"]}></div>
        <h1>Welcome, Admin BCR</h1>
        <Alert color="danger">Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.</Alert>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input id="exampleEmail" name="email" placeholder="Contoh: johndee@gmail.com" type="email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input id="examplePassword" name="password" placeholder="6+ karakter" type="password" />
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
