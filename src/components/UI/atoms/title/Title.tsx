import React from "react";
import styles from "./Title.module.css";

interface TitleProps {
  title: string;
  styleFromParent?: React.CSSProperties;
}

const Title = ({ title, styleFromParent }: TitleProps) => (
  <h2 className={styles.title} style={{ ...styleFromParent }}>
    {title}
  </h2>
);

export default Title;
