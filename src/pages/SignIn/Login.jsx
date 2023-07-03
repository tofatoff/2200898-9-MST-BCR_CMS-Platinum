import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "reactstrap";

import loginImg from "../../assets/login-img.webp";
import logo from "../../assets/logo.svg";
import adminLogin from "../../store/auth";
import LoginError from "./LoginError";

const Login = () => {
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "E-mail tidak valid")
      .required("E-mail tidak boleh kosong"),
    password: yup.string().min(6, "Isi minimal 6 karakter").required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const result = await adminLogin(data, setIsError);
    if (result) {
      navigate("/dashboard");
    }
  };

  return (
    <section className="container-fluid">
      <div className="row d-flex flex-row">
        <div className="col vh-100 p-0 mb-lg-0 d-none d-lg-block">
          <img
            src={loginImg}
            alt="login"
            className="h-100 w-100"
            style={{ objectFit: "fill" }}
          />
        </div>
        <div className="d-flex flex-column col align-items-center justify-content-center p-5 p-lg-2 vh-100">
          <div>
            <img src={logo} alt="logo" className="d-none d-lg-block mb-4" />
            <h1 className="mb-4">Welcome, Admin BCR</h1>
            {isError && <LoginError />}
            <form
              className="d-flex flex-column gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="d-flex flex-column gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Contoh: johndee@gmail.com"
                  className="p-1"
                  {...register("email", { required: true })}
                />
                <span className="text-danger">{errors.email?.message}</span>
              </div>
              <div className="d-flex flex-column gap-2 mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="6+ karakter"
                  className="p-1"
                  {...register("password", { required: true, minLength: 6 })}
                />
                <span className="text-danger">{errors.password?.message}</span>
              </div>
              <Button color="primary" type="submit" block>
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
