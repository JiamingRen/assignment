import React, { useState } from "react";

const AddUserTwo = () => {
  const [formData, setFormData] = useState({});

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev: any) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="userName">
        Name:
        <input type="text" name="userName" onChange={onChangeHandler} />
      </label>
      <label htmlFor="userAge">
        Age:
        <input type="text" name="userAge" onChange={onChangeHandler} />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserTwo;
