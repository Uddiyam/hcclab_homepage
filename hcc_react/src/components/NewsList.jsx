import React from "react";
import styles from "../styles/Home.module.css";

export default function NewsList({ year, group, context }) {
  return (
    <div className={styles.oneview}>
      <span className={styles.newstext}>{year}</span>
      <span className={styles.newstext}>{"[" + group + "]"}</span>
      <span
        className={styles.newstext}
        dangerouslySetInnerHTML={{ __html: context }}
      >
        {}
      </span>
    </div>
  );
}
