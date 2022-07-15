import React from "react";
import Title from "../atoms/title/Title";
import Poster from "../atoms/poster/Poster";
import ButtonCard from "../atoms/button-card/ButtonCard";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  src: string;
}

const Card = ({ title, src }: CardProps) => (
  <section className={styles.card}>
    <div className={styles.card_poster}>
      <Poster src={src} />
      <ButtonCard
        styleFromParent={{ position: "absolute", bottom: 6, right: 6 }}
      />
    </div>
    <Title
      title={title}
      styleFromParent={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
      }}
    />
  </section>
);

export default Card;
