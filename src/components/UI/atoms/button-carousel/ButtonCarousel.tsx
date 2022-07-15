import React from "react";
import Image from "next/image";
import styles from "./ButtonCarousel.module.css";

interface ButtonCarouselProps {
  styleFromParent?: React.CSSProperties;
}

const ButtonCarousel = ({ styleFromParent }: ButtonCarouselProps) => (
  <div className={styles.button} style={{ ...styleFromParent }}>
    <Image
      src="/images/chevron.svg"
      alt="Add element"
      width="17"
      height="30.63"
    />
  </div>
);

export default ButtonCarousel;
