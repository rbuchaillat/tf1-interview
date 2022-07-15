import React from "react";
import styles from "./Bucket.module.css";

interface BucketProps {
  children: JSX.Element;
}

const Bucket = ({ children }: BucketProps) => {
  return <div className={styles.bucket}>{children}</div>;
};

export default Bucket;
