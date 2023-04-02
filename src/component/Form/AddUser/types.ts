export interface RenderInputFieldProp {
  label: {
    text: string;
    htmlFor: string;
  };
  input: {
    type: string;
    id: string;
  };
  setStateAction: React.Dispatch<React.SetStateAction<any | undefined>>;
}

export interface RenderInputFieldProps {
  props: RenderInputFieldProp[];
}

export interface User {
  name: string;
  age: number;
}

export interface InputTagProps {
  label: {
    text: string;
    htmlFor: string;
  };
  input: {
    type: string;
    id: string;
  };
}

export interface InputTagsProps {
  props: InputTagProps[];
}
