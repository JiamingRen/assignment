import React, { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

const Card = (props: CardProps) => {
  return <div>{props.children}</div>;
};

export default Card;
