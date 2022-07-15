import React from "react";
import Image from "next/image";
import styles from "./ButtonCard.module.css";

interface ButtonCardProps {
  styleFromParent?: React.CSSProperties;
}

const ButtonCard = ({ styleFromParent }: ButtonCardProps) => (
  <div className={styles.button} style={{ ...styleFromParent }}>
    <Image src="/images/add.svg" alt="Add element" width="16" height="16" />
  </div>
);

export default ButtonCard;
