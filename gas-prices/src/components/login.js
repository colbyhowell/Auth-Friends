import React from "react";
import useForm from "react-hook-form";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const Login = props => {
  const { handleSubmit, register, errors } = useForm();
  const history = useHistory();
  const onSubmit = values => {
    axiosWithAuth()
      .post("/login", values)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        history.push("/friendlist");
      })
      .catch(err => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="username"
        name="username"
        ref={register}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        ref={register}
      />
      <input type="submit" />
    </form>
  );
};

export default Login;
