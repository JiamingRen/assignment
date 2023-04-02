import React from "react";
import { InputFieldProps } from "./type";

const InputField = ({
  htmlFor,
  label,
  name,
  onChange,
  type = "text",
}: InputFieldProps) => {
  return (
    <>
      <label htmlFor={`${htmlFor}`}>
        {label}
        <input type={`${type}`} name={`${name}`} onChange={onChange} />
      </label>
    </>
  );
};

export default InputField;
