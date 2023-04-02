import React from "react";
import { InputFieldsProps, InputFieldProps } from "./type";
import InputField from "./InputField";

const InputFields = ({ props }: InputFieldsProps) => {
  const items = props;
  return (
    <>
      {items.map((item: InputFieldProps) => {
        const { htmlFor, label, name, onChange, type } = item;
        return (
          <InputField
            htmlFor={htmlFor}
            label={label}
            name={name}
            onChange={onChange}
            type={type}
          ></InputField>
        );
      })}
    </>
  );
};

export default InputFields;
