import React, { ReactNode } from "react";
import styles from "./Card.css";
type CardProps = {
  children: ReactNode;
};

const Card = (props: CardProps) => {
  return <div className={styles.Card}>{props.children}</div>;
};

export default Card;
