import React from "react";
import useForm from "react-hook-form";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriend = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    axiosWithAuth()
      .post("/friends", values)
      .then(window.alert("Friend Added"))
      .catch(err => console.log(err));
    window.location.reload();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" name="name" ref={register} />
      <input type="number" placeholder="age" name="age" ref={register} />
      <input type="text" placeholder="email" name="email" ref={register} />

      <input type="submit" />
    </form>
  );
};

export default AddFriend;
