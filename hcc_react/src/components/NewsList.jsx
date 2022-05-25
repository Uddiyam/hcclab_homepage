import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function NewsList({ year, group, context }) {
  // useEffect(() => {
  //   const setText = () => {
  //     document.querySelector(".newstext").innerHTML = context;
  //   };
  //   setText();
  // }, []);

  return (
    <div className={styles.oneview}>
      <span className={styles.newstext}>{year}</span>
      <span className={styles.newstext}>{"[" + group + "]"}</span>
      <span className={styles.newstext}>{context}</span>
    </div>
  );
}
