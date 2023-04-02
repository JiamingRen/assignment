import React, { useState } from "react";
import InputFields from "../../UI/InputField/InputFields";
import { InputFieldsProps } from "../../UI/InputField/type";
import Card from "../../UI/Card/Card";

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

  const addUserData: InputFieldsProps = {
    props: [
      {
        htmlFor: "userName",
        label: "Name: ",
        name: "userName",
        type: "text",
        onChange: onChangeHandler,
      },
      {
        htmlFor: "userAge",
        label: "Age: ",
        name: "userAge",
        type: "text",
        onChange: onChangeHandler,
      },
    ],
  };

  return (
    <Card>
      <form onSubmit={onSubmitHandler}>
        <InputFields props={addUserData.props} />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUserTwo;
