import React, { useState } from "react";
import Image, { ImageLoaderProps } from "next/image";
import styles from "./Poster.module.css";

interface PosterProps {
  src: string;
}

const myLoader = ({ src }: ImageLoaderProps) => src;

const Poster = ({ src }: PosterProps) => {
  const [srcToDisplay, setSrcToDisplay] = useState(src);

  return (
    <div className={styles.poster}>
      <Image
        loader={myLoader}
        src={srcToDisplay}
        alt="Picture of the poster"
        width={200}
        height={266}
        onError={() => setSrcToDisplay("images/empty.jpg")}
      />
    </div>
  );
};

export default Poster;
