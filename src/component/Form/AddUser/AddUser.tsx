import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import {
  RenderInputFieldProp,
  RenderInputFieldProps,
  User,
  InputTagProps,
  InputTagsProps,
} from "./types";

import { mockData } from "./inputTagData";

const InputField = (
  { label, input }: RenderInputFieldProp,
  setUserAction: React.Dispatch<React.SetStateAction<any | undefined>>
) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log('name, value : ', name, value );

    setUserAction((prev: any) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <label htmlFor={`${label.htmlFor}`}>{label.text}</label>
      <input
        type={`${input.type}`}
        id={`${input.id}`}
        name = {`${input.id}`}
        placeholder={`Please enter ${label.text}`}
        onChange={onChangeHandler}
      />
    </div>
  );
};

const InputFields = ({ props }: RenderInputFieldProps) => {
  return (
    <>
      {props.map((prop) => (
        <InputField
          key={prop.input.id}
          input={prop.input}
          label={prop.label}
          setStateAction={prop.setStateAction}
        />
      ))}
    </>
  );
};

const AddUser = (data: InputTagsProps) => {
  const [formData, setFormData] = useState({});

  const transformDataIntoInputFieldPropType: RenderInputFieldProps = {
    props: [
      {
        input: {
          type: "text",
          id: "userName",
        },
        label: {
          text: "User Name",
          htmlFor: "userName",
        },
        setStateAction: setFormData,
      },
      {
        input: {
          type: "text",
          id: "userAge",
        },
        label: {
          text: "User Age",
          htmlFor: "userAge",
        },
        setStateAction: setFormData,
      },
    ],
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('formData: ', formData);

    console.log("Submitted!");
  };

  return (
    <Card key={"AddUser"}>
      <form onSubmit={handleSubmit}>
        <InputFields props={transformDataIntoInputFieldPropType.props} />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
