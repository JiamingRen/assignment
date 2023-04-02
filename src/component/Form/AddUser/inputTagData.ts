import { InputTagsProps } from "./types";

export const mockData: InputTagsProps = {
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
