import React from "react";
import Card from "../../UI/Card/Card";

interface InputFieldProp {
  label: {
    text: string;
    htmlFor: string;
  };
  input: {
    type: string;
    id: string;
  };
}

interface InputFieldProps {
  props: InputFieldProp[];
}

const mockData: InputFieldProps = {
  props: [
    {
      input: {
        id: "userName",
        type: "text",
      },
      label: {
        htmlFor: "userName",
        text: "User Name",
      },
    },
    {
      input: {
        id: "userAge",
        type: "text",
      },
      label: {
        htmlFor: "userAge",
        text: "User Age",
      },
    },
  ],
};

const InputField = ({ label, input }: InputFieldProp) => {
  return (
    <div>
      <label htmlFor={`${label.htmlFor}`}>{label.text}</label>
      <input
        type={`${input.type}`}
        id={`${input.id}`}
        placeholder={`Please enter ${label.text}`}
      />
    </div>
  );
};

const InputFields = ({ props }: InputFieldProps) => {
  return (
    <>
      {props.map((prop) => (
        <InputField key={prop.input.id} input={prop.input} label={prop.label} />
      ))}
    </>
  );
};

const AddUser = () => {
  return (
    <Card>
      <form>
        <InputFields props={mockData.props} />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
