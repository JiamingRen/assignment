export interface InputFieldProps {
  htmlFor: string;
  label: string;
  type?: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputFieldsProps {
  props: InputFieldProps[];
}
