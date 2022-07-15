import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Card from "../molecules/Card";
import { Program } from "../../../interfaces/program.interfaces";
import styles from "./Carousel.module.css";
import ButtonCarousel from "../atoms/button-carousel/ButtonCarousel";

interface CarouselProps {
  programs: Program[];
}

const Carousel = ({ programs }: CarouselProps) => {
  const [numberItems, setNumberItems] = useState(6);
  const [pagination, setPagination] = useState(0);
  const isBigScreen = useMediaQuery({ query: "(min-width: 901px)" });
  const isLaptopScreen = useMediaQuery({ query: "(max-width: 900px)" });

  useEffect(() => {
    if (isBigScreen) setNumberItems(6);
    if (isLaptopScreen) setNumberItems(2);
  }, [isBigScreen, isLaptopScreen]);

  const handleClickPrevious = () => {
    if (pagination === 0) return;
    setPagination(pagination - 1);
  };

  const handleClickNext = () => {
    if (pagination + numberItems >= programs.length) return;
    setPagination(pagination + 1);
  };

  return (
    <div className={styles.carousel}>
      <div onClick={handleClickPrevious}>
        <ButtonCarousel />
      </div>
      <div className={styles.carousel_card}>
        {programs.slice(pagination, pagination + numberItems).map((program) => (
          <Card
            key={program.id}
            title={program.name}
            src={program.thumnail.url}
          />
        ))}
      </div>
      <div style={{ transform: "rotate(180deg)" }} onClick={handleClickNext}>
        <ButtonCarousel />
      </div>
    </div>
  );
};

export default Carousel;
